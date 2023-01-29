'use client'

import Box1 from "@/components/Box1"
import Box2 from "@/components/Box2"
import Box3 from "@/components/Box3"
import Box4 from "@/components/Box4"
import Box5 from "@/components/Box5"
import Box6 from "@/components/Box6"
import Box7 from "@/components/Box7"
import Box8 from "@/components/Box8"
import Box9 from "@/components/Box9"

import React from 'react'

const MainPage = () => {
return (
    <div className='span-2 gap-2 m-auto w-full h-[50.4rem] bg-slate-500 dark:bg-slate-200 border rounded shadow-white shadow-md dark:shadow-black ease-in duration-300 grid grid-cols-10 grid-rows-3 p-2'>
    
    <div className=' row-span-3 col-span-2  rounded border-zinc-300 shadow-white shadow-md dark:shadow-black bg-slate-800 dark:bg-slate-400'>
                <Box1/>
        </div>
                
        <div className='border-2 rounded border-zinc-300 shadow-white shadow-md dark:shadow-black bg-slate-800 dark:bg-slate-400'>
                <Box2/>
        </div>

        <div className='border-2 rounded border-zinc-300 shadow-white shadow-md dark:shadow-black bg-slate-800 dark:bg-slate-400'>
                <Box3/>
        </div>

        <div className='row-span-3 border-2 rounded border-zinc-300 shadow-white shadow-md dark:shadow-black bg-slate-800 dark:bg-slate-400'>
                <Box4/>
        </div>

        <div className='border-2 rounded border-zinc-300 shadow-white shadow-md dark:shadow-black bg-slate-800 dark:bg-slate-400'>
                <Box5/>
        </div>

        <div className='border-2 rounded border-zinc-300 shadow-white shadow-md dark:shadow-black bg-slate-800 dark:bg-slate-400'>
                <Box6/>
        </div>

        <div className='border-2 rounded border-zinc-300 shadow-white shadow-md dark:shadow-black bg-slate-800 dark:bg-slate-400'>
                <Box7/>
        </div>

        <div className='border-2 rounded border-zinc-300 shadow-white shadow-md dark:shadow-black bg-slate-800 dark:bg-slate-400'>
                <Box8 />
        </div>

        <div className='border-2 rounded border-zinc-300 shadow-white shadow-md dark:shadow-black bg-slate-800 dark:bg-slate-400'>
                <Box9/>
        </div>
    
    
    
    </div>
)
}

export default MainPage