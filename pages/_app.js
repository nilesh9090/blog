import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState ,useEffect} from 'react';
import { ThemeProvider } from "next-themes";
import LoadingBar from 'react-top-loading-bar';
import {useRouter} from 'next/router';
function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0)
  const router = useRouter();
  useEffect(() => {
      router.events.on('routeChangeComplete',()=>{
        setProgress(100);
      })
  }, [router.query])
  

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <LoadingBar
        color='rgb(242 213 2)'
        progress={progress}
        waitingTime={500}
        height={3}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className='dark:bg-dark-bg dark:text-white  bg-gray-50' >
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>)
}

export default MyApp