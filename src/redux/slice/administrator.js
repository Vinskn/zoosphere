import { createSlice } from "@reduxjs/toolkit";

const admin = createSlice({
    name: 'admin',
    initialState: {
        isLoggedIn: false,
        username: '',
        password: '',
        TPAdult: 0,
        TPChild: 0,
        DscAdult: 0,
        DscChild: 0,
    },
    reducers: {
        login: (state, action) => {
            state.username = action.payload.username;
            state.password = action.payload.password;
        },
        setup: (state, action) => {
            state.isLoggedIn = action.payload.isLoggedIn;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.username = '';
            state.password = '';
        },
        setAdultPrice: (state, action) => {
            state.TPAdult = action.payload;
        },
        setChildPrice: (state, action) => {
            state.TPChild = action.payload;
        },
        setDiscountAdult: (state, action) => {
            state.DscAdult = action.payload;
        },
        setDiscountChild: (state, action) => {
            state.DscChild = action.payload;
        }
    }
})

export const { login, logout, setup, setAdultPrice, setChildPrice, setDiscountAdult, setDiscountChild  } = admin.actions;

export default admin.reducer;