import Image from 'next/image'
import PromiseCard from './promiseCard'
import { FcInspection, FcLandscape, FcSupport, FcReading} from "react-icons/fc";

export default function App() {
  return (
    <main className='min-h-screen mt-16 p-6 md:p-12 container lg:max-w-7xl mx-auto shadow-xl bg-slate-200/[0.75]'>
      <div className='mb-12 md:mb-16'>
        <div className='mb-4'>
          <h1 className="text-2xl md:text-3xl font-medium mb-4">
            About Us - Safari Seekers
          </h1>
          <p>
            Welcome to Safari Seekers, where the spirit of Australia meets the heart of Africa! Founded by a passionate 4WD enthusiast with Kenyan roots, our mission is to provide adventurers across Australia with premium rooftop tents while also serving our community.
          </p>
        </div>

        <div className='mb-4'>
          <h2 className="text-lg md:text-xl font-medium mb-2">
            Our Roots and Community Commitment
          </h2>
          <p>
          Our African background has shown us the importance of community support. At Safari Seekers, we believe in giving back. That's why we promise to donate a portion of the profit from each tent sale to those in need. We partner with our local 4WD club, The Big 4x4 WA, to ensure that these contributions go to the right places.
          </p>
        </div>

        <div className='mb-0'>
          <h2 className="text-lg md:text-xl font-medium mb-2">
            Transparency and Accountability
          </h2>
          <p>
          We value your trust and want you to know that your support goes towards making a difference. We keep our customers updated on every donation we make, providing transparency and accountability in our community-driven efforts.
          </p>
        </div>
      </div>

      <div className='mb-12 md:mb-16'>
        <h1 className="text-2xl md:text-3xl font-medium mb-6">
          What Makes Us Unique ?
        </h1>
        <div className='grid lg:grid-cols-2 mb-8 gap-4 lg:gap-8'>
          <div className='relative min-h-[300px] '>
            <Image className="rounded-xl" src="/images/full.jpg" fill style={{objectFit: 'cover'}} alt="Product" />
          </div>
          <div className='flex flex-col text-justify divide-y-1 divide-slate-300 dark:divide-slate-700'>
            <p className='pb-3'> 
              <span className='font-medium'>African-Themed Excellence: </span>
              Our Kenyan heritage adds an African flair to our brand. 
              We infuse the warmth of African hospitality into everything we do, making your outdoor adventures unforgettable.
            </p>
            <p className='py-3'> 
              <span className='font-medium'>Premium Rooftop Tents: </span>
              We offer a curated selection of premium rooftop tents designed for durability, comfort, and style, 
              elevating your outdoor experience.
            </p>
            <p className='py-3'> 
              <span className='font-medium'>Doorstep Demos:  </span>
              We bring the adventure to you, setting up and demonstrating our rooftop tents
              right at your location for your convenience.
            </p>
            <p className='py-3'> 
              <span className='font-medium'>Australian Wilderness: </span>
              While our roots are in Africa, we appreciate the stunning landscapes of Australia and 
              provide rooftop tents to explore this continent's beauty.
            </p>
            <p className='py-3'> 
              <span className='font-medium'>African-Themed Excellence: </span>
              Our Kenyan heritage adds an African flair to our brand. 
              We infuse the warmth of African hospitality into everything we do, making your outdoor adventures unforgettable.
            </p>       
          </div>
        </div>
        <div className='grid md:grid-cols-2 gap-4 md:gap-8'>
          <div className=''>
            <h1 className="text-lg md:text-xl font-medium mb-2">
              Our Founder's Personal Touch
            </h1>
            <p className='text-justify'>
            Owning a 4WD myself, I've always yearned for more exploration. This personal passion for off-road adventures drives Safari Seekers, and I'm committed to offering the tools and expertise for your unforgettable journeys.
            </p>
          </div>
          <div className='relative rounded-xl w-full min-h-[250px]'>
            <Image className='rounded-xl' fill style={{objectFit: 'cover'}} src="/images/service.jpeg" alt="Founder"/>
          </div>
        </div>
      </div>


      <div className='mb-12 md:mb-16'>
        <div className='md:flex justify-center'>
          <div className='md:w-1/3 text-justify pb-4 md:pr-10'>
            <h1 className="text-2xl md:text-3xl font-medium mb-4">
                Our Promise
            </h1>
            <p className='mb-4'>When you choose Safari Seekers, you're investing in premium quality while making a positive impact on the community.</p>
            <p className='mb-0 md:mb-4'>Join us on a journey that blends the warmth of African hospitality with the rugged beauty of the Australian wilderness. Explore your world with Safari Seekers and elevate your outdoor adventures while making a meaningful difference in our community.</p>
            <h3 className='hidden md:block font-medium text-lg text-start'>Elevate Your <span className='text-green-600'>Adventure</span>. 
              <br/> Explore with <span className='text-blue-600'>Safari Seekers</span>.
            </h3>
          </div>
          <div className='md:w-2/3 grid md:grid-cols-2 gap-4 md:gap-6 my-4 md:my-0'>
            <PromiseCard 
              icon={<FcInspection />}
              title="Quality and Durability"
              content="Our rooftop tents are built to withstand the harshest Australian conditions, 
                      ensuring they stand the test of time. During this time, we also provide a 12 month warranty 
                      for all our customers."
            />
            <PromiseCard 
              icon={<FcReading />}
              title="Convenience and Comfort"
              content="Experience the convenience of easy setup and the comfort of a home away from home with our premium tents."
            />
            <PromiseCard 
              icon={<FcSupport />}
              title="Personalised Service"
              content="We value your time and preferences, which is why we bring our rooftop tents directly to you, 
                      offering personalized demonstrations and assistance."
            />
            <PromiseCard 
              icon={<FcLandscape />}
              title="Adventure Ready"
              content="With Safari Seekers, you're always adventure-ready, whether you're embarking on a weekend 
                      getaway or a cross-country expedition."
            />
          </div>
          <h3 className='md:hidden mt-6 font-medium text-center text-lg'>
            Elevate Your <span className='text-green-600'>Adventure</span>. 
            <br/> Explore with <span className='text-blue-600'>Safari Seekers</span>.
          </h3>
        </div>
      </div>
    </main>
  )
}
