import { buildSchema } from "../utils/buildSchema";
import { FastifyInstance } from "fastify";
import { ApolloServer } from "@apollo/server";
import fastifyApollo, {
  fastifyApolloDrainPlugin,
} from "@as-integrations/fastify";
import fastifyPlugin from "fastify-plugin";

async function setupApollo(fastify: FastifyInstance) {
  fastify.log.info({ actor: "Apollo" }, "Building Schema");
  const schema = await buildSchema();

  const apollo = new ApolloServer({
    schema,
    plugins: [fastifyApolloDrainPlugin(fastify)],
  });

  fastify.log.info({ actor: "Apollo" }, "Starting Server");
  await apollo.start();
  fastify.log.info({ actor: "Apollo" }, "Server Started");

  fastify.register(fastifyApollo(apollo));
}

export default fastifyPlugin(setupApollo);
