const PopularCard = (props: any) => {

    const {title, summary, author, topic, media, published_date, link} = props;
    let myDate = new Date(published_date);
    let displayDate = `${myDate.toLocaleString('default', { month: 'long' })} ${myDate.getDate()}, ${myDate.getFullYear()}`;

  return (
    <div className="max-w-md bg-white flex flex-1 flex-col justify-around transition duration-500 ease-in-out rounded overflow-hidden shadow-md hover:-translate-y-2">
  <img className="w-auto" src={media} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    {/* <div className="relative before:absolute font-bold font-clash text-lg mb-2 p-1 before:bg-[#f9bda1] before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500"><span className="relative">{title}</span></div> */}
    <h2 className="mb-4 relative cursor-pointer leading-2"><a className="font-semibold font-clash text-xl global-underline" href="/">{title}</a></h2>
    <h2 className="hover:bg-[length:97%_40%] transtion-[background-size] duration-100 ease-out bg-bottom bg-no-repeat bg-gradient-to-r from-[#f9bda1] to-[#f9bda1]">tittttt</h2>
    <p className="relative before:absolute font-clash text-sm mb-2 p-1 before:bg-[#f9bda1] before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500"><span className="relative">{summary.substring(0, 120)}. . .</span>
    </p> 
    <a href={link} target="_blank" className="font-clash text-blue-500 mx-2 font-medium">Read more</a>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-medium text-gray-700 mr-2 mb-2">{topic}</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-medium text-gray-700 mr-2 mb-2">#travel</span>
  </div>
  <div className="px-6 pt-4 pb-2 mb-4 flex justify-between items-center">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
</svg>


      <div className="text-sm font-clash text-center">
        <p className="text-gray-900 font-bold tracking-wide leading-none py-2">{author}</p>
        <p className="text-gray-600 font-medium">{displayDate}</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
</svg>

    </div>
</div>
  )
}

export default PopularCard