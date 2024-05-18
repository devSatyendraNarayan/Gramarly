 import React from 'react'
import Home from './Pages/Home'
import Header from './Component/Header'
 function App() {
   return (
    <>
    <div className='bg-gray-950 text-white min-h-screen'>
      <Header/>
      <div className='mx-auto px-6 '>
      <Home/>
      </div>
    
    </div>
   
    </>
   )
 }
 
 export default App