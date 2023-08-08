import React from 'react'
import SidePanel from './SidePanel'
import ButtonList from './ButtonList'

import { Outlet } from 'react-router-dom'
import Header from './Header'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'


const Body = () => {

  const sidePanelState=useSelector(store=>store.sidePanel.isOpen);
  const theme=useSelector(store=>store.theme.mode);

useEffect(()=>{
  if(theme==="dark"){
    document.documentElement.classList.add("dark")
  }else{
    document.documentElement.classList.remove("dark")
  }
  
},[theme])

  return (

    <>
    <Header/>
    <div className='flex dark:bg-black'>
       {sidePanelState && <SidePanel/>}
      <Outlet />
            {/* <ButtonList/> */}
{/*        
        <VideoContainer />
        <WatchPage/> */}
    </div>
    </>
  )
}

export default Body
