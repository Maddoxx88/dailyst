
const Header = () => {
  return (
    <header>
<nav className='flex justify-between my-6 mx-6'>
    <h2 className='text-black text-2xl font-clash'>dailyst</h2>
    <div className='w-96 flex justify-evenly'>
    <a className='text-[#ab9d91] font-clash'>Home</a>
  <a className='text-[#ab9d91] font-clash'>Daily News</a>
  <a className='text-[#ab9d91] font-clash'>Tech</a>
  <a className='text-[#ab9d91] font-clash'>Gaming</a>
    </div> 
    <div>      
  <button className='px-10 py-4 mr-4 active:translate-y-1 active:shadow-[0.5px_0.5px_0px_0px_rgba(0,0,0)] border text-xl border-black text-black hover:bg-[#f5e8d4] shadow-[4px_4px_0px_1px_rgba(0,0,0)] font-clash font-medium'>Sign in</button>
  <button className='px-10 py-4 ml-4 active:translate-y-1 active:shadow-[0.5px_0.5px_0px_0px_rgba(0,0,0)] border text-xl border-black text-black bg-[#f5e8d4] shadow-[4px_4px_0px_1px_rgba(0,0,0)] font-clash font-medium'>Register</button>
    </div>
</nav>
</header>
  )
}

export default Header