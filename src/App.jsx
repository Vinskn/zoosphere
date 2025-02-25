import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, Autoplay  } from 'swiper/modules';
import { Outlet, Link } from 'react-router-dom';
import axios from 'axios';

// swiper utils
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// component utils
import Navbar from './component/nav';
import Footer from './component/footer';

function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // get data news from db
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/data/frontNews')
      .then((res) => {
        setNews(res.data);        
      })
      .catch((e) => console.error(e));
  }, [])
  

  // set image for news


  return (
    <div>
      <Navbar addClass = 'text-white bg-slate-950/20' aHome= 'font-bold'/>
     

      <main>
        <section className="lg:h-screen relative">
          <Swiper autoplay= {{delay: 5000}} loop= {true} modules={[Autoplay]}>
            <SwiperSlide> <img src="/tiger.webp" alt="tiger" className="w-full h-full object-cover" /> </SwiperSlide>
            <SwiperSlide> <img src="/cendrawasih.webp" alt="tiger" className="w-full h-full object-cover" /> </SwiperSlide>
            <SwiperSlide> <img src="/orangutan.webp" alt="tiger" className="w-full h-full object-cover" /> </SwiperSlide>
          </Swiper>
          <div className="text-white ml-4 absolute z-10 sm:top-1/4 sm:-translate-y-1/4 lg:top-1/3 left-4">
            <h1 className="~text-sm/2xl -mb-6 font-highMount">Welcome to</h1>
            <h1 className='~text-6xl/9xl sm:mt-4 lg:mt-0 font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 from-10% via-emerald-600 via-30% to-teal-800 to-90%'>ZooSphere</h1>
            <p className="lg:my-3 ~text-sm/base">
              Explore various kinds of animals. Enjoy a wide range of fun and unique <br />
              experiences during our signature animal encounters
            </p>
            <a href="#" className="~px-4/8 ~py-1/3 rounded-md border border-slate-600 shadow-lg bg-green2 text-black font-bold">
              <button className='mt-4 font-highMount'>Explore Now</button>
            </a>
          </div>

          <div className='absolute lg:~-bottom-4/5 sm:-bottom-5 transform lg:translate-y-1/2 z-10 left-1/2 -translate-x-1/2 bg-green3 w-3/4 lg:h-32 sm:h-16 rounded-3xl px-4 flex justify-between'>
            
            <div className='flex justify-between my-auto text-white'>
              <h1 className='~text-3xl/5xl ~mr-1/3'> <ion-icon name="time-outline"></ion-icon> </h1>
              <div>
                <h1 className='font-semibold ~text-base/xl'>Open Hours</h1>
                <p className='text-slate-200 ~text-xs/base'>Everyday 7AM - 6PM</p>
              </div>
            </div>

            <div className='flex justify-between my-auto text-white'>
              <h1 className='~text-3xl/5xl ~mr-1/3'> <ion-icon name="calendar-outline"></ion-icon> </h1>
              <div>
                <h1 className='font-semibold ~text-base/xl'>News</h1>
                <a href='#' className='text-slate-200 ~text-xs/base'>See Today's News <span className='~text-sm/xl align-middle'><ion-icon name="caret-forward-outline"></ion-icon></span> </a>
              </div>
            </div>

            <div className='flex justify-between my-auto text-white'>
              <h1 className='~text-3xl/5xl ~mr-1/3'> <ion-icon name="map-outline"></ion-icon> </h1>
              <div>
                <h1 className='font-semibold ~text-base/xl'>Zoo Map</h1>
                <a href='#' className='text-slate-200 ~text-xs/base'>ZooSphere Maps <span className='~text-sm/xl align-middle'><ion-icon name="caret-forward-outline"></ion-icon></span> </a>
              </div>
            </div>
            
          </div>
        </section>

        <section className="lg:h-screen sm:mb-5 w-full relative sm:mt-14 lg:mt-40">
          <h1 className="~text-5xl/8xl mb-10 font-bold text-center font-highMount text-green-900">Countless Experience</h1>
          <div className='flex justify-around mx-4 mt-3'> 
              <div className='w-4/5 ~ml-3/5'>
                <div className='rounded-xl bg-pattern1 bg-contain w-10/12 ~h-32/60 flex justify-between relative'>
                  <div className='~p-2/3 w-1/2 text-green-900'>
                    <h1 className='~text-sm/xl font-bold'>Savari View</h1>
                    <p className='~text-xs/4xl font-bold'>"It's fun to see animals like in the wild!!"</p>
                    <p className='text-end font-bold ~text-xxs/sm absolute bottom-0 right-1/2 mr-2 mb-2'>Meta <br/> Visitor Of ZooSphere</p>
                  </div>
                  <img src="/sample1.jpg" alt="" className='w-1/2 object-cover rounded-r-lg' />
                </div>
                <div className='rounded-xl bg-pattern2 bg-contain w-10/12 ~h-32/60 flex justify-between relative mt-5'>
                  <div className='p-3 w-1/2 text-slate-100'>
                    <h1 className='~text-sm/xl font-bold'>Giga Aquarium</h1>
                    <p className='~text-xs/4xl font-bold'>"Amazing! A lot of fish like in an ocean!"</p>
                    <p className='text-end font-bold ~text-xxs/sm absolute bottom-0 right-1/2 mr-2 mb-2'>Yuki <br/> Visitor Of ZooSphere</p>
                  </div>
                  <img src="/sample2.jpg" alt="" className='w-1/2  rounded-r-lg object-cover' />
                </div>
              </div>

              <div className='w-3/4 h bg-pattern3 bg-contain rounded-lg flex flex-col ~h-121 relative mr-5'>
                <img src="/sample3.webp" alt="" className='rounded-t-lg w-full h-3/4 object-cover'/>
                <div className='text-green-900'>
                  <h1 className='~text-sm/xl font-bold'>Feeding Time</h1>
                  <p className='~text-xs/4xl font-bold'>The elephant is so big and eats a lot!</p>
                  <p className='text-end font-bold ~text-xxs/sm absolute right-0 bottom-0 mr-2 mb-2'>Monji <br/> Visitor of ZooSphere</p>
                </div>
              </div>
          </div>
        </section>

        <section className='lg:h-screen w-full bg-pattern4 relative pt-5'>
          <h1 className='~text-5xl/8xl mb-10 font-bold text-center font-highMount text-slate-900'>Explore ZooSphere</h1>
          <img src="/sample4.webp" alt="" className='lg:w-1/2 sm:w-10/12 mx-auto ~mt-10/20 sm:pb-20 lg:pb-0'/>
          <div className='flex'>
            <div className='bg-pattern6 bg-contain absolute lg:-bottom-3/4 sm:-bottom-24 transform lg:-translate-y-3/4 w-1/2 mx-5 lg:h-1/2 overflow-hidden rounded-lg p-3'>
              <h1 className='font-bold text-green-800 ~text-xs/xl -rotate-3 ~mb-10/20 '>Meet Zoo Member</h1>
              <p className='w-3/4 font-bold text-green-900 ~text-base/3xl'>
                "The forest genius. With his clever mind, he always finds a way to have fun!."</p>
              <img src="/sample6.png" alt="" className='w-1/2 absolute bottom-0 ~-right-10/6' />
            </div>

            <div className='bg-pattern6 bg-contain absolute lg:-bottom-3/4 sm:-bottom-24 right-0 transform lg:-translate-y-3/4 w-1/3 mx-5 lg:h-1/2 overflow-hidden rounded-lg p-3'>
              <p className='w-3/4 font-bold text-green-900 ~text-2xl/4xl'>
                Plan Your Magical Journey Here</p>
              <img src="/sample7.png" alt="" className='lg:w-3/5 sm:w-1/2 absolute bottom-0 -right-6' />
            </div>
          </div>
        </section>

        <section className='h-screen lg:~mb-10/20'>
          <div className='lg:mt-80 sm:mt-40 w-full'>
            <Swiper navigation= {true} loop= {true} autoplay= {{delay: 7000}} thumbs={{ swiper: thumbsSwiper }} modules={[FreeMode, Navigation, Thumbs, Autoplay]} className="mySwiper2">
              {
                news.map((i) => (
                  <SwiperSlide key={i._id}><img src={`http://localhost:5000/${i.filePath}`} alt={i._id}className='mx-auto w-1/2 lg:h-80 sm:h-40 object-cover'/></SwiperSlide>
                ))
              }
            </Swiper>

            <Outlet/>

            <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} modules={[FreeMode, Navigation, Thumbs]} className="mySwiper mt-10 w-1/2">
              {
                news.map((i) => (
                  <SwiperSlide key={i._id}><img src={`http://localhost:5000/${i.filePath}`} alt={i.filePath} className='lg:w-28 sm:w-12 lg:h-20 sm:h-10 object-cover'/></SwiperSlide>
                ))
              }
            </Swiper>
          </div>
          
          <div className='~mt-10/16 text-center'>
            <h1 className='font-bold ~text-xl/3xl'>More Information?</h1>
            <p className='~text-sm/base'>Feel free to have a look at our social media accounts.</p>
            <div className='mt-5 text-5xl text-green-950'>
              <a href='#' className='mx-4 ~text-3xl/6xl'><ion-icon name="logo-facebook"></ion-icon></a>
              <a href='#' className='mx-4 ~text-3xl/6xl'><ion-icon name="logo-instagram"></ion-icon></a>
              <a href='#' className='mx-4 ~text-3xl/6xl'><ion-icon name="logo-twitter"></ion-icon></a>
              <a href='#' className='mx-4 ~text-3xl/6xl'><ion-icon name="logo-youtube"></ion-icon></a>
              <a href='#' className='mx-4 ~text-3xl/6xl'><ion-icon name="logo-linkedin"></ion-icon></a>
            </div>
          </div>
        </section>

        <section className='bg-green-900 lg:h-80 text-white w-full p-5 lg:~mt-20/36'>
          <div className='flex justify-around w-full'>
            <div className='font-bold ~text-sm/lg'>
              <h1>About Us</h1>
              <h1>Customer Service</h1>
            </div>
            <div>
              <h1 className='~text-sm/lg font-bold'>Contact Us</h1>
              <p className='~text-xs/base'>P : +62123456789</p>
              <p className='~text-xs/base'>E : zoosphere@mail.co.id</p>
            </div>
            <div>
              <h1 className='~text-sm/lg font-bold'>HEADQUARTERS</h1>
              <p className='~text-xs/base'>Raven avenue III No XIX, Indonesia</p>
            </div>
          </div>
          <h1 className='text-center mt-5 font-bold ~text-lg/2xl mb-3'>Collaboration Between</h1>
          <div className='flex justify-evenly'>
            <img src="/Logo.webp" alt="" className='lg:w-32 sm:w-20'/>
            <Link to={'login'} className='lg:w-32 sm:w-20 cursor-default'><img src="/NAVA.png" alt=""/></Link>
          </div>
        </section>
        
      </main>
      <Footer/>
    </div>
  )
}

export default App