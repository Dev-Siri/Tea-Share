import type { FastifyInstance } from "fastify";

export type Router = (fastify: FastifyInstance) => void;
