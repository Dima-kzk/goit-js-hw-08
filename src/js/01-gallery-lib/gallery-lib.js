export default function createTegimg({ preview, description, original }) {
  return `
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    `;
}
