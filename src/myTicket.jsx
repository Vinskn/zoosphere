import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import QrGenerator from "./component/qrGenerator";

const MyTicket = () => {
    const idTicket = useSelector((data) => data.ticketSlice.ticketID)

    return (
        <div className="~p-5/10">
            <h1 className="text-center font-highMount text-green-950 ~text-3xl/7xl">ENJOY YOUR TRIP!</h1>
            <div className="w-4/5 bg-green-900/20 mx-auto ~mt-5/10 ~p-3/5 rounded-xl">
                <h1 className="text-center font-highMount text-green-950 ~text-xl/3xl">Your Ticket</h1>
                <h1 className="text-center text-slate-700 uppercase ~text-xs/sm font-bold">We'll also send the ticket via Email</h1>
                <div className="~mt-3/8 w-2/3 mx-auto ~p-1/3 flex flex-col">
                    {
                        idTicket.map( i => (
                            <div className="bg-yellow-500/30 rounded-xl flex justify-between ~mb-3/6">
                                <div className="~mr-1/2 border-r-2 border-dashed border-green-900 my-auto ~p-1/3 lg:w-2/3 text-green-950">
                                    <div className="w-4/5 mx-auto ">
                                        <QrGenerator id={i.id}></QrGenerator>
                                        <h1 className="~text-xxs/sm text-center">{`${i.type} ~ ${i.id}`}</h1>
                                    </div>
                                </div>
                                <img src="/TicketImage.webp" alt="ticket" className="w-2/3 rounded-r-xl object-cover"/>
                            </div>
                        ))
                    }                    
                </div>
            </div>
        <a href="/"> <button className="bg-green-400 hover:bg-green-800 hover:text-white flex justify-center w-1/4 mx-auto ~mt-3/7 ~py-0/1 ~px-2/5 ~text-xs/base rounded-lg font-bold"
            >Home</button> </a>
        </div>
    )
}

export default MyTicket;