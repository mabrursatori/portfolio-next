import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import portfolioImg from '../public/assets/projects/portfoliofix.jpg';
import portfolioAnimationImg from '../public/assets/projects/portfolioanimationfix.jpg';
import ProjectItem from './ProjectItem';

export default function Projects() {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
               Projects 
            </p>
            <h2 className='py-4'>What I&#39;ve Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem
                title='Portfolio Web'
                backgroundImg={portfolioImg}
                projectUrl='/portfolio'
                tech='Next JS'
            />
             <ProjectItem
                title='Portfolio Web'
                backgroundImg={portfolioAnimationImg}
                projectUrl='/portfolioanimation'
                tech='React JS'
            />
            {/* <ProjectItem
                title='Crypto App'
                backgroundImg={cryptoImg}
                projectUrl='/crypto'
                tech='React JS'

            />
            <ProjectItem
                title='Netflix App'
                backgroundImg={netflixImg}
                projectUrl='/netflix'
                tech='React JS'

            />
            <ProjectItem
                title='Twitch UI'
                backgroundImg={twitchImg}
                projectUrl='/twitch'
                tech='Next JS'

          /> */}
                </div>
        </div>
    </div>
  )
}
