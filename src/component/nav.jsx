import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
    const { addClass, aHome, aAbout, aAnimals, aTicket, aDonate } = props;
    return (
        <nav className={`z-10 flex justify-between fixed w-full ${addClass}`}>
            <img src="/zoosphere/Logo.webp" alt="" className='~w-10/32 h-auto block'/>
            <ul className='flex my-auto ~text-xs/base'>
                <li className={`~mx-1/3 ${aHome}`}> <Link to={'/'}>Home</Link> </li>
                <li className={`~mx-1/3 ${aAbout}`}> <Link to={'/about'}>About</Link> </li>
                <li className={`~mx-1/3 ${aAnimals}`}> <Link to={'/animals'}>Animals</Link> </li>
                <li className={`~mx-1/3 ${aTicket}`}> <Link to={'/ticket'}>Ticket</Link> </li>
            </ul>
            <div className='my-auto mr-5'>
                <a href="#" className='mx-1 ~text-xs/base'> <ion-icon  name="location-outline"></ion-icon> </a>
                <a href="#" className='mx-1 ~text-xs/base'> <ion-icon  name="share-social-outline"></ion-icon> </a>
                <a href="#" className='mx-1 ~text-xs/base'> <ion-icon  name="call-outline"></ion-icon> </a>
            </div>
        </nav>
    )
}
export default Navbar;
