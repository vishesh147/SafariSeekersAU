import ProductCard from "./productCard"

export default function App() {
  return (
    <main className='min-h-screen mt-16 p-6 md:p-12 container lg:max-w-7xl mx-auto shadow-xl bg-slate-200/[0.75]'>        
      <div className='mb-12 md:mb-16'>
        <h1 className="text-2xl md:text-3xl font-medium mb-6">
          Our Roof Top Tents
        </h1>
        <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8'>
          <ProductCard 
            href='products/nomad-series'
            productName="Nomad Series"
            imgSrc="\images\products\nomad.png"
            description="Discover the Ultimate Off-Road Oasis: The Nomad Roof Top Tent in Grey!"  
          />
          <ProductCard 
            href='products/expedition-series'
            productName="Expedition Series"
            imgSrc="\images\products\expedition.png"
            description="Discover the Ultimate Off-Road Oasis: The Expedition Roof Top Tent in Gray!"  
          />
          <ProductCard 
            href='products/trekker-series'
            productName="Trekker Series"
            imgSrc="\images\products\trekker.png"
            description="Introducing the Trekker Roof Top Tent - Your Ultimate Adventure Companion!"  
          />
          <ProductCard 
            href='products/explorer-series'
            productName="Explorer Series"
            imgSrc="\images\products\explorer.png"
            description="Introducing the Explorer Roof Top Tent - Elevate Your Adventure!"  
          />
        </div>
      </div>

      <div className='mb-12 md:mb-16'>
        <h1 className="text-2xl md:text-3xl font-medium mb-6">
          Accessories
        </h1>
        <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8'>
          <ProductCard 
            href='products/200w-solar-panel'
            productName="200W Solar Panel"
            imgSrc="\images\products\panel.png"
            description="Enhance your rooftop tent setup with the Safari Seekers 200W Solar Panel, 
              designed to provide you with a reliable and sustainable power source."  
          />
          <ProductCard 
            href='products/270-awning'
            productName="270 Degree Awning"
            imgSrc="\images\products\awning.png"
            description="Introducing the Safari Seekers 270 Degree Awning - The Ultimate Adventure Companion!"  
          />
        </div>
      </div>
    </main>
  )
}
