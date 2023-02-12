import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import image from '@/public/curtain.jpg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-screen h-screen relative bg-[#493c3a]'>

       <img src={'/curtain.jpg'}  className='absolute top-0 left-0 max-h-full h-screen' />
       <div className='w-screen h-screen bg-black bg-opacity-20 md:bg-transparent flex flex-col justify-center items-center relative z-10 p-4'>
        <div className=''>
          <h1 className='text-yellow-600 text-3xl md:text-6xl font-black'>Tul Perde Stor</h1>
          <p className='text-white mb-8 font-bold'>Yakında yanınızda!</p>
          <p className='text-white mb-2'>Yayından haberdar olmak için mailinizi girin:</p>
          <input type='text'name='email' placeholder='email' className='px-2 py-2 border border-gray-500 rounded-xl w-full'/>
          <div className='w-full flex justify-end'>
            <button className='border-2 border-yellow-600 hover:bg-yellow-600 transition-all  rounded-xl px-3 py-2 mt-2 text-white self-align9-end'>Gönder</button>

          </div>
        </div>
       </div>

       
      </main>
    </>
  )
}
