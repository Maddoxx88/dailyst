import Header from '@dlyst/components/Header'
import Popular from '@dlyst/components/PopularList'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header />
    
    <div className="flex items-center py-4 mx-6">
        <div className="flex-grow h-px bg-gray-400"></div> 

        <span className="flex-shrink text-4xl text-black px-4 font-bold underline underline-offset-0 decoration-8 decoration-[#f9bda1] tracking-wide font-clash">TODAY NEWS</span>

        <div className="flex-grow h-px bg-gray-400"></div>
    </div>
    <div className="flex flex-row mx-6 w-full">
      <div className="flex">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="black" className="w-8 h-8 m-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
<input className="bg-white outline-none tracking-wide text-sm text-black p-2 font-clash focus:bg-[#f5e8d4] " placeholder="SEARCH" type="text" name="search"/>
      </div>
    <div className='flex flex-1 my-2 justify-around'>
      <h2 className='text-[#ab9d91] font-clash'>ECONOMICS</h2>
      <h2 className='text-[#ab9d91] font-clash'>SPORT</h2>
      <h2 className='text-[#ab9d91] font-clash'>FINANCE</h2>
      <h2 className='text-[#ab9d91] font-clash'>TECH</h2>
      <h2 className='text-[#ab9d91] font-clash'>GAMING</h2>
      <h2 className='text-[#ab9d91] font-clash'>WORLD</h2>
      <h2 className='text-[#ab9d91] font-clash'>OTHER</h2>
    </div>
    </div>
    <Popular />
    </>
    
  )
}
