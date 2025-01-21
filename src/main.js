import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchPhotosByQuery } from './js/pixabay-api';
import { createGalleryCardTemplate } from './js/render-functions';

let userQuery = '';
const apiKey = '48282955-b9198e6094f2e0ac61d0770f4';

const galleryFromPixabay = document.querySelector('.gallery-from-pixabay');

const inputSubmitHandler = event => {
  event.preventDefault();
  userQuery = document.querySelector('.input-user-search');
  if (!userQuery.value.trim()) {
    iziToast.error({
      title: '❌',
      message: `The field must be filled!`,
      position: 'topRight',
      progressBar: true,
      close: false,
      icon: false,
      timeout: 3000,
    });
    return;
  }

  const url = `https://pixabay.com/api/?key=${apiKey}&q=${userQuery.value}&image_type=photo&orientation=horizontal&safesearch=true`;

  let loader = document.querySelector('.loader');

  galleryFromPixabay.innerHTML = '';

  loader.style.display = 'block';

  fetchPhotosByQuery(url)
    .then(data => {
      loader.style.display = 'none';
      if (data.total === 0) {
        iziToast.error({
          title: '❌',
          message: `Sorry, there are no images matching your search query. Please try again!`,
          position: 'topRight',
          progressBar: true,
          close: false,
          icon: false,
          timeout: 3000,
        });
      }

      const galleryTemplate = createGalleryCardTemplate(data.hits);
      galleryFromPixabay.innerHTML = galleryTemplate;

      new SimpleLightbox('.gallery-link', {
        captions: false,
        captionDelay: 250,
        widthRatio: 0.8,
        heightRatio: 0.8,
      });
    })
    .catch(error => console.log(error));

  userQuery.value = '';
};

const inputUserQuery = document.querySelector('.button-user-search');
inputUserQuery.addEventListener('click', inputSubmitHandler);
