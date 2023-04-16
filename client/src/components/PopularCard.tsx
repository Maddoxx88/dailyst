
const PopularCard = (props: any) => {

    const {title, summary, author, topic, media, published_date, link} = props;
    let myDate = new Date(published_date);
    let displayDate = `${myDate.toLocaleString('default', { month: 'long' })} ${myDate.getDate()}, ${myDate.getFullYear()}`;

  return (
    <div className="max-w-md flex flex-1 flex-col justify-around transition duration-350 ease-in rounded overflow-hidden shadow-md hover:scale-105">
  <img className="w-auto" src={media} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold font-clash text-lg mb-2 hover:underline hover:decoration-4 transition duration-500 decoration-[#f9bda1]">{title}</div>
    <p className="text-gray-700 text-sm mt-4 font-clash">
      {summary.substring(0, 100)}. . . <a href={link} target="_blank" className="text-blue-500 mx-2 font-medium">Read more</a>
    </p>
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
        <p className="text-gray-900 font-bold leading-none py-2">{author}</p>
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