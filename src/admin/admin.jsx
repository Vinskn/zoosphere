import { useDispatch, useSelector } from "react-redux";
import { useRef, useState, useEffect     } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { setAdultPrice, setChildPrice, setDiscountAdult, setDiscountChild } from "../redux/slice/administrator";


const Administrator = () => {
    const [notifTicketUpdate, setNotifTicketUpdate] = useState();
    const [notifAnimalManagement, setNotifAnimalManagement] = useState('');

    const adultPrice = useRef();
    const childPrice = useRef();
    const adultDiscount = useRef();
    const childDiscount = useRef();

    // ticket price management
    const handleTicketUpdate = async() => {
        const updateData = {};

        //validation
        const TadultPrice = Number(adultPrice.current.value);
        if (!isNaN(TadultPrice) && TadultPrice > 0) {
            updateData.adultPrice = TadultPrice;
        }
        
        const TchildPrice = Number(childPrice.current.value);
        if (!isNaN(TchildPrice) && TchildPrice > 0) {
            updateData.kidsPrice = TchildPrice;
        }

        const TadultDiscount = Number(adultDiscount.current.value);
        if (!isNaN(TadultDiscount) && TadultDiscount >= 0) {
            updateData.adultDiscount = TadultDiscount;
        }

        const TchildDiscount = Number(childDiscount.current.value);
        if (!isNaN(TchildDiscount) && TchildDiscount >= 0) {
            updateData.kidsDiscount = TchildDiscount;
        }

        try {
            await axios.patch('http://localhost:5000/api/data/ticketDetail/675e8f4f9a2689da24129289', updateData)
            setNotifTicketUpdate('Ticket Updated')
        } 
        catch (e) {
            console.log(e);
        }
        
        
        
    }

    // get data ticket order from db (ticket order)
    const [orderData, setOrderData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/api/data/ticketData')
            .then((res) => {
                setOrderData(res.data);            
            })
            .catch((e) => {
                console.error(e);
            })
    }, []);


    // animals management
    const animalImg = useRef();
    const animalName = useRef();
    const animalDesc = useRef();

    const handleAnimalsManagement = async() => {
        setNotifAnimalManagement('');
        const formData = new FormData();
        formData.append('image', animalImg.current.files[0])
        formData.append('key', (animalName.current.value).toLowerCase());
        formData.append('name', animalName.current.value)
        formData.append('description', animalDesc.current.value)
        // debug
        // for (const pair of formData.entries()) {
        //     console.log(`${pair[0]}: ${pair[1]}`);
        // }

        try {
            await axios.post('http://localhost:5000/api/data/animalData', formData, {
                headers: {
                    'Content-Type':'multipart/form-data'
                }
            })
            setNotifAnimalManagement('Animal Data Uploaded')
            
        } 
        catch (e) {
            console.log(e.message);            
        }

        animalImg.current.value = null
        animalName.current.value = ''
        animalDesc.current.value = ''
        
    }    


    // news management
    const newsSrc = useRef();
    const [notifNews, setNotifNews] = useState();
    
    const handleUpdateNews = async() => {
        const formData = new FormData;
        formData.append('image', newsSrc.current.files[0]);

        try {
            await axios.post('http://localhost:5000/api/data/frontNews', formData, {
                headers: {
                    'Content-Type':'multipart/form-data'
                }
            })
            setNotifNews('News Uploaded')
            newsSrc.current.value = '';      
        } 
        catch (e) {
            console.log(e.message);            
        }
    }

    return (
        <div className="p-3">
            <Link to={'/'}><ion-icon name="home-outline"></ion-icon></Link>
            <h1 className="text-center ~text-lg/2xl font-highMount text-green-950">Administrator Dashboard</h1>
            <h1 className="text-center ~text-sm/xl text-green-950">Welcome, Admin</h1>
            
            <div className="w-11/12 bg-yellow-500/30 mx-auto mt-10 rounded-xl p-5 mb-4">
                <h1 className="text-center ~text-lg/2xl font-highMount text-green-950">Ticket Price Management</h1>
                <div className="flex justify-around text-center">
                    <div className="flex flex-col">
                        <h1>Adult Price</h1>
                        <input type="number" ref={adultPrice}/>
                        <input className="w-1/2 mx-auto mt-3 text-center" placeholder="Discount" type="number" ref={adultDiscount}/>
                        
                    </div>
                    <h1 className="mt-3">{notifTicketUpdate}</h1>
                    <div className="flex flex-col">
                        <h1>Child Price</h1>
                        <input type="number" ref={childPrice}/>
                        <input className="w-1/2 mx-auto mt-3 text-center" placeholder="Discount" type="number" ref={childDiscount}/>
                    </div>
                </div>
                <button onClick={handleTicketUpdate} className="flex mx-auto bg-green-400 ~py-0/1 ~px-5/10 rounded-xl ">Update</button>
            </div>

            <div className="w-11/12 bg-green-500/30 mx-auto mt-10 rounded-xl p-5 mb-4">
                <h1 className="text-center ~text-lg/2xl font-highMount text-green-950">Ticket Order</h1>
                <div className="flex flex-wrap gap-4 mt-2">
                    {
                        orderData.map((order) => (
                            <div key={order._id} className="flex flex-wrap gap-4">
                              {order.ticketID.map((ticket) => <h1 key={ticket.id}>{ticket.id}</h1>)}
                            </div>
                          ))
                    }
                </div>
            </div>

            <div className="w-11/12 bg-teal-600/30 mx-auto mt-10 rounded-xl p-5 mb-4">
                <h1 className="text-center ~text-lg/2xl font-highMount text-green-950">Animals Management</h1>
                <h1 className="text-center text-sm text-green-900">{notifAnimalManagement}</h1>
                <div className="flex flex-col text-center mx-auto">
                    <h1 className="text-center mt-4 font-bold">File Source</h1>
                    <input className="w-1/2 flex mx-auto" type="file" ref={animalImg}/>
                </div>
                <div>
                    <h1 className="text-center mt-4 font-bold">Animal Name</h1>
                    <input className="w-1/2 flex mx-auto p-1" ref={animalName}/>
                </div>
                <div>
                    <h1 className="text-center mt-4 font-bold">Description</h1>
                    <textarea className="w-1/2 flex mx-auto text-sm p-1" ref={animalDesc}/>
                </div>
                <button onClick={handleAnimalsManagement} className="flex mx-auto bg-green-500 px-5 mt-4 rounded-lg hover:bg-green-700">Add Image</button>
            </div>

            <div className="w-11/12 bg-sky-700/40 mx-auto mt-10 rounded-xl p-5 mb-4">
                <h1 className="text-center ~text-lg/2xl font-highMount text-green-950">News Management</h1>
                <h1 className="text-center text-sm text-green-900">{notifNews}</h1>
                <div className="flex flex-col text-center mx-auto">
                    <h1 className="text-center mt-4 font-bold">File Source</h1>
                    <input className="w-1/2 flex mx-auto" type="file" ref={newsSrc}/>
                </div>
                <button onClick={handleUpdateNews} className="flex mx-auto bg-green-500 px-5 mt-4 rounded-lg hover:bg-green-700">Add News</button>
            </div>

        </div>
    )
}


export default Administrator;