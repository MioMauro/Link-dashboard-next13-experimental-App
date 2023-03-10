'use client'

import React from 'react'
import NavIcons from './NavIcons'

const Navbar = () => {
return (
    <div className='m-auto w-full h-9 mb-1 text-center bg-gray-900 dark:bg-gray-300 rounded-b-lg p-1 border shadow-white shadow-md dark:shadow-black ease-in duration-300'>         
        <NavIcons/>
    </div> 
)
}

export default Navbar