
import { Suspense } from 'react'
import './App.css'
import Navbar from './Navbar'
import Banner from './Banner'
// import Footer from './Footer'

function App() {
  

  return (
    <>
     
     <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <Banner />
      {/* <Footer /> */}
     </Suspense>

    </>
  )
}

export default App
