import Image from "next/image";
import type { RenderPhotoProps } from "react-photo-album";

export default function ImageRenderer({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  return (
    <div style={{ ...wrapperStyle, position: "relative" }}>
      <Image
        fill
        src={photo}
        placeholder={"blur"}
        {...{ alt, title, sizes, className, onClick }}
        style={{borderRadius: '8px'}}
      />
    </div>
  );
}
