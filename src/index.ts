import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./schema";


const bootstrap = async () => {
  const schema = await buildSchema({
    resolvers: [HelloResolver]
  });

  const server = new ApolloServer({ schema });

  const app = express();

  server.applyMiddleware({ app });

  app.use((_, res) => {
    res.status(200);
    res.send("Hello!");
    res.end();
  });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

bootstrap();
