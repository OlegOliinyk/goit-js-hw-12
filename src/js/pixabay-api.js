import axios from 'axios';

export async function fetchPhotosByQuery(userQuery, pageNumber) {
  try {
    const axiosOptions = {
      params: {
        key: '48282955-b9198e6094f2e0ac61d0770f4',
        q: userQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: pageNumber,
        per_page: 15,
      },
    };
    const response = await axios.get('https://pixabay.com/api', axiosOptions);
    if (response.data.total === 0) {
      throw new Error(
        `Sorry, there are no images matching your search query. Please try again!`
      );
    }
    return response;
  } catch (error) {
    throw error;
  }
}
