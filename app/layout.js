import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MainPage from '@/components/MainPage'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css' 


export default function RootLayout({ children }) {
  return (
    <html lang="en">      
      <head />
      
      <body className='bg-slate-700 dark:bg-slate-400'>
        <Header/>
        <Navbar/>
        <MainPage/>
        <Footer/>
      {children}
      </body>      
    </html>    
  )
}
