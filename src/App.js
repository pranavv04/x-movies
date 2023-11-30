// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import 'swiper/css';
import Header from './pages/Header';
import Banner from './pages/Banner';
import Main from './pages/Main';
import Footer from './pages/Footer';
import BackTop from './components/BackTop';
import React,{useState,useEffect} from 'react';
function App() {
  const [scroll, setScroll] = useState(0);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      setScroll(window.scrollY);

    });
    return () =>{
      window.removeEventListener('scroll',()=>{
        setScroll(window.scrollY);
      });
    }
  },[scroll]);

  return (
    <>
        <Header scroll={scroll}/> 
        <Banner/>
        <Main/>
        <Footer/>
        <BackTop scroll={scroll}/>
    </>

  );
}

export default App;
