export function createGalleryCardTemplate(data) {
  return data
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
    <li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img
        width = "360px"
        // height = "240px"
          class="gallery-image"
          src="${webformatURL}"
          alt="${tags}"
        />
      </a>
      <div class="details">
        <div><p class="details-icon">❤️</p><p>${likes}</p></div>
        <div><p class="details-icon">👁️</p><p>${views}</p></div>
        <div><p class="details-icon">💬</p><p>${comments}</p></div>
        <div><p class="details-icon">⬇️</p><p>${downloads}</p></div>
      </div>
    </li>
  `;
      }
    )
    .join('');
}
