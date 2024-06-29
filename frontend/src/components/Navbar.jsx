import React from 'react'

const Navbar = () => {
  return (
    <header className='bg-slate-600'>
        <div className='container flex items-center justify-between p-5 mx-auto '>
            <h2 className='ml-10 text-3xl font-extrabold text-white'>BLOGGER</h2>
        <div className='flex font-semibold text-white gap-7'>
            <a href="#">Food</a>
            <a href="#">Fashion</a>
            <a href="#">Travel</a>
            <a href="#">Technology</a>
            <button className='border rounded-lg bg-gray-40 hover:bg-black'>+New Post</button>
        </div>
        </div>
    </header>
  )
}

export default Navbar

