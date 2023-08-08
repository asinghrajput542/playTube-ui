import React, { useEffect, useState } from 'react'
import {useSearchParams} from 'react-router-dom'
import { VIDEO_BY_ID, API_KEY } from '../utils/constant';
import { EyeOutlined, LikeOutlined} from '@ant-design/icons';
import {formatCount} from '../utils/helper';
import SuggestionContainer from './SuggestionContainer';
import ReactPlayer from 'react-player';
import ShimmerSuggestionVideoCard from '../Shared/ShimmerSuggestionVideoCard';
import { useSelector } from 'react-redux';



const WatchPage = () => {
  const [videoId]=useSearchParams();
const id =videoId.get("v");
const[videoById, setVideoById]=useState([]);

const theme=useSelector(store=>store.theme.mode);

useEffect(()=>{
  if(theme==="dark"){
    document.documentElement.classList.add("dark")
  }else{
    document.documentElement.classList.remove("dark")
  }
},[theme])

useEffect(() =>{
  getVideoDetailsById()
},[])


async function getVideoDetailsById(){

  const data= await fetch(VIDEO_BY_ID+id+API_KEY);
  const json=await data.json();
  setVideoById(json.items);
}
let arr  = [];
arr.length = 25; 
return  (
  <>
    <div className='dark:bg-black dark:text-white h-[100vh]'>
      <div className='m-2 flex mt-[5rem]'>
          <ReactPlayer 
          width="950px"
          height="534px"
          url={"https://www.youtube.com/embed/"+id}
          controls
          playing={true}
          />  
      </div>
      <div>
        <h1 className='font-bold m-2 '>{videoById[0]?.snippet?.title}</h1>
      </div>
      <div className='flex '>
        <div>
          <img className='rounded-full h-11 w-11 m-2 ' alt="channel" src = {videoById[0]?.snippet?.thumbnails?.default?.url} />
        </div>
        <div className='flex-1'>
        <h1 className='mt-1 font-bold '>{videoById[0]?.snippet?.channelTitle+"🔘"}</h1>
        <h1 >{"288K subscribers"}</h1>
        
        </div>
        <div className='flex '>
        <button className='border bg-slate-200 rounded-full px-4 py-2 m-1 shadow-md flex items-center dark:bg-white/[0.15]'><LikeOutlined className='p-1'/>{formatCount(videoById[0]?.statistics?.likeCount)}</button>
        <button className='border bg-slate-200 rounded-full px-4 py-2 m-1 shadow-md flex items-center dark:bg-white/[0.15]'><EyeOutlined className='p-1'/> {formatCount(videoById[0]?.statistics?.viewCount)}</button>
       
        </div>
      </div>
    </div>
    <div>
    {(videoById.length==0)?(arr.fill("")).map(()=><ShimmerSuggestionVideoCard/>):<SuggestionContainer/>}
    </div>
    </>

  )
}

export default WatchPage
