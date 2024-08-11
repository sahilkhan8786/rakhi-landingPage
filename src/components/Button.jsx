import React from 'react'

export default function Button({ value, link }) {
    return (
        <a href={link} target='_blank'> <button className='w-64 border-2 px-2 py-3 rounded-xl  hover:bg-pink-200 transition-all text-lg '>{value}</button></a>
    )
}
