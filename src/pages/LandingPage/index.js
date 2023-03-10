import React from 'react'
import imageKmhd from "../../assets/img-1.png"
import './index.css'

function LandingPage() {
  return (
    <div className='full grid lg:grid-cols-7 '>
      <div className=' m-9 md:m-20 lf-side lg:col-span-4 '>
        <div>
            <p className='font-poppins font-semibold text-head'>Coming<br/>Soon 😀</p>
            <p className='text-blue font-medium'>#BerlayarSelarasMenyemaikanMakna</p>
        </div>
        <div className='sub-head mr-4'>
            <p className='text-blue'>To make things right we need some time to build.</p>
            <p className='text-blue font-bold'>Register for join KMHD UI 2023!!</p>
        </div>
        <a 
          href='https://docs.google.com/forms/d/e/1FAIpQLSehLy89LJFXLJ6vHJp5ppmtIluaeDFe3TtiV7zCrypszAR7hQ/viewform'
          className=''
        >
            <button className='btn font-bold mt-4 mr-7'>Register</button>
        </a>
      </div>
      <div className='col-span-3 cover'>
        <img className='image-right' alt='Story of KMHD UI' src={imageKmhd}></img>
      </div>
    </div>
  )
}

export default LandingPage
