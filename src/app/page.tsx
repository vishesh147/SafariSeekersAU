"use client";

import Image from 'next/image'
import FeatureCard from './_components/featureCard';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { BsTelephoneFill } from 'react-icons/bs';


export default function App() {
  return (
    <main>
        <Image fill style={{objectFit:"cover"}} src='/images/banner.jpg' alt='Banner Image'/>
        <div className='h-screen flex backdrop-blur-sm lg:backdrop-blur-none md:items-center'>
          <div className='text-center md:text-start w-full md:w-1/2 lg:w-1/3 pt-44 md:p-0'>
            <h1 className='z-10 px-4 md:pl-16 lg:pl-28 text-slate-100 font-semibold text-4xl sm:text-5xl md:text-6xl'>
              Safari Seekers <br/> Your Gateway to Adventure
            </h1>
          </div>
        </div>

      <div className='container lg:max-w-7xl mx-auto shadow-xl p-6 md:p-12 bg-slate-200/[0.75] dark:bg-gray-900'>
        <div className='mb-12 md:mb-16'>
          <h1 className="text-2xl md:text-3xl font-medium mb-4">
            Welcome To Safari Seekers
          </h1>
          <div>Are you ready to embark on unforgettable adventures and elevate your outdoor experiences? Safari Seekers is here to make it happen! We're an Australian company with an African soul, 
            passionate about providing you with premium rooftop tents and a taste of adventure like no other.</div>
        </div>

        <div className='mb-12 md:mb-16'>
          <div className='grid md:grid-cols-3 gap-4 md:gap-8'>
            <div className='col-span-2 md:col-span-1 md:hidden font-semibold text-2xl md:text-4xl text-start mb-4'>
              <h1 className='md:mb-4'>
                Elevate Your <span className='text-green-600'> Adventure. </span>
              </h1>
              <h1>                
                Explore with <span className='text-blue-600'> Safari Seekers. </span>
              </h1>
              </div>
            <div className='col-span-2'>
              <Carousel autoPlay interval={3000} infiniteLoop centerMode centerSlidePercentage={60}
                showIndicators={false} showThumbs={false} showStatus={false} className="hidden lg:block">
                <div className='h-60 lg:h-80 mx-2'>
                    <img className='h-full rounded-xl object-cover' src="/images/explorer.png" />
                </div>
                <div className='h-60 lg:h-80 mx-2'>
                    <img className='h-full rounded-xl object-cover' src="/images/australia.jpg" />
                </div>             
                <div className='h-60 lg:h-80 mx-2'>
                    <img className='h-full rounded-xl object-cover' src="/images/kenya.jpg" />
                </div>
              </Carousel>
              <Carousel autoPlay interval={3000} infiniteLoop centerMode centerSlidePercentage={80}
                showIndicators={false} showThumbs={false} showStatus={false} className="lg:hidden">
                <div className='h-60 lg:h-80 mx-2'>
                    <img className='h-full rounded-xl object-cover' src="/images/explorer.png" />
                </div>
                <div className='h-60 lg:h-80 mx-2'>
                    <img className='h-full rounded-xl object-cover' src="/images/australia.jpg" />
                </div>             
                <div className='h-60 lg:h-80 mx-2'>
                    <img className='h-full rounded-xl object-cover' src="/images/kenya.jpg" />
                </div>
              </Carousel>
            </div>
            <div className='hidden md:block'>
              <div className='font-semibold text-2xl md:text-4xl text-start mb-4'>
                  <p className='md:mb-4'>
                    Elevate Your <span className='text-green-600'> Adventure. </span>
                  </p>
                  <p>                
                  Explore with <span className='text-blue-600'> Safari Seekers. </span>
                  </p>
              </div>
            </div>
          </div>
        </div>

        
        <div className='mb-12 md:mb-16'>
          <h1 className="text-2xl md:text-3xl font-medium mb-6">
            Why Choose Us?
          </h1>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center'>
            <FeatureCard 
              className=""
              imgSrc="images/explorer.png"
              title="Premium Rooftop Tents"
              content="Our rooftop tents are built for durability, comfort, and style. 
                Experience the convenience of easy setup and the comfort of a home away from home."
            />
            <FeatureCard 
              className=""
              imgSrc="images/kenyasq.png"
              title="African Inspiration"
              content="Infused with the warmth of African hospitality, 
                we bring a unique touch to your outdoor adventures."
            />
            <FeatureCard 
              className=""
              imgSrc="images/community.png"
              title="Community Commitment"
              content="We're not just about adventure; we're about giving back. 
                A percentage of our profits goes to those in need through our partnership with The Big 4x4 WA."
            />
            <FeatureCard 
              className=""
              imgSrc="images/service.avif"
              title="Personalized Service"
              content="We come to you for demonstrations, ensuring you get the perfect rooftop tent for your needs."
            />
          </div>
        </div>

        <div className='mb-12 md:mb-16'>
          <div className='grid md:grid-cols-2 gap-4 md:gap-8'>
            <div className=''>
              <h1 className="text-2xl md:text-3xl font-medium mb-4">
                  Get Started Today
              </h1>
              <p className='mb-4 text-justify'>
                Ready to elevate your adventure? 
                Whether you're a seasoned explorer or a first-time camper, 
                Safari Seekers has the perfect rooftop tent for you. 
                Book a doorstep demonstration, follow us on social media for inspiration, or reach out for expert advice. 
                We're here to make your outdoor dreams come true.
              </p>
              {/* <h3 className='hidden md:block font-medium text-lg text-start mb-4'>
                Elevate Your <span className='text-green-600'>Adventure</span>. 
                <br/> Explore with <span className='text-blue-600'>Safari Seekers</span>.
              </h3> */}
              <div className='flex justify-center md:block'>
                <Button as={Link} size="sm" href="/contact" variant="flat" color="warning">
                  <BsTelephoneFill /> Contact Us 
                </Button>
              </div>
            </div>
            <div className='relative rounded-xl w-full min-h-[200px] sm:min-h-[300px]'>
              <Image className='rounded-xl' src="/images/explorer.png" alt="Get Started Image" 
                fill style={{objectFit:'cover'}}/>
            </div>
            {/* <h3 className='md:hidden mt-6 font-medium text-center text-lg'>Elevate Your <span className='text-green-600'>Adventure</span>. 
                <br/> Explore with <span className='text-blue-600'>Safari Seekers</span>.
            </h3> */}
          </div>
        </div>
      </div>
    </main>
  )
}
