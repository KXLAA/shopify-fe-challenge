import { RESTDataSource } from 'apollo-datasource-rest';

class SpacePhotosAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `https://api.nasa.gov/planetary/`;
  }

  async getSpacePhotosForHome(limit = 30) {
    const data = await this.get(`apod?api_key=${process.env.API_KEY}`, {
      // Query parameters
      count: limit,
    });
    return data;
  }
}

export default SpacePhotosAPI;
