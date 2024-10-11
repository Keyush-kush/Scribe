import { useState } from 'react'
import Homepage from './Components/Homepage'
import Header from './Components/Header'


function App() {
  

  return (
    <div className='flex flex-col  max-4-[1000px] mx-auto w-full'>
      <section className='min-h-screen flex flex-col'>
        <Header/>
       <Homepage/>
      </section>
      <footer></footer>
    </div>
  )
}

export default App
