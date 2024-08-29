import React from 'react'
import './ui.css'
import Upbaralign from './upbaralign'
import Mainbaralign from './mainbaralign'

function Ui() {
  return (
    <div className='my-4'> 

      <div className='container w-auto h-auto rounded-md'>\
        <h1 className='mx-5 font-extrabold text-2xl text-black'>Social Media Dashboard</h1>

<Upbaralign />
<div className='pb-4'>

<Mainbaralign />
</div>
    
      </div>
    </div>
  )
}

export default Ui