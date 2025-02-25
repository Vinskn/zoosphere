import { createSlice } from "@reduxjs/toolkit";

const ticketSlice = createSlice({
    name: 'ticket',
    initialState: {
        adultTicket: 0,
        childTicket: 0,
        totalPrice: 0,
        date: '',
        name: '',
        email: '',
        contact: 0,
        ticketID: [],
    },
    reducers: {
        addAdultTicket: (state, action) => {
            state.adultTicket = action.payload;
        },
        addChildTicket: (state, action) => {
            state.childTicket = action.payload;
        },
        updateTotalPrice: (state, action) => {
            state.totalPrice = action.payload;
        },
        setDate: (state, action) => {
            state.date = action.payload;
        },
        setName: (state, action) => {
            state.name = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setContact: (state, action) => {
            state.contact = action.payload;
        },
        addTicketID: (state, action) => {
            state.ticketID.push(action.payload);
        },
    }
})

export const { addAdultTicket, addChildTicket, updateTotalPrice, setDate, setName, setEmail, setContact, addTicketID } = ticketSlice.actions;
export default ticketSlice.reducer;