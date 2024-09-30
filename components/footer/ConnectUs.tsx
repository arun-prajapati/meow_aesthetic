"use client"
import { IoCallOutline } from 'react-icons/io5'
import { TfiEmail } from 'react-icons/tfi'
import TypographyH1 from '../typography/TypographyH1'
import TypographyH4 from '../typography/TypographyH4'
import { VideoListOfHomePage } from '@/lib/hooks/HomePageApi'

const ConnectUs = () => {

    const { MobileNumber, EmailID } = VideoListOfHomePage() //api

    return (
        <div className='w-full bg-secondarylite  text-white py-10'>
            <div className='container grid lg:grid-cols-2 text-center lg:text-left gap-10 lg:gap-2'>
                <TypographyH1 className='font-semibold lg:font-medium text-4xl'>Connect With Us</TypographyH1>
                <div className="flex flex-col lg:flex-row items-center lg:justify-end gap-7">
                    <TypographyH4>
                        <a href={`tel:${MobileNumber}`} className="flex items-center gap-4 font-semibold lg:font-medium">
                            <IoCallOutline className='rounded-full bg-white text-black text-xl w-10 h-10 p-2' />
                            {MobileNumber}
                        </a>
                    </TypographyH4>
                    <TypographyH4>
                        <a href="mailto:test@gmail.com" className="flex items-center gap-4 font-semibold lg:font-medium">
                            <TfiEmail className='rounded-full bg-white text-black text-xl w-10 h-10 p-2' />
                            {EmailID}
                        </a>
                    </TypographyH4>
                </div>
            </div>
        </div>
    )
}

export default ConnectUs