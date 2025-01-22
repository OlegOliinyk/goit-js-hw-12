export function fetchPhotosByQuery(userQuery) {
  const searchParams = new URLSearchParams({
    key: '48282955-b9198e6094f2e0ac61d0770f4',
    q: userQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  // const url = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(`https://pixabay.com/api/?${searchParams.toString()}`).then(
    response => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    }
  );
}
