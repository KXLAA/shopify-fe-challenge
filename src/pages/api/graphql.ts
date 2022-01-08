import { ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors';
import typeDefs from '../../../graphql/schema';
import resolvers from '../../../graphql/resolvers';
import SpacePhotosAPI from '../../../graphql/datasources/spacePhotosApi';

const cors = Cors();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      spacePhotosAPI: new SpacePhotosAPI(),
    };
  },
});

const startServer = apolloServer.start();

export default cors(async (req, res) => {
  if (req.method === `OPTIONS`) {
    res.end();
    return false;
  }

  await startServer;
  console.log(`
    🚀  Server is running!
    📭  Query at https://studio.apollographql.com/dev
    `);
  await apolloServer.createHandler({
    path: `/api/graphql`,
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
