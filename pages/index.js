import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home({data}) {
  console.log(data);
  return (
    <div >
      <Head>
        <title>Mabrur | Front-End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   
    <Main />
    <About/>
    <Skills/>
    <Projects data={data}/>
    <Contact/>
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
  //console.log(data);
  return {
    props: {
        data: data
    }, // will be passed to the page component as props
  }
}
