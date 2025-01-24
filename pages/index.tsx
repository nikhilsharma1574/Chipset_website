import { Inter } from 'next/font/google'
import Landing from '@/components/Landing'
import { Gallery } from '@/components/Gallery'
import Head from 'next/head'
import PageLayout from '@/layouts/PageLayout'
import { motion as m } from 'framer-motion'
import Marqueescroll from '@/components/Marqueescroll'
import Slideshow_landing from '@/components/Slideshowlanding'
import Team from '@/components/Team'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>CHiPSET | HOME</title>
      <link rel="shortcut icon" href="/assets/logo/64x_white_logo.png" />
    </Head>
    <m.div className='max-w-screen overflow-hidden' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.75,ease:"easeOut"}}>
      <PageLayout>
        <Slideshow_landing/>
        <Landing/>
        <Team />
        <Marqueescroll/>
        <Gallery/>
      </PageLayout>
    </m.div>
    </>
        
  )
}

