import Image from 'next/image'

export default function App() {
  return (
    <main className='min-h-screen mt-16 p-6 md:p-12 container lg:max-w-7xl mx-auto shadow-xl bg-slate-200/[0.75]'>       
      <div className='mb-6 md:mb-8'>
        <h1 className="text-2xl md:text-3xl font-medium mb-4">
          Roof Top Tent & Awning Maintenance Guide
        </h1>
        <p className='text-justify mb-2'>
        At Safari Seekers, we recognize that your outdoor escapades demand gear that's not just dependable but also straightforward to maintain. 
        Here's your comprehensive guide to preserving the condition of your Roof Top Tent and Awning:
        </p>
        <h2 className="text-base md:text-lg font-medium mb-2">
          Simplicity in Setup, Simplicity in Care
        </h2>
        <p className='text-justify'>
          Our rooftop tents and awnings are crafted for ease, both in installation and upkeep. 
          Follow the below steps to keep your equipment in prime condition.
        </p>
      </div>

      <div className='mb-6 md:mb-12'>
        <h1 className="text-lg md:text-xl font-medium mb-6">
          Cleaning Your Safari Seekers Roof Top Tent
        </h1>
        <div className='grid lg:grid-cols-2 mb-8 gap-4 lg:gap-8'>
          <div className='relative min-h-[300px] '>
            <Image className="rounded-xl" src="/images/tent.jpg" fill style={{objectFit: 'cover'}} alt="Product" />
          </div>
          <ol className='flex flex-col gap-y-2 text-justify list-decimal list-inside font-medium'>
            <li> 
              Expand It Fully: <span className='font-normal'>
              Our Kenyan heritage adds an African flair to our brand. 
              We infuse the warmth of African hospitality into everything we do, making your outdoor adventures unforgettable.
              </span>
            </li>
            <li> 
              Gentle Cleaning: <span className='font-normal'>
              Use a mild detergent mixed with warm water and a soft to medium brush for necessary fabric cleaning.
              </span>
            </li>
            <li> 
              Thorough Rinsing: <span className='font-normal'>
              Rinse the fabric with warm or cool water, ensuring all detergent residues are removed before drying.
              </span>
            </li>
            <li> 
              Sunlit Drying: <span className='font-normal'>
              Allow your tent to dry under the sun with all windows open. 
              Complete drying is vital before storage to prevent mildew and mould growth, particularly if you camped in damp conditions.
              </span>
            </li>
            <li> 
              Zipper Maintenance: <span className='font-normal'>
              Keep zippers in peak condition by using a small brush to clear dirt and applying silicone spray for lubrication.
              </span>
            </li>
            <li> 
              Preventing Rust: <span className='font-normal'>
              Employ products like *WD40 Lanolin* to spray on gas struts, latches, etc., to ward off rust.
              </span>
            </li>
          </ol>
        </div>
      </div>

      <div className='mb-6 md:mb-12'>
        <h1 className="text-lg md:text-xl font-medium mb-4">
          Addressing Mould and Mildew
        </h1>
        <div className='grid lg:grid-cols-2 mb-8 gap-4 lg:gap-8'>
          <div>
            <p className='text-justify mb-4'> 
              Moisture trapped within the canvas can lead to mould and mildew. Employ the following steps for effective removal:
            </p>
            <ol className='flex flex-col gap-y-2 text-justify list-decimal list-inside font-medium mb-4'>
              <li> 
                Brush Away Debris: <span className='font-normal'>
                Open the tent and brush the affected area vigorously with a stiff-bristled brush to eliminate loose dirt.
                </span>
              </li>
              <li> 
                Gentle Cleansing: <span className='font-normal'>
                Use a non-abrasive sponge, warm water, and mild detergent to delicately clean the canvas with a sponge and bristled brush.
                </span>
              </li>
              <li> 
                Natural Solution: <span className='font-normal'>
                Rinse the tent with a solution consisting of 1 cup lemon juice, 1 cup sea salt, and 2 litres of hot water.
                </span>
              </li>
              <li> 
                Sun's Beneficial Rays: <span className='font-normal'>
                Once detergent residues are gone, let the tent air dry in the sun for several hours to thwart future mould formation. 
                </span>
              </li>
            </ol>
            <p className='text-justify mb-4 italic'>
              <span className='font-medium'>IMPORTANT NOTE: </span> 
              Ensure the tent is entirely dry before storing!
            </p>
          </div>
          <div className='relative min-h-[300px] '>
            <Image className="rounded-xl" src="/images/service.jpeg" fill style={{objectFit: 'cover'}} alt="Product" />
          </div>
        </div>
      </div>

      <div className='mb-6 md:mb-8'>
        <div className='grid md:grid-cols-3 gap-4 md:gap-8 lg:gap-12'>
          <div className=''>
            <h1 className="text-base md:text-lg font-medium mb-2">
              Canvas Seasoning
            </h1>
            <p className='text-justify mb-2'>
              After initial setup, spray the tent with water and allow it to dry fully. 
              This process, known as "seasoning," causes the canvas to swell slightly, closing needle holes from stitching. 
              The most effective way is to expose the tent to its first substantial rain. 
              This process is a one-time requirement but can be repeated as desired.
            </p>
          </div>
          <div>
            <h2 className="text-base md:text-lg font-medium mb-2">
              Zipper Care
            </h2>
            <p className='text-justify'>
              Zippers withstand elements like sand, mud, rain, and dust. To extend their lifespan, apply lubrication. 
              Use a silicone spray on both open and closed zippers. 
              This will enhance their functionality and significantly prolong their service life. 
              If mud and dirt are ingrained in the zipper, cleanse it with a damp cloth before re-lubricating.
            </p>
          </div>
          <div>
            <h2 className="text-base md:text-lg font-medium mb-2">
              Waterproofing
            </h2>
            <p className='text-justify'>
              Over time, routine cleaning can diminish the material's waterproofing properties. 
              Following cleaning, reapply waterproofing agents. Some solutions offer UV protection as well. 
              Consider a water repellent like Burke & Wills Canvas Reproofer (From Anaconda).
            </p>
          </div>
        </div>


      </div>

      <div className='mb-12 md:mb-16'>
        <p className='text-justify'>
        That's it! After cleaning and maintaining your tent, you're ready for your next thrilling Safari Seekers adventure. 
        These principles also apply to the awnings.
        </p>
      </div>
    </main>
  )
}
