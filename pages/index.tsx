import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Landing from '@/components/Landing'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className='w-screen  overflow-hidden'>
      <Navbar/>
      <Landing/>
      <Footer/>
    </div>
    </>
        
  )
}
