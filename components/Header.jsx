'use client'

import ToggleBtn from '@/components/ToggleBtn'

export default function Header(){
return (    
    <div className=' w-full mb-1 text-center bg-gray-900 dark:bg-gray-300 rounded-b-lg p-1 border m-auto shadow-white shadow-md dark:shadow-black ease-in duration-300 '>
        <h1 className="text-white text-2xl font-bold dark:text-slate-900">
        💖 Dashboard-links for full-stack developers 🔗     
        <span className='float-right'>
            <ToggleBtn></ToggleBtn>
        </span>
        </h1>
    </div>    
)
}