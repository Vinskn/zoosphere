import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { setName, setEmail, setContact } from "../redux/slice/ticketSlicer";

const FormTicket = () => {

    const name = useRef();
    const email = useRef();
    const contact = useRef();

    const [errForm, setErrForm] = useState('');

    const navigate = useNavigate();

    const handleBack = ((e => {
        navigate('/ticket')
    }))

    useEffect(() => {
        if (window.innerWidth < 768) {
            window.scrollTo({
                top: 300,
                behavior: "smooth"
            });
        }
    }, []);

    const dispatch = useDispatch();
    const handleForm = (e) => {
        e.preventDefault();

        let nameValue = name.current.value;
        let emailValue = email.current.value;
        let contactValue = contact.current.value;

        if (!nameValue || !emailValue || !contactValue) {
            setErrForm('Please input all the information');
            return;
        }
        setErrForm('');
        
        

        dispatch(setName(nameValue));
        dispatch(setEmail(emailValue));
        dispatch(setContact(contactValue));

        // Clear inputs
        name.current.value = '';
        email.current.value = '';
        contact.current.value = '';

        navigate('/ticket/details');
    };



    return (
        <div className="absolute z-10 rounded-xl bg-gradient-to-r from-green-700/30 to-green-900/40  w-4/5 left-1/2 transform -translate-x-1/2 lg:h-1/2 backdrop-blur-md mt-10">
            <button className="~text-sm/xl flex justify-start items-center mt-2 ml-2 hover:bg-slate-300  rounded-full absolute ~p-0/3" onClick={handleBack}>
                <ion-icon name="arrow-back-outline"></ion-icon></button>
            <div className="p-5 lg:mt-10">
                <h1 pointer className="text-white font-highMount text-center ~text-xl/4xl ~mb-1/4">
                    Provide Your Contact Details</h1>

                <div className="flex flex-col w-4/5 mx-auto">
                    <input className="my-2 ~p-1/2 ~text-xs/base rounded-xl " type="text" placeholder="Your Full Name" ref={name}/>
                    <div className="my-2 flex justify-between">
                        <input className="~p-1/2 ~text-xs/base rounded-xl w-1/2 mr-1 " type="email" placeholder="Your Email" ref={email}/>
                        <input className="~p-1/2 ~text-xs/base rounded-xl w-1/2" type="number" placeholder="Contact Number" ref={contact}/>
                    </div>
                    <h1 className="uppercase ~text-xs/sm text-center font-bold text-red-500 underline">{errForm}</h1>
                    <button className="~px-5/20 ~py-1/2 bg-green-400 w-4/5 mx-auto mt-5 hover:bg-green-900 hover:text-white rounded-xl font-bold ~text-sm/lg" onClick={handleForm}>
                        Next</button>
                </div>

            </div>
        </div>
    )
}

export default FormTicket;