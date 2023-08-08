import React from 'react'
import {formatCount, randomViewsCount} from '../utils/helper'
import { useDispatch } from 'react-redux'
import { changeStateFalse } from '../utils/sidePanelStateSlice'

const VideoCard = ({info}) => {

  const dispatch=useDispatch();

  const handleOnClick=()=>{
    dispatch(changeStateFalse());
  }
  
  return (
    <div className='p-2 m-2 w-72' onClick={()=>handleOnClick()}>
      <img className="rounded-lg" alt='tumbnail' src={info?.snippet?.thumbnails?.medium?.url} />
      <ul>
        <li className='font-bold'>{info?.snippet?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
        <li>{formatCount(randomViewsCount())} views</li>
      </ul>

    </div>
  )
}

export default VideoCard
