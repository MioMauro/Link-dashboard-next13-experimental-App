'use client'

import Image from 'next/image'
import vue2 from "public/icon-btn/nuxt2.png"
import next13 from "public/icon-btn/next13.png"
import react from "public/icon-btn/react.png"
import redux from "public/icon-btn/redux.png"
import angular from "public/icon-btn/angular.png"
import vue from "public/icon-btn/vue.png"
import gatsby from "public/icon-btn/gatsby.png"
import wordpress from "public/icon-btn/wordpress.png"
import tailwind from "public/icon-btn/tailwind.png"
import bootstrap from "public/icon-btn/bootstrap.png"


export default function Box1() {
    //const [data, setData] = useState([...wharehouse])
    //console.log(wharehouse)
    // tag Link not good for nested Image, better tag <a></a>
    return (
        <div className="bg-gray-800 rounded dark:bg-slate-300 ">
        
        <p className="text-white dark:text-black text-center">Most popular</p>
        <ul className="z-1 text-center p-1">

                <li className=" h-7 text-white dark:text-black  w-full rounded-sm mb-2 cursor-pointer  dark:bg-gray-300 border-2 border-blue-900 hover:border-rose-600">
                <a href="https://beta.nextjs.org/docs" target="_blank" rel="noopener noreferrer"><span><Image src={next13} alt="icon" className='h-[24px] w-full m-auto '/></span></a>
                </li>

                <li className=" h-7 text-white dark:text-black  w-full rounded-sm mb-2 cursor-pointer  dark:bg-gray-300 border-2 border-blue-900 hover:border-rose-600">
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><span><Image src={react} alt="icon" className='h-[24px] w-full m-auto '/></span></a>
                </li>
                
                <li className=" h-7 text-white dark:text-black  w-full rounded-sm mb-2 cursor-pointer  dark:bg-gray-300 border-2 border-blue-900 hover:border-rose-600">
                <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer"><span><Image src={redux} alt="icon" className='h-[24px] w-full m-auto '/></span></a>
                </li>
                
                <li className=" h-7 text-white dark:text-black  w-full rounded-sm mb-2 cursor-pointer  dark:bg-gray-300 border-2 border-blue-900 hover:border-rose-600">
                <a href="https://angular.io/" target="_blank" rel="noopener noreferrer"><span><Image src={angular} alt="icon" className='h-[24px] w-full m-auto '/></span></a>
                </li>

                <li className=" h-7 text-white dark:text-black  w-full rounded-sm mb-2 cursor-pointer  dark:bg-gray-300 border-2 border-blue-900 hover:border-rose-600">
                <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer"><span><Image src={vue} alt="icon" className='h-[24px] w-full m-auto '/></span></a>
                </li>
                
                <li className=" h-7 text-white dark:text-black  w-full rounded-sm mb-2 cursor-pointer  dark:bg-gray-300 border-2 border-blue-900 hover:border-rose-600">
                <a href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer"><span><Image src={vue2} alt="icon" className='h-[24px] w-full m-auto rounded'/></span></a>
                </li>                

                <li className=" h-7 text-white dark:text-black  w-full rounded-sm mb-2 cursor-pointer  dark:bg-gray-300 border-2 border-blue-900 hover:border-rose-600">
                <a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener noreferrer"><span><Image src={gatsby} alt="icon" className='h-[24px] w-full m-auto rounded'/></span></a>
                </li>

                <li className=" h-7 text-white dark:text-black  w-full rounded-sm mb-2 cursor-pointer  dark:bg-gray-300 border-2 border-blue-900 hover:border-rose-600">
                <a href="https://wordpress.org/" target="_blank" rel="noopener noreferrer"><span><Image src={wordpress} alt="icon" className='h-[24px] w-full m-auto rounded'/></span></a>
                </li>

                <li className=" h-7 text-white dark:text-black  w-full rounded-sm mb-2 cursor-pointer  dark:bg-gray-300 border-2 border-blue-900 hover:border-rose-600">
                <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer"><span><Image src={tailwind} alt="icon" className='h-[24px] w-full m-auto rounded'/></span></a>
                </li>

                <li className=" h-7 text-white dark:text-black  w-full rounded-sm mb-2 cursor-pointer  dark:bg-gray-300 border-2 border-blue-900 hover:border-rose-600">
                <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer"><span><Image src={bootstrap} alt="icon" className='h-[24px] w-full m-auto rounded'/></span></a>
                </li>

                <li className=" h-7 text-white dark:text-black  w-full rounded-sm mb-2 cursor-pointer  dark:bg-gray-300 border hover:border-rose-600">
                INSPIRATION
                </li>

                <li className=" h-7 text-white dark:text-black  w-full rounded-sm mb-2 cursor-pointer  dark:bg-gray-300 border hover:border-rose-600">
                CollectUI
                </li>

                <li className=" h-7 text-white dark:text-black  w-full rounded-sm mb-2 cursor-pointer  dark:bg-gray-300 border hover:border-rose-600">
                Emojipedia 💣
                </li>

                <li className=" h-7 text-white dark:text-black  w-full rounded-sm mb-2 cursor-pointer  dark:bg-gray-300 border hover:border-rose-600">
                Postman
                </li>

                <li className=" h-7 text-white dark:text-black  w-full rounded-sm mb-2 cursor-pointer  dark:bg-gray-300 border hover:border-rose-600">
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