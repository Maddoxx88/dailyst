
const Header = () => {
  return (
    <header>
<nav className='flex justify-between my-6 mx-4'>
    <h2 className='text-black text-2xl font-clash'>dailyst&nbsp;|</h2>
    <div className='w-96 flex justify-evenly'>
    <a className='text-[#ab9d91] font-clash'>Home</a>
  <a className='text-[#ab9d91] font-clash'>Daily News</a>
  <a className='text-[#ab9d91] font-clash'>Tech</a>
  <a className='text-[#ab9d91] font-clash'>Gaming</a>
    </div> 
  <button className='px-10 py-4 border text-xl border-black text-black bg-[#f5e8d4] shadow-[4px_4px_0px_1px_rgba(0,0,0)] font-clash'>Contact Us</button>
</nav>
</header>
  )
}

export default Header