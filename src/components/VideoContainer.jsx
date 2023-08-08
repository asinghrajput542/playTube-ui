import React from 'react';
import { useState, useEffect } from 'react';
import VideoCard from './VideoCard';
import {VIDEO_LIST_URL, CATAGORY_FILTER_PREFIC} from '../utils/constant'
import { Link, useParams } from 'react-router-dom'
import ShimmerVideoCard from '../Shared/ShimmerVideoCard';
import { useSelector } from 'react-redux';


const VideoContainer = () => {
    const [videosData, setVideosData]=useState([]);
    const category=useParams().category;
    const theme=useSelector(store=>store.theme.mode);


    console.log("0000 ",category)
  useEffect(()=>{
    if(theme==="dark"){
      document.documentElement.classList.add("dark")
    }else{
      document.documentElement.classList.remove("dark")
    }
  },[theme])

    useEffect(()=>{
        getVideosList()
    },[category])
        
    async function getVideosList(){
      if (typeof(category) != "undefined"){
        const data=await fetch(VIDEO_LIST_URL+CATAGORY_FILTER_PREFIC+category);
        const json=await data.json();
        setVideosData(json.items)
      }else{
        const data=await fetch(VIDEO_LIST_URL);
        const json=await data.json();
        setVideosData(json.items)
      }
    }
    let arr  = [];
    arr.length = 50; 
    return (videosData.length===0)? <div className='flex flex-wrap'>{(arr.fill("")).map(()=><ShimmerVideoCard />)}</div>:(
    <div className='flex flex-wrap flex-1 mt-16 dark:bg-black dark:text-white'>
      {videosData.map((items,index) => (<Link to={"/watch?v="+items?.id?.videoId} key={items?.id?.videoId} > <VideoCard info={items}  /></Link>))}
      
    </div>
  )
}

export default VideoContainer
