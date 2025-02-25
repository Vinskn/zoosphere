import { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import Navbar from './component/nav';
import Calendar from './component/calendar';

//store
import { addAdultTicket, addChildTicket, updateTotalPrice, setDate } from './redux/slice/ticketSlicer';
import { setAdultPrice, setChildPrice, setDiscountAdult, setDiscountChild } from "./redux/slice/administrator";

const Ticket = () => {
    const [jumlahAdult, setJumlahAdult] = useState(0);
    const [jumlahChild, setJumlahChild] = useState(0);
    const [valError, setValError] = useState('');

    const date = useSelector((s) => s.ticketSlice.date)
    const totalPrice = useSelector((d) => d.ticketSlice.totalPrice)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    //get initial data from db
    useEffect(() => {
        axios.get('http://localhost:5000/api/data/ticketDetail')
        .then ( (res) => {
          const ticketData = res.data[0];
          dispatch(setAdultPrice(ticketData.adultPrice));
          dispatch(setChildPrice(ticketData.kidsPrice));
          dispatch(setDiscountAdult(ticketData.adultDiscount));
          dispatch(setDiscountChild(ticketData.kidsDiscount));
          })
          .catch ((e) => {
            console.log(e);
          })
        }, [])
    
    // insert to global state
    useEffect(() => {
        dispatch(addAdultTicket(jumlahAdult));
    }, [jumlahAdult, dispatch]);
    useEffect(() => {
        dispatch(addChildTicket(jumlahChild));
    }, [jumlahChild, dispatch]);

    // total price logical
    const adultPrice = useSelector((prc) => prc.adminSlice.TPAdult);
    const childPrice = useSelector((prc) => prc.adminSlice.TPChild);
    const adultDiskon = useSelector((dsc) => dsc.adminSlice.DscAdult);
    const childDiskon = useSelector((dsc) => dsc.adminSlice.DscChild);


    useEffect(() => {
        const sum = (adultPrice * jumlahAdult * (1-adultDiskon/100)) + (childPrice * jumlahChild) * (1-childDiskon/100)
        const convertSum = convertCurrency(sum);
        dispatch(updateTotalPrice(convertSum))
        
    }, [jumlahAdult, jumlahChild])

    const handleCheckout = () => {
        if (jumlahAdult === 0 && jumlahChild === 0) {
            setValError('Please select at Least one ticket');
            return;            
        };
        setValError('');
        navigate('form');
    }


    return (
        <div>
            <Navbar addClass = 'text-white bg-slate-950/40' aTicket= 'font-bold'/>
            <img src="/banner4.webp" alt="" className='h-1/2'/>
            <div className='w-full flex justify-around ~mt-2/10 text-center'>
                <div>
                    <h1 className='~text-4xl/7xl text-green-900 font-bold'>
                        <ion-icon name="ticket-outline"></ion-icon>
                    </h1>
                    <h1 className='font-bold ~text-sm/xl'>Entrance Ticket</h1>
                    <p className='text-slate-800 ~text-xs/base'>General Admission</p>
                </div>
                <div>
                    <h1 className='~text-4xl/7xl text-green-900 font-bold'>
                        <ion-icon name="bed-outline"></ion-icon>
                    </h1>
                    <h1 className='font-bold ~text-sm/xl'>Stay Vacation</h1>
                    <p className='text-slate-800 ~text-xs/base'>Hotel & Restaurant</p>
                </div>
            </div>

            <h1 className='font-highMount text-darkGreen ~text-2xl/4xl text-center ~mt-2/10'>General Admission</h1>

            <div className='w-full lg:h-72 sm:h-32 flex justify-around px-5 ~mt-2/5'>
                <img src="/sample8.webp" alt="" className='w-1/4 object-cover rounded-lg'/>
                <img src="/sample10.webp" alt="" className='w-2/5 object-cover object-left rounded-lg'/>
                <img src="/sample9.webp" alt="" className='w-1/4 object-cover rounded-lg'/>
            </div>
            <Outlet/>
            <div className='md:flex md:justify-between ~mt-5/10 '>
                <div className= 'md:w-9/12 p-5'>
                    <h1 className='font-bold ~text-base/xl text-green-950'>Details</h1>
                    <p className='~text-sm/xl'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque debitis perferendis culpa incidunt ad nobis quis veniam sit officiis repellat. quis veniam sit officiis repellat.quis veniam sit officiis repellat.quis veniam sit officiis repellat.quis veniam sit officiis repellat.quis veniam sit officiis repellat.</p>
                    <br />
                    <h1 className='font-bold ~text-base/xl text-green-950'>Inclusion</h1>
                    <ul className='list-disc list-outside ml-5 ~text-sm/xl'>
                        <li>Animal Shows</li>
                        <li>Playground</li>
                        <li>Rides</li>
                        <li>Insurance</li>
                    </ul>
                    <br />
                    <h1 className='font-bold text-base/xl text-green-950'>Notes</h1>
                    <p className='~text-sm/xl'>NON-refundable ticket</p>
                    <p className='~text-sm/xl'> <ion-icon name="time-outline"></ion-icon> Opening Hours: 8AM - 6PM</p>
                    <br />
                    <h1 className='font-bold ~text-lg/2xl text-green-950'>Facilities</h1>
                    <div className='grid grid-cols-3 gap-4 text-center ~text-sm/base'>
                        <p><ion-icon name="wifi-outline"></ion-icon> <br /> Wifi</p>
                        <p><ion-icon name="restaurant-outline"></ion-icon> <br /> Restaurant</p>
                        <p><ion-icon name="gift-outline"></ion-icon> <br /> Souvenir</p>
                        <p><ion-icon name="subway-outline"></ion-icon> <br /> Transport</p>
                        <p><ion-icon name="business-outline"></ion-icon> <br /> Hotel</p>
                        <p><ion-icon name="bag-add-outline"></ion-icon><br /> Paramedic</p>
                        <p><ion-icon name="ice-cream-outline"></ion-icon> <br /> Food Court</p>
                        <p><ion-icon name="golf-outline"></ion-icon> <br /> Golf</p>
                        <p><ion-icon name="game-controller-outline"></ion-icon><br /> Game Center</p>
                        
                    </div>
                </div>
                {/* ----------------------------------- */}
                <div className= 'md:w-1/4 sm:w-full sm:p-2 pt-3'>
                    <Calendar />
                    <div className='flex justify-between p-4 border-b-2 border-green-600'>
                        <h1 className='font-bold ~text-base/xl font-highMount text-green-900 tracking-wider'>Date</h1>
                        <h1 className='~text-base/xl text-green-900'>{date}</h1>
                    </div>
                    
                    <div>
                        <h1 className='font-bold ~text-base/xl font-highMount text-green-900 tracking-wider mt-3 text-center'
                            >Number of Ticket</h1>
                        <div className='grid grid-cols-1 gap-2'>
                            <div className='flex justify-around mt-3'>
                                <div>
                                    <h1 className='text-green-900 ~text-sm/base'>Adult</h1>
                                    <div className='flex space-x-4'>
                                        <h1 className='text-xs bg-red-400'>{`${adultDiskon}%`}</h1>
                                        <h1 className='text-xs line-through decoration-red-700 decoration-2'>{`IDR ${convertCurrency(adultPrice)}/pax`}</h1>
                                    </div>
                                    <h1 className='font-bold text-green-900 ~text-base/xl'>{`IDR ${convertCurrency(adultPrice * (1-adultDiskon/100))}/pax`}</h1>
                                </div>
                                <div className='flex justify-around my-auto'>
                                    <button className='mx-3 text-2xl bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center'
                                        onClick={() => {
                                            jumlahAdult === 0 ? 0 : setJumlahAdult((c)=> c-1)
                                        }}>
                                        <ion-icon name="remove-outline"></ion-icon>
                                    </button>
                                    <h1 className=' border border-green-800 px-3 rounded-lg font-bold text-green-900'>
                                        {jumlahAdult}</h1>
                                    <button className='mx-3 text-2xl bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center' 
                                        onClick={() => setJumlahAdult((c)=> c+1)}> 
                                        <ion-icon name="add-outline"></ion-icon>
                                    </button>
                                </div>
                            </div>
                            
                            <div className='flex justify-around mt-3'>
                                <div>
                                    <h1 className='text-green-900 ~text-sm/base'>Children</h1>
                                    <div className='flex space-x-4'>
                                        <h1 className='text-xs bg-red-400'>{`${childDiskon}%`}</h1>
                                        <h1 className='text-xs line-through decoration-red-700 decoration-2'>{`IDR ${convertCurrency(childPrice)}/pax`}</h1>
                                    </div>
                                    <h1 className='font-bold text-green-900 ~text-base/xl'>{`IDR ${convertCurrency(childPrice * (1-childDiskon/100))}/pax`}</h1>
                                </div>
                                <div className='flex justify-around my-auto'>
                                    <button className='mx-3 text-2xl bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center'
                                        onClick={() => {
                                            jumlahChild === 0 ? 0 : setJumlahChild((c)=> c-1)
                                        }}>
                                        <ion-icon name="remove-outline"></ion-icon>
                                    </button>
                                    <h1 className=' border border-green-800 px-3 rounded-lg font-bold text-green-900'>
                                        {jumlahChild}</h1>
                                    <button className='mx-3 text-2xl bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center'
                                        onClick={() => setJumlahChild((c)=> c+1)}> 
                                        <ion-icon name="add-outline"></ion-icon>
                                    </button>
                                </div>
                            </div>
                            <h1 className='uppercase ~text-xs/sm text-center font-bold text-red-500 underline'>{valError}</h1>
                            <div className='flex justify-around mt-5'>
                                <h1 className='~text-lg/2xl font-highMount text-green-900 tracking-wider'>
                                    Total</h1>
                                <h1 className='font-extrabold ~text-lg/2xl  text-green-900'>
                                    {`IDR ${totalPrice}`}</h1>
                            </div>

                            <button className='mt-3 bg-green-700 py-1 rounded-xl text-white font-bold w-11/12 mx-auto text-center' onClick={handleCheckout}>Check Out</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

const convertCurrency = ( amount ) => {
    const convert = new Intl.NumberFormat('id-ID', {

        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(amount);
    return convert;
}

export { convertCurrency };
export default Ticket;