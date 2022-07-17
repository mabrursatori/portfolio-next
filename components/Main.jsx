import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link';

export default function Main() {
  return (
    <div id='home' className="w-full h-screen text-center">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
            <div>
                <p className="uppercase text-sm tracking-widest text-gray-600">LET&#39;S BUILD SOMETHING TOGETHER</p>
                <h1 className='py-4 text-gray-700'>Hi, I&#39;m <span className='text-[#5651e5]'>Mabrur</span></h1>
                <h1 className='py-2 text-gray-700'>
                   A Junior Full-Stack Developer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                  I&#39;m Full-Stack Developer, I&#39;m exciting, commitment and professional for my job and my projects. Let&#39;s scroll down and know more about me.
                </p>
                <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <a href='https://www.linkedin.com/in/mabrur-371b44195/' target="_blank" rel='noreferrer'>
                  <FaLinkedin/>
                  </a>
                                   
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <a href="https://github.com/mabrursatori" target="_blank" rel='noreferrer'>
                  <FaGithub/>
                </a>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <Link href='/#contact'>
                  <a>
                  <AiOutlineMail/>
                  </a>
               
                </Link>              
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <a href="https://api.whatsapp.com/send?phone=6285624436317" target="_blank" rel='noreferrer'>
                      <BsFillPersonLinesFill/>
                  </a>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
