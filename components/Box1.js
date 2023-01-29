'use client'

//import Image from 'next/image'
//import { useState } from "react";
//import wharehouse from "../data/wharehouse.json"


export default function Box1() {
    //const [data, setData] = useState([...wharehouse])
    //console.log(wharehouse)
    return (
        <div className="bg-gray-800 rounded dark:bg-slate-300 ">
        
        <p className="text-white dark:text-black text-center">Most popular</p>
        <ul className="z-1 text-center p-1">

                <li className="bg-gray-600 h-7 text-white dark:text-black border-b w-full rounded-sm mb-2 hover:bg-gray-500 cursor-pointer ring-offset-1 ring-1 dark:bg-gray-300">
                <a href="https://nextjs.org/blog/next-13" target="_blank" rel="noopener noreferrer"> Next.js-13</a>
                </li>

                <li className="bg-gray-600 h-7 text-white dark:text-black border-b w-full rounded-sm mb-2 hover:bg-gray-500 cursor-pointer ring-offset-1 ring-1 dark:bg-gray-300">
                React
                </li>
                
                <li className="bg-gray-600 h-7 text-white dark:text-black border-b w-full rounded-sm mb-2 hover:bg-gray-500 cursor-pointer ring-offset-1 ring-1 dark:bg-gray-300">
                Redux
                </li>
                
                <li className="bg-gray-600 h-7 text-white dark:text-black border-b w-full rounded-sm mb-2 hover:bg-gray-500 cursor-pointer ring-offset-1 ring-1 dark:bg-gray-300">
                Angular
                </li>

                <li className="bg-gray-600 h-7 text-white dark:text-black border-b w-full rounded-sm mb-2 hover:bg-gray-500 cursor-pointer ring-offset-1 ring-1 dark:bg-gray-300">
                Vue.js
                </li>

                <li className="bg-gray-600 h-7 text-white dark:text-black border-b w-full rounded-sm mb-2 hover:bg-gray-500 cursor-pointer ring-offset-1 ring-1 dark:bg-gray-300">
                Nuxt.js
                </li>

                <li className="bg-gray-600 h-7 text-white dark:text-black border-b w-full rounded-sm mb-2 hover:bg-gray-500 cursor-pointer ring-offset-1 ring-1 dark:bg-gray-300">
                Gatsby
                </li>

                <li className="bg-gray-600 h-7 text-white dark:text-black border-b w-full rounded-sm mb-2 hover:bg-gray-500 cursor-pointer ring-offset-1 ring-1 dark:bg-gray-300">
                Wordpress
                </li>

                <li className="bg-gray-600 h-7 text-white dark:text-black border-b w-full rounded-sm mb-2 hover:bg-gray-500 cursor-pointer ring-offset-1 ring-1 dark:bg-gray-300">
                Tailwind
                </li>

                <li className="bg-gray-600 h-7 text-white dark:text-black border-b w-full rounded-sm mb-2 hover:bg-gray-500 cursor-pointer ring-offset-1 ring-1 dark:bg-gray-300">
                Bootstrap
                </li>

                <li className="bg-gray-900 h-7 text-white dark:text-black border-b w-full rounded-sm mb-2 hover:bg-gray-500 cursor-pointer ring-offset-1 ring-1 dark:bg-gray-300">
                INSPIRATION
                </li>

                <li className="bg-gray-600 h-7 text-white dark:text-black border-b w-full rounded-sm mb-2 hover:bg-gray-500 cursor-pointer ring-offset-1 ring-1 dark:bg-gray-300">
                CollectUI
                </li>

                <li className="bg-gray-600 h-7 text-white dark:text-black border-b w-full rounded-sm mb-2 hover:bg-gray-500 cursor-pointer ring-offset-1 ring-1 dark:bg-gray-300">
                Emojipedia 💣
                </li>

                <li className="bg-gray-600 h-7 text-white dark:text-black border-b w-full rounded-sm mb-2 hover:bg-gray-500 cursor-pointer ring-offset-1 ring-1 dark:bg-gray-300">
                Postman
                </li>

                <li className="bg-gray-600 h-7 text-white dark:text-black border-b w-full rounded-sm mb-2 hover:bg-gray-500 cursor-pointer ring-offset-1 ring-1 dark:bg-gray-300">
                React-Icons
                </li>
                
            </ul> 
        </div>
);
}

/*
{wharehouse && wharehouse.map((i, index) => {
                    return(
                        <div key={index}>{i.NameBtn}</div>
                    )
                })} 
                
*/