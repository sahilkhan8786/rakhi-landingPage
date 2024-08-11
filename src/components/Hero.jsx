import React from 'react'
import heroImage from '@/assets/hero-img.png'
import d_1 from '@/assets/decoration-1.png'
import Image from 'next/image'
import image1 from '@/assets/1.png'
import image2 from '@/assets/2.png'
import gift from '@/assets/gift.png'
import Button from './Button'
export default function Hero() {
    return (
        <div className=' bg-white/25 p-4 backdrop:blur-lg rounded-xl relative h-[700px] lg:h-[600px] mt-6 sm:mt-10   md:overflow-hidden overflow-y-scroll  overflow-x-hidden'>
            <h1 className='text-3xl uppercase font-semibold text-center  items-center w-full my-4 text-pink-700 cursor-pointer  sm:text-7xl sm:mt-8 flex flex-col'>
                <span>
                    Happy
                </span>
                <span>
                    RakshBandhan
                </span>
            </h1>
            <div className='flex gap-3 w-full flex-col'>

                <Image src={heroImage} alt='hero-image' width={500} className='absolute -bottom-24 z-10' />
                <Image src={d_1} alt='hero-image' width={102} className='absolute -top-6 left-0  sm:right-0 -z-10 sm:z-10' />
                <Image src={image1} alt="decoration" width={574} className="absolute -bottom-64 -left-20 -z-10 " />
                <Image src={gift} alt="decoration" width={250} className="absolute top-1/2  -translate-y-1/2   md:top-[90%] md:right-0 -z-10 " />
                <Image src={image2} alt="decoration" width={574} className="absolute -top-40 -right-40 -z-10 flower opacity-50 lg:opacity-100" />
                <div className='flex flex-1 items-center gap-3 flex-col'>
                    <p className='flex flex-col gap-2 text-2xl sm:text-3xl uppercases text-center mt-2 sm:mt-0 text-black/70'>
                        <span>Go Digital this Season!</span>
                        <span>Gift that speaks love</span>
                    </p>
                </div>
                <div className='w-full flex justify-center gap-5 max-w-screen-sm mx-auto flex-wrap items-center mt-6 sm:mt-6  lg:mt-0'>
                    <Button
                        value={" Gift Entertainment"}
                        link={'https://www.giftanapp.com/category/entertainment'} />
                    <Button
                        value={' Gift Health and Fitness'}
                        link={'https://www.giftanapp.com/search?keyword=Health'} />
                    <Button
                        value={' Gift Books and Magazines'}
                        link={'https://www.giftanapp.com/search?keyword=Books'} />
                    <Button
                        value={' Gift Knowledge'}
                        link={'https://www.giftanapp.com/search?keyword=Knowledge'} />
                </div>
            </div>
        </div>
    )
}
