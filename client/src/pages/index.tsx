import Header from '@dlyst/components/header'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header />
    <div className="flex items-center py-4 mx-4">
        <div className="flex-grow h-px bg-gray-400"></div> 

        <span className="flex-shrink text-4xl text-black px-4 font-bold underline underline-offset-0 decoration-8 decoration-[#f9bda1] tracking-wide font-clash">TODAY NEWS</span>

        <div className="flex-grow h-px bg-gray-400"></div>
    </div>
    <div className="flex flex-row mx-4 w-full">
      <div className="flex">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6 m-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
<input className="bg-[#f5e8d4] outline-none tracking-wide text-black p-2 font-clash" placeholder="SEARCH" type="text" name="search"/>
      </div>
    <div className='flex flex-1 my-2 justify-around'>
      <h2 className='text-[#ab9d91] font-clash'>ACADEMIC</h2>
      <h2 className='text-[#ab9d91] font-clash'>ACADEMIC</h2>
      <h2 className='text-[#ab9d91] font-clash'>ACADEMIC</h2>
      <h2 className='text-[#ab9d91] font-clash'>ACADEMIC</h2>
      <h2 className='text-[#ab9d91] font-clash'>ACADEMIC</h2>
      <h2 className='text-[#ab9d91] font-clash'>ACADEMIC</h2>
      <h2 className='text-[#ab9d91] font-clash'>ACADEMIC</h2>
    </div>
    </div>
    </>
    
  )
}
