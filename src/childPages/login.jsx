import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { login } from "../redux/slice/administrator";
import NavaShield from "../admin/navaShield";

const Login = () => {
    const name = useRef();
    const password = useRef();
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        const fName = name.current.value;
        const fPassword = password.current.value;
        dispatch(login({
            username: fName,
            password: fPassword,
        }));
        navigate('/admin');
    }


    return (
        <div className="absolute z-10 rounded-xl bg-yellow-400/30 ~p-2/4 w-4/5 left-1/2 transform -translate-x-1/2 lg:h-1/2 backdrop-blur-md mt-10">
            <Link to={'/'} className="~text-xl/2xl"><ion-icon name="close-outline"></ion-icon></Link>
            <h1 className="text-center font-highMount text-green-950 ~text-xl/4xl">Administrator Area</h1>
            <h1 className="uppercase text-center ~text-xs/base">restricted area! If you're not administrator, please return</h1>
            <div className="flex flex-col w-1/2 mx-auto ~mt-4/7">
                <input type="text" ref={name} className="mt-3 ~py-0/1 ~px-1/3 rounded-lg bg-transparent"/>
                <input type="password" ref={password} className="mt-3 ~py-0/1 ~px-1/3 rounded-lg bg-transparent"/>
                <button className="hover:bg-green-600 hover:text-black ~py-0/1 rounded-xl w-2/3 ~mt-2/4 text-transparent mx-auto" onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}

export default Login;