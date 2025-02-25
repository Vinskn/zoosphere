import Navbar from './component/nav';
import Footer from './component/footer';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

const Animals = () => {
    const [animalData, setAnimalData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false)
    const searchData = useRef()

    useEffect(() => {
        setLoading(true)
        axios.get(`http://localhost:5000/api/data/animalData/${searchTerm}`)
            .then((res) => {
                setAnimalData(res.data);
                setLoading(false)
            })
            .catch((e) => console.log(e) && setLoading(false)
            )
    }, [searchTerm])

    const handleSearch = () => {
        const searchValue = searchData.current.value;
        setSearchTerm((searchValue).toLowerCase());        
    }

    return(
        <div>
            <Navbar addClass = 'text-white bg-slate-950/40' aAnimals= 'font-bold'/>
            <img src="/banner2.webp" alt=""/>
            <h1 className='~text-3xl/5xl font-bold font-highMount text-center mt-5 text-green-950'
                >Meet Family Members</h1>
            <input name="" id="search" placeholder='Search: Try Komodo' ref={searchData} onChange={handleSearch}
                className='relative inset-x-1/2 transform -translate-x-1/2 mt-3 w-1/4 px-2'/>
            <div className='relative left-1/2 transform -translate-x-1/2 mt-3 flex justify-around w-1/2'>
                <a href="#" className='border ~text-sm/base font-bold border-green-900 w-1/2 mx-1 text-center shadow-lg rounded-lg py-1 bg-yellow-300'>
                    <button className='w-full h-full px-3' onClick={() => setSearchTerm('elephant')}>Elephant</button>
                </a>
                <a href="#" className='border ~text-sm/base font-bold border-green-900 w-1/2 mx-1 text-center shadow-lg rounded-lg py-1 bg-yellow-300'>
                    <button className='w-full h-full px-3' onClick={() => setSearchTerm('horse')}>Horse</button>
                </a>
                <a href="#" className='border ~text-sm/base font-bold border-green-900 w-1/2 mx-1 text-center shadow-lg rounded-lg py-1 bg-yellow-300'>
                    <button className='w-full h-full px-3' onClick={() => setSearchTerm('monkey')}>Monkey</button>
                </a>
            </div>
            <div className='w-full mt-10 flex flex-wrap justify-center gap-3 ~mb-5/10'>
                {
                    loading ? (<h1>Loading</h1>) : 
                    Array.isArray(animalData) && animalData.length > 0 ? (
                        animalData.map(i => (
                            <div key={i._id} className='group cardDiv'>
                                <img src={`http://localhost:5000/${i.filePath}`} alt={i.additionalData.name} className='cardImage'/>
                                <div className='cardInfo '>
                                    <h2 className='cardTitle'>{i.additionalData.name}</h2>
                                    <p className='~text-xs/base'>{i.additionalData.description}</p>
                                </div>
                            </div>
                    )
                )) : (<h1>No</h1>)
                }
                
            </div>

            <Footer></Footer>
        </div>
    )
}

export default Animals;