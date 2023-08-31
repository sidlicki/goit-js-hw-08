import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line

// Change code below this line
const list = document.querySelector('.gallery');
const items = galleryItems.map(createLi).join('');
list.insertAdjacentHTML('beforeend', items);

function createLi({ preview, original, description }) {
  const item = `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`;
  return item;
}
//
const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(galleryItems);
