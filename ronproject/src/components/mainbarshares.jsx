import React from 'react'
import './allbars.css'

function Mainbarshares() {
    return (
        <div className="bg-white rounded-md w-72 bars h-[25vh]  ">
            <div className=' text-black'>
                <div className=' mx-[14px] pt-1'>
                    <p className='text-2xl font-lightbold mt-2 text-center'>Instagram Shares </p>
                    <h1 className='text-5xl font-semibold mt-3 text-center'>5,281</h1>
                </div>
             
                <div className=' flex mt-4 justify-center items-center gap-1'>
                    <h1 className=' text-xl'>7%</h1>
                    
                    <i className='bx bxs-up-arrow-circle text-xl'></i>
        
                </div>
          

            </div>
        </div>
    )
}

export default Mainbarshares