import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Home() {
  return (
<div className='px-10'>
  <div className="justify-between mx-auto flex min-h-screen max-w-7xl flex-col">
      
      <Head>
        <title>Shajid | Portfolio</title>
        <meta name="description" content="Built by Shajid Muntaser to preview all his work" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/connect.png" />
      </Head>

      <Header/>

      <main className="flex flex-col w-full flex-1 items-center justify-between px-20 my-5 text-center">
        
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold pb-3">Welcome to my portfolio</h1>
      </div>
        
      <div className="flex flex-col items-center justify-center">

      <h1 className="bg-zinc-700 text-1xl font-bold pb-3">My name is Shajid Muntaser and I am a senior at New York Tech studying computer science with a concentration in network security. As a full-stack developer for several projects and a coding instructor at iD Tech, 
      I have honed excellent programming skills that, combined with exceptional problem-solving and time management abilities, enable me to excel in various situations. Driven by a passion for programming and business development, 
      I&apos;m eager to further develop my skills as an engineer in a dynamic and stimulating setting. I&apos;m excited to leverage my expertise to create innovative solutions and contribute to impactful projects.
      Overall, I&apos;m dedicated to making a positive impact in the technology field and eager to explore opportunities to contribute to an organization&apos;s growth and success.</h1>

      </div>


      </main>

      <Footer/>
    </div>
    </div> 
  )
}
