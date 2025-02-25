import { configureStore } from "@reduxjs/toolkit";

// import slicer
import ticketSlicer from './slice/ticketSlicer'
import admin from './slice/administrator'

const store = configureStore({
    reducer: {
        ticketSlice: ticketSlicer,
        adminSlice: admin,
    }
})

export default store;