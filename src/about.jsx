import Navbar from './component/nav';
import Footer from './component/footer';

const About = () => {
    return (
        <div className='w-full'>
            <Navbar addClass = 'text-white bg-slate-950/40' aAbout= 'font-bold'/>

            <img src="/banner.webp" alt="" />
            <div className='w-4/5 mx-auto mt-10 h-auto border-t-2 border-green-800 border-dashed flex'>
                <div className='mt-4 w-2/3'>
                    <h1 className='font-highMount text-darkGreen ~text-2xl/4xl'>ZooSphere Animal Conservation</h1>
                    <p className='text-green-900 font-bold ~text-sm/xl font-mountReal'>
                        Zoosphere is a place where education meets entertainment. Through engaging exhibits and educational programs, we inspire visitors to learn about the natural world and develop a deep appreciation for wildlife.
                    </p>
                </div>
                <img src="/genkan.webp" alt="" className='w-1/2 mt-4 ml-3 object-cover'/>
            </div>
            <div className='w-4/5 mx-auto mt-10 h-auto border-t-2 border-green-800 border-dashed flex mb-10'>
            <img src="/history.webp" alt="" className='w-1/2 mr-3 mt-4 object-cover'/>
            <div className='mt-4 w-2/3'>
                    <h1 className='font-highMount text-darkGreen ~text-2xl/4xl'>Short History</h1>
                    <p className='text-green-900 font-bold ~text-sm/xl font-mountReal'>
                        Zoosphere was founded in 1900 with a vision to create a place where people could reconnect with nature and understand the importance of wildlife conservation. Inspired by concern over endangered species our founders were determined to build a zoo that was not only a place for recreation but also a center for education and conservation.
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default About;