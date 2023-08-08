import React from 'react'

const SearchVideoCard = ({info}) => {
    // console.log("dekhte ",params)

    // const {snippet}=params;
    console.log("aja ",info)
  return (
    <div className='grid  grid-cols-6 mt-16 w-[60rem] h-52 ml-3  p-2'>
      <div className='col-span-2'>
        <img alt='thumbnail'
             src={info?.snippet?.thumbnails?.medium?.url}
             className='h-full rounded-3xl p-5' />
      </div>
      <div className='col-span-4 flex flex-col p-3'>
        <span className='font-bold text-2xl mb-4'> {info?.snippet?.title}</span>
        <span> {info?.snippet?.description}</span>  
        <div className='flex mt-8 '>
            <img
                alt='profile'
                src={info?.snippet?.thumbnails?.medium?.url}
                className='rounded-full h-11 w-11 m-2 '
            />
            <span className='mt-4'>{info?.snippet?.channelTitle}</span>
        </div> 
      </div>
    </div>
  )
}

export default SearchVideoCard
