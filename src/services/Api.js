import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchNewPhoto = async (searchingQuery, page = 1) => {
  const PER_PAGE = 12;
  const response = await axios.get(
    `?key=24522625-682bca817ecb73336eef5fcc0&q=${searchingQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${PER_PAGE}`
  );
  const data = response.data;
  if (data.hits.length > 0) {
    return {
      hits: data.hits,
      isTheNextPage: page < Math.ceil(data.totalHits / PER_PAGE),
    };
  }
  return Promise.reject(
    new Error(`There is not found any images of ${searchingQuery}.`)
  );
};

export default fetchNewPhoto;
