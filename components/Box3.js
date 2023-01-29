'use client'

export default function Box3(){
    return(
        <div className="bg-gray-800 rounded dark:bg-slate-300">
        <p className="text-white dark:text-black text-center">Database</p>
        <ul className="text-center p-1">
            <li className="bg-gray-600 h-7 text-white dark:text-black border-b w-full rounded-sm mb-2 hover:bg-gray-500 cursor-pointer ring-offset-1 ring-1 dark:bg-gray-300 ">
                MongoDB
            </li>

            <li className="bg-gray-600 h-7 text-white dark:text-black border-b w-full rounded-sm mb-2 hover:bg-gray-500 cursor-pointer ring-offset-1 ring-1 dark:bg-gray-300 ">
                MySQL
            </li>

            <li className="bg-gray-600 h-7 text-white dark:text-black border-b w-full rounded-sm mb-2 hover:bg-gray-500 cursor-pointer ring-offset-1 ring-1 dark:bg-gray-300 ">
                PostgreSQL
            </li>

            <li className="bg-gray-600 h-7 text-white dark:text-black border-b w-full rounded-sm mb-2 hover:bg-gray-500 cursor-pointer ring-offset-1 ring-1 dark:bg-gray-300 ">
                Supebase
            </li>

            <li className="bg-gray-600 h-7 text-white dark:text-black border-b w-full rounded-sm mb-2 hover:bg-gray-500 cursor-pointer ring-offset-1 ring-1 dark:bg-gray-300 ">
                Vercel
            </li>

            <li className="bg-gray-600 h-7 text-white dark:text-black border-b w-full rounded-sm mb-2 hover:bg-gray-500 cursor-pointer ring-offset-1 ring-1 dark:bg-gray-300 ">
                Firebase
            </li>

            <li className="bg-gray-600 h-7 text-white dark:text-black border-b w-full rounded-sm mb-2 hover:bg-gray-500 cursor-pointer ring-offset-1 ring-1 dark:bg-gray-300 ">
                NextAuth.js
            </li>

            <li className="bg-gray-600 h-7 text-white dark:text-black border-b w-full rounded-sm mb-2 hover:bg-gray-500 cursor-pointer ring-offset-1 ring-1 dark:bg-gray-300 ">
                Prisma/next.js
            </li>


        </ul>
        </div>
    )    
}