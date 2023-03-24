import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Footer from '../components/footer'

export default function contact() {
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

      <main className="flex flex-col w-full flex-1 items-center justify-between px-20 my-5 text-center">
        
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold pb-3">Contact</h1>
      </div>

      </main>

    <Footer/>
    </div>
    </div>
  ); 
} 
