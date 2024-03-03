import 'reflect-metadata';
import 'dotenv/config';
import fastify from 'fastify';
import mongoose from './services/mongoose';
import apollo from './services/apollo';

const port = process.env.PORT;

// Activate plugins below:
const app = fastify({ logger: true });
app.register(mongoose);
app.register(apollo);

// Create Server
const start = async () => {
  try {
    app.listen({ port });
    app.log.info(`Started Server 🚀 🚀 🚀 🚀 🚀  at http://localhost:${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
