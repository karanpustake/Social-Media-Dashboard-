import React from 'react'
import './allbars.css'

function Mainbardata() {
  return (
    <div className='bg-white rounded-md  bars h-auto  '>
      <div className=''>
        <div className=' text-black items-center '>
          <div className=' mx-[14px] my-[14px]'>
            <p className='text-xl font-semibold '>Social Events  </p>
          </div>
          {/* Bar graph */}
          <body class="flex items-center justify-center h-80 my-4 ml-4 mr-10 bg-white">
            <div class="flex space-x-4">

              <div class="flex flex-col gap-x-6 justify-between h-64 font-medium text-right pr-4">
                <span>100</span>
                <span>80</span>
                <span>60</span>
                <span>40</span>
                <span>20</span>
                <span>0</span>
              </div>

              <div class="flex items-end font-medium space-x-10 ">

                <div class="flex flex-col items-center">
                  <div class="bg-blue-500 h-48 w-10 rounded-t-lg "></div>
                  <span class="mt-2 text-lg">Jan</span>
                </div>

                <div class="flex flex-col items-center">
                  <div class="bg-green-500 h-64 w-10 rounded-t-lg "></div>
                  <span class="mt-2 text-lg">Feb</span>
                </div>

                <div class="flex flex-col items-center">
                  <div class="bg-red-500 h-32 w-10 rounded-t-lg "></div>
                  <span class="mt-2 text-lg">Mar</span>
                </div>
                <div class="flex flex-col items-center">
                  <div class="bg-red-300 h-36 w-10 rounded-t-lg "></div>
                  <span class="mt-2 text-lg">Apr</span>
                </div>
              </div>
            </div>
          </body>

          {/* Bar graph */}

        </div>
      </div>

    </div>
  )
}

export default Mainbardata