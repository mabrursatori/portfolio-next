import React from 'react'
import Image from 'next/image';

const admin = ({data}) => {

    const portfolios = data.payload;
    
  return (
    <div className='w-screen h-[100vh]  pt-20 px-10'>
    <h2>Portfolio</h2>
    <table className='border-collapse border table-fixed border-slate-400 '>
        <thead>
            <tr>
                <th className='border border-slate-300 px-3 py-1'>No.</th>
                <th className='border border-slate-300 px-3 py-1'>Number</th>
                <th className='border border-slate-300 px-3 py-1'>Title</th>
                <th className='border border-slate-300 px-3 py-1'>Label</th>
                <th className='border border-slate-300 px-3 py-1'>Tech</th>
                <th className='border border-slate-300 px-3 py-1'>Description</th>
                <th className='border border-slate-300 px-3 py-1'>Image</th>
                <th className='border border-slate-300 px-3 py-1'>First Source Code</th>
                <th className='border border-slate-300 px-3 py-1 w-2' >Second Source Code</th>
                <th className='border border-slate-300 px-3 py-1'>Demo Source Code</th>
                <th className='border border-slate-300 px-3 py-1'>Youtube Video</th>
            </tr>
        </thead>
        <tbody>
            {portfolios.map((item) => (<tr key={item.id}>
                <td className='border border-slate-300 px-3 py-1'>{item.id}</td>
                <td className='border border-slate-300 px-3 py-1'>{item.number}</td>
                <td className='border border-slate-300 px-3 py-1'>{item.title}</td>
                <td className='border border-slate-300 px-3 py-1'>{item.label}</td>
                <td className='border border-slate-300 px-3 py-1'>{item.tech}</td>
                <td className='border border-slate-300 px-3 py-1'>
                <div className='w-[200px] h-[50px] overflow-auto break-all '>
                    {item.description}
                    </div>
                </td>
                <td className='border border-slate-300 px-3 py-1'>
                    <Image
                    width={1000}
                    height={300}
                    layout='intrinsic'
                    src={`${process.env.API_BASE_URL}/api/portfolio/image/${item.id}`}
                    alt='/'
                    />
                </td>
               
                <td className='border border-slate-300 px-3 py-1'>
                    <div className='w-[100px] h-[50px] overflow-auto break-all '>
                    {item.urlFirstSource}
                    </div>
                </td>
                <td className='border border-slate-300 px-3 py-1 '  >
                <div className='w-[100px] h-[50px] overflow-auto break-all '>
                    {item.urlSecondSource}
                    </div>
                </td>
                <td className='border border-slate-300 px-3 py-1'>
                <div className='w-[100px] h-[50px] overflow-auto break-all '>
                    {item.urlDemo}
                    </div>
                </td>
                <td className='border border-slate-300 px-3 py-1'>
                <div className='w-[100px] h-[50px] overflow-auto break-all '>
                    {item.urlVideo}
                    </div>
                </td>
            </tr>))}
       
        </tbody>
    </table>
    </div>
  )
}

export async function getServerSideProps(context) {
    
    const getApi = async () => {
        return new Promise((resolve, rejected) => {
            fetch(`${process.env.API_BASE_URL}/api/portfolio`)
            .then(data => resolve(data.json()))
            .catch(err => rejected(err));
        });
    }
    const data = await getApi();

    return {
      props: {
          data: data
      }, // will be passed to the page component as props
    }
  }

export default admin