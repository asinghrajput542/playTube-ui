import React from 'react'

const ButtonList = () => {
    const buttonContent=["All","Music","News","Football","Namaste React","Cricket","BiggBoss","Driving","Data Structure","Sports","CSS","React"];
  return (
    <div>
      {buttonContent.map(value => (
      <button className='bg-gray-200 rounded-full m-1 p-2'  key={value}>{value}</button>))}
    </div>
  )
}

export default ButtonList
