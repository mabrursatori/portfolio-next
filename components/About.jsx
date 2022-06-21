import React from 'react'
import Image from 'next/image';
import AboutImg from '../public/assets/about.jpg';

export default function About() {
  return (
    <div className="w-full md:h-screen  p-2 flex items-center py-16">
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>I am not normal developer</p>
                <p className='py-2 text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fugit consequatur quas harum, obcaecati dignissimos tenetur delectus saepe quia exercitationem minima temporibus quos quidem, dolores voluptatum possimus inventore illum. Perspiciatis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa nam maxime, quas nostrum molestias harum suscipit perferendis, quibusdam, tenetur dolorem magnam! Minima molestias neque voluptatibus ex libero laboriosam repudiandae laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam atque, tenetur ut velit natus laudantium, assumenda aut voluptates dolorem quam blanditiis molestias! Vitae veniam iure odio harum eaque! Exercitationem, dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam asperiores corrupti autem culpa quaerat, impedit odit ullam quidem beatae accusantium. Est eius quibusdam omnis recusandae magni mollitia quam animi reiciendis!
                </p>
                <p className='py-2 text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fugit consequatur quas harum, obcaecati dignissimos tenetur delectus saepe quia exercitationem minima temporibus quos quidem, dolores voluptatum possimus inventore illum. Perspiciatis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa nam maxime, quas nostrum molestias harum suscipit perferendis, quibusdam, tenetur dolorem magnam! Minima molestias neque voluptatibus ex libero laboriosam repudiandae laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam atque, tenetur ut velit natus laudantium, assumenda aut voluptates dolorem quam blanditiis molestias! Vitae veniam iure odio harum eaque! Exercitationem, dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam asperiores corrupti autem culpa quaerat, impedit odit ullam quidem beatae accusantium. Est eius quibusdam omnis recusandae magni mollitia quam animi reiciendis!
                </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
        </div>
    </div>
  )
}
