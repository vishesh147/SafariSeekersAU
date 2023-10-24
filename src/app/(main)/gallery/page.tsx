import { client } from "@/sanity/lib/client";
import imageUrlBuilder from '@sanity/image-url'
import PhotoGallery from "./photoGallery";

export default async function Home() {    
    const builder = imageUrlBuilder(client)
  
    const galleryPhotos = await client.fetch(`*[_type == "galleryImage"]`);
    
    const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];
    const photos = galleryPhotos.map((photo: any) => {
        const url = builder.image(photo.image).width(1080).url()
        const origDim = url.split('-')[1].split('.')[0].split('x')
        const photoWidth = parseInt(origDim[0])
        const photoHeight = parseInt(origDim[1])
        return {
            src: url,
            width: photoWidth,
            height: photoHeight,
            srcSet: breakpoints.map((breakpoint) => {
              const height = Math.round((photoHeight / photoWidth) * breakpoint);
              return {
                src: builder.image(photo.image).width(breakpoint).url(),
                width: breakpoint,
                height,
              };
            }),
        }
    });

    return (
        <main className='min-h-screen mt-16 p-4 container lg:max-w-7xl mx-auto shadow-xl bg-slate-200/[0.75]'>
            <PhotoGallery photos={photos}/>
        </main>
    )
}
