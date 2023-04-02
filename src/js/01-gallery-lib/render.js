import cretTegimg from './gallery-lib';

const gallery = document.querySelector('.gallery');

export default function render(galleryItems) {
  gallery.innerHTML = galleryItems.map(cretTegimg).join('');
}
