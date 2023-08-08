import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SidePanel = () => {
  const [isCLicked,setIsClicked]=useState("Home");
  
  const navigate = useNavigate();
  const handleClick = value => {
    setIsClicked(value);
    (value==="Home")?navigate(""):
    navigate(`/${value.toLowerCase()}`)

  }
 
    const sidePanelList=["Home","Trending","JavaScript","ReactJS","Music","Films","Live","Gaming","News","Sports","Learning","Fashion & beauty"];
  return (
    <div className='border shadow-sm  w-44 mt-16 dark:bg-black dark:text-white dark:border-none'>
       <ul>
        {
        sidePanelList.map(value => (
         (value===isCLicked)?(<li
          onClick={() => handleClick(value)} 
          className='m-3 bg-slate-200 rounded-lg p-2 dark:bg-white/[0.15]' 
          key={value}
         >{value}</li>)
         :(
      <li
         onClick={() => handleClick(value)} 
         className='m-3 hover:bg-slate-200 rounded-lg p-2 dark:hover:bg-white/[0.15]' 
         key={value}
        >{value}</li>
        )
        ))
        }
        
      </ul>
    </div>
  )
}

export default SidePanel;
