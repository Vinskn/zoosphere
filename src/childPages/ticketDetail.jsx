import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import random from "crypto-random-string"

import { addTicketID } from "../redux/slice/ticketSlicer"

const TicketDetail = () => {

    const name = useSelector((name) => name.ticketSlice.name);
    const adultAmount = useSelector((adult) => adult.ticketSlice.adultTicket);
    const childAmount = useSelector((child) => child.ticketSlice.childTicket);
    const totalPrice = useSelector((price) => price.ticketSlice.totalPrice);
    const date = useSelector((date) => date.ticketSlice.date);
    const email = useSelector((email) => email.ticketSlice.email);
    const contact = useSelector((contact) => contact.ticketSlice.contact);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (() => {
        // loop id tickets adult
        for (let i = 0; i < adultAmount; i++){
            let id = `ad-${random({length: 6})}`;
            dispatch(addTicketID({
                type: 'Adult',
                id,
            }));
            
        }
        
        // loop id tickets child
        for (let i = 0; i < childAmount; i++){
            let id = `ch-${random({length: 6})}`;
            dispatch(addTicketID({
                type: 'Kids',
                id,
            }));
            
        }

        navigate('/ticket/payment')
    })

    return (
        <div className="absolute z-10 rounded-xl bg-gradient-to-r from-green-700/30 to-green-900/40  w-1/2 ~p-2/4 left-1/2 transform -translate-x-1/2 lg:h-1/2 backdrop-blur-md mt-10">
            <h1 className="text-center text-green-950 ~text-xl/4xl font-highMount border-b border-green-800 ~mb-2/4">
                Ticket Details</h1>
           <div className="w-2/3 mx-auto">
                <h1 className="text-green-950 ~text-base/lg">{`Booker Name : ${name}`}</h1>
                <h1 className="text-green-950 ~text-base/lg">
                    {`Ticket For :  ${date}`}
                </h1>
                <div className="flex justify-around">
                    <h1 className="text-green-950 ~text-base/lg">{`Adult Tickets : ${adultAmount}`}</h1>
                    <h1 className="text-green-950 ~text-base/lg">{`Child Tickets : ${childAmount}`}</h1>
                </div>
                <h1 className="text-green-950 ~text-base/lg text-center font-bold ~mt-1/3 border-t-2 border-green-800 border-dashed">
                    Contact Information</h1>
                <h1 className="text-green-950 ~text-base/lg">
                    {`Email : ${email}`}
                </h1>
                <div>
                    <h1 className="text-green-950 ~text-base/lg">{`Contact Number : ${contact}`}</h1>
                </div>
                
           </div>
            <div className="flex justify-between border-t border-green-800">
                <h1 className="text-center text-green-950 ~mt-1/3 font-bold ~text-base/xl">{`IDR ${totalPrice}`}</h1>
                <button onClick={handleSubmit} className="~px-5/12 ~py-0/2 rounded-xl bg-emerald-700 hover:bg-emerald-800 ~mt-1/3">Checkout</button>
            </div>
        </div>
    )
}


export default TicketDetail;