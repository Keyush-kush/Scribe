import React from 'react'

function Header() {
  return (
    <header className='flex items-center justify-between gap-4  p-4 bg header-animate'>
        <h1>Free<span className='text-purple-400 '>Scribe</span></h1>
        <button className='flex items-center gap-2  hover:text-purple-600'>
          <p>New</p>
          <i className="fa-solid fa-plus"></i>
          </button>
        </header>
  )
}

export default Header