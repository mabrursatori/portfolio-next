import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import propertyImg from '../public/assets/projects/portfoliofix.jpg'
import {RiRadioButtonFill} from 'react-icons/ri'

const property = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[50vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={propertyImg} alt='/'/>
            <div className='absolute text-white z-10 max-w-[1240px] w-full top-[70%] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] p-2'>
                <h2 className='py-2'>Portfolio Web</h2>
                <h3>React JS / Tailwind</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>
                I built this app to practice react.js, next.js, and tailwind skills. This application is still a static website and consists of a home page and a portfolio page, and is already very responsive
                </p>
                <button  className='px-8 py-2 mt-4 mr-3'>
                <a href='https://mabrur.vercel.app/' target="_blank" rel='noreferrer'>Demo</a>
                </button>
                <button className='px-8 py-2 mt-4'>
                <a href='https://github.com/mabrursatori/portfolio-next' target="_blank" rel='noreferrer' >Code</a>
                </button>
                
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> React</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Tailwind</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Javascript</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Next.js</p>
                    </div>
                </div>
            </div>

            <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
        </div>
    </div>
  )
}

export default property