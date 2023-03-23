import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/header'
import Footer from '../components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<div className='px-10'>
  <div className="justify-between mx-auto flex min-h-screen max-w-7xl flex-col">
      
      <Head>
        <title>ShMuntaser</title>
        <meta name="description" content="Built by Shajid Muntaser to preview all his work" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main className="flex flex-col w-full flex-1 items-center justify-center px-20 text-center my-40 md:my-60">
        
        <div className="flex w-full flex-row items-center justify-center">
          <h1 className="flex flex-col text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-300 pb-3">
                  {/* Portfolio */}
          </h1>

          <h2 className="text-black pt-3 font-medium">

          </h2>
        </div>

        <div>

        </div>


      </main>

      <Footer/>
    </div>
    </div> 
  )
}
