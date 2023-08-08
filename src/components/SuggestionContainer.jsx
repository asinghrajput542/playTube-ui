import React, { useEffect, useState } from 'react'
import { VIDEO_LIST_URL } from '../utils/constant';
import SuggestionVideoCard from './SuggestionVideoCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SuggestionContainer = () => {
    const [sugeestionVideos, setSuggestionVideos]=useState([]);
    const theme=useSelector(store=>store.theme.mode);

useEffect(()=>{
  if(theme==="dark"){
    document.documentElement.classList.add("dark")
  }else{
    document.documentElement.classList.remove("dark")
  }
},[theme])


    useEffect(()=>{
        getSuggestions()
    },[])

    async function getSuggestions(){
        const data=await fetch(VIDEO_LIST_URL);
        const json=await data.json();
        setSuggestionVideos(json.items);

    }
     if(sugeestionVideos.length === 0) return null;
  return (
    <div className='mt-[5rem] dark:bg-black dark:text-white'>
        {sugeestionVideos.map(value => <Link to={"/watch?v="+value?.id?.videoId} key={value?.id?.videoId}><SuggestionVideoCard key={value.id} info={value}/> </Link>)}
    </div>
  )
}

export default SuggestionContainer
