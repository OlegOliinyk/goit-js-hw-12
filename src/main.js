import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchPhotosByQuery } from './js/pixabay-api';
import { createGalleryCardTemplate } from './js/render-functions';

const galleryFromPixabay = document.querySelector('.gallery-from-pixabay');
const userSearchForm = document.querySelector('.user-search');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');
let page = 1;
let userQuery = '';

const lightbox = new SimpleLightbox('.gallery-link', {
  captions: false,
  captionDelay: 250,
  widthRatio: 0.8,
  heightRatio: 0.8,
});

function smoothScroll() {
  const firstCard = galleryFromPixabay.firstElementChild;
  if (!firstCard) return;
  const cardHeight = firstCard.getBoundingClientRect().height;
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}

const showError = error => {
  iziToast.error({
    title: '❌',
    message: error,
    position: 'topRight',
    progressBar: true,
    close: false,
    icon: false,
    timeout: 3000,
  });
};

const loadMoreBtnHandler = async event => {
  try {
    page++;
    loadMoreBtn.classList.add('hidden');
    loader.classList.remove('hidden');

    const { data } = await fetchPhotosByQuery(userQuery, page);

    loader.classList.add('hidden');
    const galleryTemplate = createGalleryCardTemplate(data.hits);
    galleryFromPixabay.insertAdjacentHTML('beforeend', galleryTemplate);
    lightbox.refresh();
    smoothScroll();
    if (lightbox.elements.length < data.totalHits) {
      loadMoreBtn.classList.remove('hidden');
    } else {
      loadMoreBtn.removeEventListener('click', loadMoreBtnHandler);
      showError(`We're sorry, but you've reached the end of search results.`);
    }
  } catch (error) {
    showError(error.message);
  }
};

const inputSubmitHandler = async event => {
  try {
    event.preventDefault();

    page = 1;
    loadMoreBtn.classList.add('hidden');
    userQuery = document.querySelector('.input-user-search').value.trim();
    if (!userQuery) {
      throw new Error('The field must be filled!');
    }
    galleryFromPixabay.innerHTML = '';
    loader.classList.remove('hidden');

    const { data } = await fetchPhotosByQuery(userQuery, page);

    const galleryTemplate = createGalleryCardTemplate(data.hits);
    galleryFromPixabay.innerHTML = galleryTemplate;
    lightbox.refresh();
    loader.classList.add('hidden');
    userSearchForm.reset();
    if (data.totalHits > 15) {
      loadMoreBtn.classList.remove('hidden');
      loadMoreBtn.addEventListener('click', loadMoreBtnHandler);
    }
  } catch (error) {
    loader.classList.add('hidden');
    userSearchForm.reset();
    showError(error.message);
  }
};

const inputUserQuery = document.querySelector('.user-search');
inputUserQuery.addEventListener('submit', inputSubmitHandler);
