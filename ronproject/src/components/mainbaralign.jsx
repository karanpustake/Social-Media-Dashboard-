import React from 'react'
import Mainbardata from './mainbardata'
import Mainbarshares from './mainbarshares'
import './allbars.css'
import Mainbarfollowers from './mainbarfollowers'

export default function Mainbaralign() {
  return (
    <div className='flex items-center space-x-4 mx-4'>
    <div className='flex'>
      <Mainbardata />
    </div>
  

    <div className='flex flex-col justify-between space-y-7'>
      <Mainbarshares />
      <Mainbarfollowers />
    </div>
  </div>
  
  )
}
