import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import createGalleryMarkup from "./createGalleryMarkupFn";
// Add imports above this line
import { galleryItems } from "./gallery-items";
// Change code below this line

const galleryContainerEl = document.querySelector(".gallery");

galleryContainerEl.innerHTML = createGalleryMarkup(galleryItems);

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
