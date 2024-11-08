"use client";

import { BsInstagram, BsFacebook} from 'react-icons/bs'
import { Input, Textarea } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import Link from 'next/link'

export default function App(){

    const handleFormSubmit = async (event: any) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        await fetch("/__forms.html", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData as any).toString(),
        });
      };

    return(
        <main className='min-h-screen mt-16 p-6 md:p-12 container lg:max-w-7xl mx-auto shadow-xl bg-slate-200/[0.75]'>
            <h1 className="text-2xl md:text-3xl font-medium mb-4">
                Contact Us
            </h1>
            <div className='lg:grid grid-cols-2 lg:divide-x-1 divide-slate-400 mb-12 lg:mb-16'>
                <div className='mb-8 lg:mb-0 lg:pr-8 divide-y-1 divide-slate-300 dark:divide-slate-700'>
                    <p className='mb-4'>
                        We're here to assist you with any questions, inquiries, or feedback you may have. 
                        Feel free to reach out to us through the following contact options:
                    </p>
                    <div className='py-2'>
                        <h4 className='font-medium'>Phone:</h4>
                        <p>For immediate assistance, you can give Munish a call at  
                            <Link className="font-medium text-blue-600" href="Tel: 0484 076 613"> 0484 076 613</Link>
                        </p>
                    </div>
                    <div className='py-2'>
                        <h4 className='font-medium'>Email:</h4>
                        <p>If you prefer electronic communication, drop us an email at                                 
                            <Link className="font-medium text-blue-600" href="mailto: {sales@safariseekers.com.au}"> sales@safariseekers.com.au</Link>. 
                            We typically respond within 24 hours.
                        </p>
                    </div>
                    <div className='py-2'>
                        <h4 className='font-medium'>Book a Rooftop Tent Demonstration:</h4>
                        <p>To schedule a doorstep demonstration of our rooftop tents, simply fill out our online booking form 
                        <a className="font-medium text-blue-600" href="#"> here</a>.
                            We'll bring the adventure to your doorstep!                                 
                        </p>
                    </div>
                    <div className='py-2'>
                        <h4 className='font-medium'>Follow Us:</h4>
                        <p className='mb-2'>Stay connected with us on social media for updates, tips, and inspiration for your outdoor adventures.</p> 
                        
                        <Link className="flex items-center gap-4 font-medium mb-1" href="https://www.facebook.com/profile.php?id=61551719171524&ref=xav_ig_profile_web"> 
                            <BsFacebook size={20}/> <span className=''>Safari Seekers AU</span> 
                        </Link>
                        <Link className="flex items-center gap-4 font-medium" href="https://www.instagram.com/safariseekersau/"> 
                            <BsInstagram size={20}/> <span className=''>safariseekersau </span> 
                        </Link>
                    </div>
                </div>
                <div className='lg:pl-8 text-justify'>
                    <h2 className='text-lg md:text-xl font-medium mb-4 md:hidden'>Send Us a Message</h2>
                    <div className='mb-4'>
                        If you have a specific question or request, you can use the contact form below. 
                        Please provide us with your contact details, and we'll get back to you as soon as possible.
                    </div>
                    <form className="mb-4 rounded-xl p-2 md:p-4 bg-slate-100 dark:bg-slate-800" name="Contact" onSubmit={handleFormSubmit}>
                        <input type="hidden" name="form-name" value="Contact" />
                        <div className="flex flex-wrap">
                            <div className="grid md:grid-cols-2 gap-2 w-full mb-2">
                                <Input name="Name" isRequired variant="bordered" type="text" label="Name" placeholder="Enter your name" />
                                <Input name="Phone" isRequired variant="bordered" type="number" label="Phone" placeholder="Enter your phone number" />
                            </div>
                            <div className="md:flex w-full mb-2">
                                <Input name="Email" isRequired variant="bordered" type="email" label="Email" placeholder="Enter your email" />
                            </div>
                            <div className="w-full mb-2">
                                <Textarea
                                    isRequired
                                    name="Message"
                                    variant="bordered"
                                    label="Message"
                                    placeholder="Drop us a message ;)"
                                />
                            </div>
                            <div className='w-full text-center lg:text-left'>
                                <Button type="submit" size="sm" color="success" variant="flat" className='shadow-md'>
                                    Submit
                                </Button>  
                            </div>
                        </div>
                    </form>
                    <p className=''>
                        Thank you for considering Safari Seekers for your rooftop tent needs. 
                        We look forward to helping you embark on unforgettable adventures and make a positive impact in our community.
                    </p>
                </div>
            </div>
        </main>
    )
}
