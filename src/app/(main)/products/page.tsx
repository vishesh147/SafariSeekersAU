import ProductCard from "./productCard"
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from '@sanity/image-url'

export default async function App() {
  const builder = imageUrlBuilder(client)

  const products = await client.fetch(`*[_type == "product"] | order(_createdAt asc)`);

  return (
    <main className='min-h-screen mt-16 p-6 md:p-12 container lg:max-w-7xl mx-auto shadow-xl bg-slate-200/[0.75]'>        
      <div className='mb-12 md:mb-16'>
        <h1 className="text-2xl md:text-3xl font-medium mb-6">
          Our Roof Top Tents
        </h1>

        <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8'>
          {products.map((product:any, index:number) => {
            return (
              !product.isAccessory &&
              <ProductCard 
                key={index}
                href={`products/${ product.slug.current }`}
                productName={product.title}
                imgSrc={builder.image(product.image).url()}
                description={`${ product.tagline } ${ product.subTagline }`}   
              />
            )
          })}
        </div>
      </div>

      <div className='mb-12 md:mb-16'>
        <h1 className="text-2xl md:text-3xl font-medium mb-6">
          Accessories
        </h1>
        <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8'>
          {products.map((product:any, index:number) => {
            return (
              product.isAccessory &&
              <ProductCard 
                key={index}
                href={`products/${ product.slug.current }`}
                productName={product.title}
                imgSrc={builder.image(product.image).url()}
                description={`${ product.tagline } ${ product.subTagline }`}   
              />
            )
          })}
        </div>
      </div>
    </main>
  )
}
