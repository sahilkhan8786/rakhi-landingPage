import Image from 'next/image'
import React from 'react'
import logo from '@/assets/logo.png'
export default function Header() {
    return (
        <header className='flex mb-4 w-full justify-center p-3 bg-white/25 backdrop-blur-2xl'>
            <Image src={logo} alt='logo' width={200} height={118} className='cursor-pointer' />
        </header>
    )
}
