import Navbar from '../components/Navbar'
import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Navbar/>
  <Component {...pageProps} />
  
  </>
 )
}

export default MyApp
