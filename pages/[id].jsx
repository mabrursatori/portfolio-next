import Image from 'next/image';
import React from 'react';
import cryptoImg from '../public/assets/projects/crypto.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const Detail = ({data}) => {
    
    const portfolio = data.payload;

    

    return (
        <div className='w-full'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                <Image className='absolute z-1' 
                layout='fill' 
                objectFit='cover' 
                src={`${process.env.API_BASE_URL}/api/portfolio/image/${portfolio.id}`}
                alt='/'/>
                <div className='absolute text-white z-10 max-w-[1240px] w-full top-[70%] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] p-2'>
                    <h2 className='py-2'>{portfolio.title}</h2>
                    <h3>{portfolio.label}</h3>
                </div>
            </div>
    
            <div className='max-w-[1240px] mx-auto p2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                    {portfolio.description}
                    </p>
                    <button  className='px-8 py-2 mt-4 mr-3'>
                    <a href={portfolio.urlDemo} target="_blank" rel='noreferrer'>Demo</a>
                    </button>
                    {(portfolio.urlSecondSource) ? (
                        <>
                        <button className='px-8 py-2 mt-4 mr-3'>
                        <a href={portfolio.urlFirstSource} target="_blank" rel='noreferrer' >Frontend Code</a>
                        </button>
                         <button className='px-8 py-2 mt-4'>
                         <a href={portfolio.urlSecondSource} target="_blank" rel='noreferrer' >Backend Code</a>
                         </button>
                         </>
                    ) : (
                        <button className='px-8 py-2 mt-4'>
                    <a href={portfolio.urlFirstSource} target="_blank" rel='noreferrer' >Code</a>
                    </button>
                    )}
                    
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            {portfolio.tech.split(" ").map(item => (<p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> {item}</p>))}
                            {/* <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> React</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Tailwind</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Javascript</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Next.js</p> */}
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

export async function getServerSideProps(context) {
    
    const {id} = context.params;

    const getApi = async () => {
        return new Promise((resolve, rejected) => {
            fetch(`${process.env.API_BASE_URL}/api/portfolio/${id}`)
            .then(data => resolve(data.json()))
            .catch(err => rejected(err));
        });
    }
    const data = await getApi();

    return {
      props: {
          data: data
      }, 
    }
  }

export default Detail