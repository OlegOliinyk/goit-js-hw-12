import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchPhotosByQuery } from './js/pixabay-api';
import { createGalleryCardTemplate } from './js/render-functions';

const galleryFromPixabay = document.querySelector('.gallery-from-pixabay');
const userSearchForm = document.querySelector('.user-search');
let loader = document.querySelector('.loader');

const inputSubmitHandler = event => {
  event.preventDefault();

  const userQuery = document.querySelector('.input-user-search').value.trim();
  if (!userQuery) {
    iziToast.error({
      title: '❌',
      message: `The field must be filled!`,
      position: 'topRight',
      progressBar: true,
      close: false,
      icon: false,
      timeout: 3000,
    });
    userSearchForm.reset();
    return;
  }

  galleryFromPixabay.innerHTML = '';

  loader.style.display = 'block';

  fetchPhotosByQuery(userQuery)
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
    .catch(error => {
      loader.style.display = 'none';
      iziToast.error({
        title: '❌',
        message: error.toString(),
        position: 'topRight',
        progressBar: true,
        close: false,
        icon: false,
        timeout: 3000,
      });
    });

  userSearchForm.reset();
};

const inputUserQuery = document.querySelector('.user-search');
inputUserQuery.addEventListener('submit', inputSubmitHandler);
