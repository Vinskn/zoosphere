import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { setup } from "../redux/slice/administrator";

const NavaShield = ({ children }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.adminSlice.username);
    const password = useSelector((state) => state.adminSlice.password);

    useEffect(() => {
        if (user === '1' && password === '2') {
            dispatch(setup({ isLoggedIn: true }));
        } else {
            dispatch(setup({ isLoggedIn: false }));
        }
    }, [dispatch, user, password]);

    return children;
};

export default NavaShield;
