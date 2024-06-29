import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import galle_fort from '../assets/galle_fort.jpeg'
import food from '../assets/food.jpeg'
import tech from '../assets/tech.jpeg'
import fashion1 from '../assets/fashion1.jpeg'
import lable from '../assets/lable.png'

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className='p-6'>
        <div className='flex flex-wrap justify-center gap-20 py-8 m-5'>
          
 <div className='p-4 bg-gray-200 border rounded-md shadow-lg '>
  <img src={galle_fort} alt='Galle Fort' className='object-cover w-full h-40' />
  <h3 className="mt-3 font-bold">
    Have you ever visited Galle Fort? <br /> Let's explore more hidden beauty of the heaven.
  </h3>
  <div className="flex items-center py-2">
    <img src={lable} alt="Label" className="w-6 h-6 " />
    <p className='italic opacity-60'>Travel</p>
  </div>
</div>

<div className="p-4 bg-gray-200 border rounded-md shadow-lg ">
  <img src={fashion1} alt="Galle Fort" className="object-cover w-full h-40" />
  <h3 className="mt-3 font-bold">
    Have you ever visited Galle Fort? <br/> Let's explore more hidden beauty of the heaven.
  </h3>
  <div className="flex items-center py-2">
    <img src={lable} alt="Label" className="w-6 h-6 " />
    <p className="italic">Fashion</p>
  </div>
</div>

<div className="p-4 bg-gray-200 border rounded-md shadow-lg ">
  <img src={food} alt="Galle Fort" className="object-cover w-full h-40" />
  <h3 className="mt-3 font-bold">
    Have you ever visited Galle Fort? <br /> Let's explore more hidden beauty of the heaven.
  </h3>
  <div className="flex items-center py-2">
    <img src={lable} alt="Label" className="w-6 h-6 " />
    <p className="italic">Food</p>
  </div>
</div>

<div className="p-4 bg-gray-200 border rounded-md shadow-lg ">
  <img src={tech} alt="Galle Fort" className="object-cover w-full h-40" />
  <h3 className="mt-3 font-bold">
    Have you ever visited Galle Fort? <br /> Let's explore more hidden beauty of the heaven.
  </h3>
  <div className="flex items-center py-2">
    <img src={lable} alt="Label" className="w-6 h-6 " />
    <p className="italic">Technology</p>
  </div>
</div>

<div className="p-4 bg-gray-200 border rounded-md shadow-lg ">
  <img src={galle_fort} alt="Galle Fort" className="object-cover w-full h-40" />
  <h3 className="mt-3 font-bold">
    Have you ever visited Galle Fort? <br /> Let's explore more hidden beauty of the heaven.
  </h3>
  <div className="flex items-center py-2">
    <img src={lable} alt="Label" className="w-6 h-6 " />
    <p className="italic">Travel</p>
  </div>
</div>

<div className="p-4 bg-gray-200 border rounded-md shadow-lg ">
  <img src={food} alt="Galle Fort" className="object-cover w-full h-40" />
  <h3 className="mt-3 font-bold">
    Have you ever visited Galle Fort? <br /> Let's explore more hidden beauty of the heaven.
  </h3>
  <div className="flex items-center py-2">
    <img src={lable} alt="Label" className="w-6 h-6 " />
    <p className="italic">Food</p>
  </div>
</div>
           

    




        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home