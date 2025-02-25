import React, { useState, useEffect } from "react";
import Calendar from 'react-calendar';

import { useSelector, useDispatch } from 'react-redux';
import { addAdultTicket, addChildTicket, updateTotalPrice, setDate } from '../redux/slice/ticketSlicer';

const tanggal = () => {
    const [value, setValue] = useState(new Date());
    const today = new Date();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setDate(value.toLocaleDateString()))
    }, [value])
    return (
        <Calendar
        onChange={setValue}
        value={value}
        className="no-underline-abbr react-calendar mx-auto text-green-900 md:w-11/12 sm:w-1/2 bg-yellow-500 rounded-lg p-3 text-center ~text-sm/base"
        
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
            // Tanggal terpilih
            if (value?.toDateString() === date.toDateString()) {
                return 'bg-blue-500 text-white rounded-lg font-bold';
            }
            // Tanggal hari Minggu
            if (date.getDay() === 0) {
              return 'text-red-500'; 
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
      
    )
}

export default tanggal;