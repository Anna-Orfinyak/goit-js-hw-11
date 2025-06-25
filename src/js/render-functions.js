import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');
const loader = document.getElementById('loader');

let lightbox = new SimpleLightbox('.gallery a' , { 
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
 });

export function createGallery(images) {
  const markup = images.map(image => `
    <li class="gallery-item">
        <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" width="360"/>
        </a>
        <div class="info">
            <div class="statistic-info">  
                <p class="statistic-item-name">Likes</p>
                <p class="statistic-item-value">${image.likes}</p>
            </div>
            <div class="statistic-info">
                <p class="statistic-item-name">Views</p>
                <p class="statistic-item-value">${image.views}</p>
            </div>
            <div class="statistic-info">
                <p class="statistic-item-name">Comments</p>
                <p class="statistic-item-value">${image.comments}</p>
            </div>
            <div class="statistic-info">
                <p class="statistic-item-name">Downloads</p>
                <p class="statistic-item-value">${image.downloads}</p>
            </div>
        </div>
    </li>`).join('');

  galleryList.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryList.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}
