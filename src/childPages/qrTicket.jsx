import { useSelector } from "react-redux";
import QrGenerator from "../component/qrGenerator";
import randomizer from "../component/randGenerator"
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const QrTicket = () => {
    const navigate = useNavigate();
    const [payID, setPayID] = useState('');
    useEffect(() => {
        const random = randomizer(8);
        setPayID(random);
    },[])
    const totalPrice = useSelector((price) => price.ticketSlice.totalPrice)

    // data for upload to db
    const numAdult = useSelector((num) => num.ticketSlice.adultTicket);
    const numChild = useSelector((num) => num.ticketSlice.childTicket);
    const name = useSelector((name) => name.ticketSlice.name);
    const date = useSelector((date) => date.ticketSlice.date);
    const email = useSelector((email) => email.ticketSlice.email);
    const contact = useSelector((contact) => contact.ticketSlice.contact);
    const ticketID = useSelector((id) => id.ticketSlice.ticketID);
    const total = useSelector((total) => total.ticketSlice.totalPrice);

    const data = {
        name,
        date,
        contact: {
            contact,
            email
        },
        ticketQuantity: {
            numAdult,
            numChild
        },
        ticketID,
        total
    }

    const handleRedirect = () => {
        axios.post('http://localhost:5000/api/data/ticketData', data)
            .then(res => {
                console.log('Berhasil');
            })
            .catch(e => {
                console.log('Gagal');
                console.error(e);
            })
        navigate('/myTicket');
    }

    return (
        <div className="absolute z-10 rounded-xl bg-green-500/30 ~p-2/5 w-1/3 left-1/2 transform -translate-x-1/2 lg:h-3/4 backdrop-blur-md mt-10">
            <h1 className="text-center font-highMount text-green-900 ~text-xl/4xl mb-5">Payment</h1>
            <div className="w-32 flex justify-center mx-auto">
                <QrGenerator id={payID}/>
            </div>
            <h1 className="text-center font-bold ~text-sm/base ~mt-1/2">{payID}</h1>
            <h1 className="font-bold ~text-xl/3xl mt-3 text-center text-green-950">{`IDR ${totalPrice}`}</h1>
            <p className="text-slate-500 text-center ~text-xs/sm">Scan or Enter the Code</p>
            <p className="~mt-5/10 text-center ~text-xs/sm text-slate-600">If Page not redirecting</p>
            <button onClick={handleRedirect} className="text-center ~text-xs/base flex justify-center bg-green-200/40 px-2 ~py-0/1 rounded-lg w-2/3 mx-auto ~mt-2/3">I have do the payment</button>
        </div>
    )
}

export default QrTicket;