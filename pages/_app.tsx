import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence, motion } from 'framer-motion'

import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <div className='grid grid-cols-12 gap-6 px-5 lg:px-50 my-14 sm:px-20 md:px-32 font-Montserrat'>
        <div className='col-span-12 p-4 text-center bg-white lg:col-span-3 rounded-2xl dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark'>
          <Sidebar />
        </div>
        <div className='flex flex-col col-span-12 overflow-hidden bg-white lg:col-span-9 rounded-2xl dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark'>
          <Navbar />
          <AnimatePresence mode='wait'>
            <Component {...pageProps} key={router.route}/>
          </AnimatePresence>

        </div>
      </div>
    </ThemeProvider>
  )
}
