// Add imports above this line
import { galleryItems } from "./gallery-items";
// console.log(galleryItems);

import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";

const gallery = document.querySelector(".gallery");

function createList(array) {
  return array.reduce(
    (acc, item) =>
      acc +
      `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`,
    ""
  );
}

const result = createList(galleryItems);
gallery.insertAdjacentHTML("beforeend", result);
gallery.addEventListener("click", handlerClick);
function handlerClick(event) {
  event.preventDefault();

  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "bottom",
    spinner: true,
    overlay: true,
  });
}
