import { Resolvers } from './types/types';

const resolvers: Resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate the homepage grid of our web client
    spacePhotosForHome: async (_, __, { dataSources }) => {
      return dataSources.spacePhotosAPI.getSpacePhotosForHome();
    },
  },
};

export default resolvers;
