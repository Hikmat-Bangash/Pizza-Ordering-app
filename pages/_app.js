import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import store from '../Redux/store'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return(
    <>
  <ToastContainer position='top-center' />
  <Provider store={store}>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </Provider>
  </>
  )
}

export default MyApp
