"use client";

import Image from "next/image";
import {BsInstagram, BsTelephone, BsEnvelopeAt} from "react-icons/bs"

export default function Footer() {  
    return (
        <footer className="p-4 text-white bg-gray-900 dark:bg-gray-950 ">
            <div className="grid grid-cols-1 md:grid-cols-3 items-stretch justify-center px-4">
                <div className="p-4">
                    <h3 className="text-center md:text-left text-xl font-semibold mb-2">Who are we ?</h3>
                    <p className="text-justify">
                        Welcome to Safari Seekers, where the spirit of Australia meets the heart of Africa! Founded by a passionate 4WD enthusiast with Kenyan roots, our mission is to provide adventurers across Australia with premium rooftop tents while also serving our community.
                    </p>
                </div>
                <div className="flex justify-center p-8">
                    <Image style={{objectFit:"contain"}} width="300" height="300" src="/images/logos/full.png"  alt="SAFARI SEEKERS LOGO" />
                </div>
                <div className="py-4">
                    <h3 className="text-xl font-semibold mb-2">Reach Us</h3>
                    <div className="md:grid grid-rows-3 gap-y-2">
                        <div className="flex items-center mb-2 md:mb-0">
                            <div className="mr-3 w-[24px]">
                                <BsTelephone className="text-lg" />
                            </div>
                            0484 076 613
                        </div>
                        <div className="flex items-center mb-2 md:mb-0">
                            <div className="mr-3 w-[24px]">
                                <BsEnvelopeAt className="text-lg" />
                            </div>
                            sales@safariseekers.com.au
                        </div>
                        {/* <div className="flex items-center mb-2 md:mb-0">
                            <div className="mr-3 w-[24px]">
                                <BsFillGeoFill className="text-lg" />
                            </div>
                            Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678
                        </div> */}
                        <div className="flex items-center mb-2 md:mb-0">
                            <div className="mr-3 w-[24px]">
                                <BsInstagram className="text-lg" />
                            </div>
                            safariseekersau
                        </div>
                    </div>
                </div>
            </div>
            <hr className="mx-auto border-gray-700" />
            <div className="mt-4 block text-sm text-gray-400 text-center text-gray-400">  
                © Safari Seekers 2023
            </div>
        </footer>
    )
}