import { FastifyInstance } from "fastify";
import fp, { PluginMetadata } from "fastify-plugin";
import mongoose from "mongoose";

// Close the Mongoose default connection is the event of application termination
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  process.exit(0);
});

export const mongoDBConfig: mongoose.ConnectOptions = {};

async function setup(fastify: FastifyInstance, options: PluginMetadata) {
  mongoose.connection.on("connected", () => {
    fastify.log.info({ actor: "MongoDB" }, "connected");
  });

  mongoose.connection.on("disconnected", () => {
    fastify.log.error({ actor: "MongoDB" }, "disconnected");
  });

  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    fastify.log.error({ actor: "MongoDB" }, error);
  }
}

export default fp(setup);
