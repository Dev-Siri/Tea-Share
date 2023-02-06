import type { FastifyReply, FastifyRequest } from "fastify";

export type RequestHandler<T, B = string | {}> = (
  req: FastifyRequest<{
    Body: B;
    Params: {
      [key: string]: string;
    };
    Querystring: {
      [key: string]: string;
    };
  }>,
  res: FastifyReply
) => Promise<T | string>;
