import React from 'react'
import heroImage from '@/assets/hero-img.png'
import d_1 from '@/assets/decoration-1.png'
import Image from 'next/image'
import image1 from '@/assets/1.png'
import image2 from '@/assets/2.png'
import Button from './Button'
export default function Hero() {
    return (
        <div className=' bg-white/25 p-4 backdrop:blur-lg rounded-xl relative h-[800px] lg:h-[600px] mt-6 sm:mt-10  2xl:overflow-visible overflow-hidden'>
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
                <Image src={image2} alt="decoration" width={574} className="absolute -top-40 -right-40 -z-10 flower opacity-50 lg:opacity-100" />
                <div className='flex flex-1 items-center gap-3 flex-col'>
                    <p className='flex flex-col gap-2 text-2xl sm:text-3xl uppercases text-center mt-2 sm:mt-0 text-black/70'>
                        <span>Go Digital this Season!</span>
                        <span>Gift that speaks love</span>
                    </p>
                </div>
                <div className='w-full flex justify-center gap-5 max-w-screen-sm mx-auto flex-wrap items-center mt-6 sm:mt-12  lg:mt-0'>
                    <Button
                        value={"Entertainment"}
                        link={'https://www.freelancer.in/users/l.php?url=https:%2F%2Fwww.giftanapp.com%2Fcategory%2Fentertainment&sig=fdacb7535bfc7c968927c8bd737b5ae13e813270d79a4ee5aadc320827a6c117'} />
                    <Button
                        value={'Health and Fitness'}
                        link={'https://www.freelancer.in/users/l.php?url=https:%2F%2Fwww.giftanapp.com%2Fsearch%3Fkeyword%3DHealth&sig=9ad339ccd3e21950a82f7108ef96f9eaa04282f6a91b69e88d7c795c0c007538'} />
                    <Button
                        value={'Books and Magazines'}
                        link={'https://www.freelancer.in/users/l.php?url=https:%2F%2Fwww.giftanapp.com%2Fsearch%3Fkeyword%3DBooks&sig=45c1a093155d1a25d117742d0f19b06b2003bff3c94b1ccb3d8bcc6dad750c1d'} />
                    <Button
                        value={'Knowledge'}
                        link={'https://www.freelancer.in/users/l.php?url=https:%2F%2Fwww.giftanapp.com%2Fsearch%3Fkeyword%3DKnowledge&sig=8bc1ca0891a7ea4c35b022c634e601d90cd235e7f190de7d0805801f6209ca9d'} />
                </div>
            </div>
        </div>
    )
}
