import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css' 


export default function RootLayout({ children }) {
  return (
    <html lang="en">      
      <head />
      
      <body className='bg-slate-700 dark:bg-slate-400'>
      
        <Header/>
        <Navbar/>
      {children}
      </body>
      
    </html>    
  )
}
