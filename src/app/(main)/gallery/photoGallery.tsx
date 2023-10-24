"use client";

import PhotoAlbum, { Photo } from "react-photo-album";
import ImageRenderer from "./imageRenderer";

export default function PhotoGallery(props: { photos: Photo[]; }) {
  return (
    <PhotoAlbum
      photos={props.photos}
      layout="rows"
      renderPhoto={ImageRenderer}
      targetRowHeight={250}
    />
  );
}
