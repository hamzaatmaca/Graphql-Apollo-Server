import { ApolloServer } from "apollo-server";
import database from "./database/index.js";
import dotenv from "dotenv";
import typeDefs from "./graphql/typeDefs.js";
import resolvers from "./graphql/resolvers.js";

// DOTENV
dotenv.config();

//ENV
const { PORT } = process.env;
const { MONGO_DB } = process.env;

//DB
database(MONGO_DB);

//Apollo-Server
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen({ port: PORT }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
