
import { Suspense } from 'react'
import './App.css'
import Navbar from './Navbar'

function App() {
  

  return (
    <>
     
     <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
     </Suspense>

    </>
  )
}

export default App
