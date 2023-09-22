import { Inter } from 'next/font/google'

import '@/styles/globals.css'

import Head from '@/components/head';
import Header from '@/components/header';
import Footer  from '@/components/footer';


const inter= Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <Head/>
      <body className='grid grid-cols-container grid-rows-container containers font-base text-black bg-blue-50'>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
