import React from 'react'
import Upbar from './upbar'
import Upbarservices from './upbarservices'
import Upbarsocialapp from './upbarsocialapp'

function Upbaralign() {
  return (
    <div className='flex gap-6 ml-4 my-4'>


        <Upbar />
        <Upbarservices />
        <Upbarsocialapp />
    </div>
  )
}

export default Upbaralign