import createTegimg from './gallery-lib';

const gallery = document.querySelector('.gallery');

export default function render(galleryItems) {
  gallery.innerHTML = galleryItems.map(createTegimg).join('');
}
