import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ui from './components/ui'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex justify-center items-center'>

      <Ui />
      
    </div>
    </>
  )
}

export default App
