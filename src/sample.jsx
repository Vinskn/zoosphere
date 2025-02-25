import React, { useState } from "react";
import Calendar from 'react-calendar';

import { useSelector, useDispatch } from 'react-redux';
import { addAdultTicket, addChildTicket, updateTotalPrice, setDate } from './redux/slice/ticketSlicer';

// import 'react-calendar/dist/Calendar.css';
const Tes = () => {
  const [value, setValue] = useState(new Date());
  const today = new Date();
  let tes = value.toLocaleDateString()

  const tes1 = useSelector((i) => i.ticketSlice.adultTicket)
  const tes2 = useSelector((i) => i.ticketSlice.childTicket)
  

  return (
    <div className="w-full h-full">
      <div className="group relative rounded-lg m-20 bg-black ~w-64/96">
        <img src="/zoosphere/sample1.jpg" alt="" className="rounded-lg ~w-64/96"/>
        <div className="absolute inset-0 text-white bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, pariatur.</p>
        </div>
      </div>

      <div>
      <Calendar
        onChange={setValue}
        value={value}
        className="react-calendar mx-auto text-green-900 w-72 bg-yellow-500 rounded-lg p-3 text-center"
        
        // Mendisable tanggal yang sudah lewat
        tileDisabled={({ date, view }) =>
          view === 'month' && date < today.setHours(0, 0, 0, 0)
        }

        // Custom styling pada tanggal
        tileClassName={({ date, view }) => {
          if (view === 'month') {
            // Tanggal terlewat
            if (date < today.setHours(0, 0, 0, 0)) {
              return 'text-slate-300 cursor-not-allowed'; 
            }
            // Tanggal hari Minggu
            if (date.getDay() === 0) {
              return 'text-red-500'; 
            }
            // Tanggal terpilih
            if (value?.toDateString() === date.toDateString()) {
              return 'bg-blue-500 text-white rounded-lg font-bold';
            }
            return 'hover:bg-blue-100 hover:text-blue-800 hover:rounded-lg';
          }
          return 'bg-transparent';
        }}

        navigationClassName="react-calendar__navigation react-calendar__navigation__label"
        monthViewWeekdaysClassName="react-calendar__month-view__weekdays"
        prevLabel= {<span className="text-2xl mx-1 font-bold">‹</span>}
        nextLabel= {<span className="text-2xl mx-1 font-bold">›</span>}
        prev2Label= {<span className="text-2xl mx-1 font-bold">‹‹</span>}
        next2Label= {<span className="text-2xl mx-1 font-bold">››</span>}
      />
        <h1>{tes}</h1>
      </div>
      
      <h1>{tes1}</h1>
      <h1>{tes2}</h1>
    </div>
  )
}

export default Tes;