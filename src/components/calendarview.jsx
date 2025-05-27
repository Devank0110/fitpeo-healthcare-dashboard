import React from 'react';
import '../styles/calendarview.css'
import { IoArrowBack } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import Data from '../data/calendarview.json';
import { FaTooth } from "react-icons/fa";

export default function CalendarView(){
    return(
        <div className="calendarview">
            <div className="calendarheading">
                <div className="calendarmonth">October 2021</div>
                <div className="calendararrows"><IoArrowBack /><IoArrowForward /></div>
            </div>
            <div className="calendar">
                {
                    Data.map(rec=>{
                        return(
                            <div key={rec.id} className="calendarsection">
                                <div className="calday"> {rec.day} </div>
                                <div className="caldate">{rec.date}</div>
                                <div className="caltime">{rec.time1}</div>
                                <div className="caltime">{rec.time2}</div>
                                <div className="caltime">{rec.time3}</div>
                            </div>
                        )
                    })
                }
            </div>
            
            <div className="claendarcard">
                <div className="card1">
                    <div className="calendarcardheading">Dentist <FaTooth /> </div>
                    <div className="calendarcardtime">09:00-11:00</div>
                    <div className="calendarcarddoctor">Dr. Camereon Williamson</div>
                </div>
                <div className="card2">
                    <div className="calendarcardheading">Physiotherapy Appointment <span>💪</span> </div>
                    <div className="calendarcardtime">09:00-11:00</div>
                    <div className="calendarcarddoctor">Dr. Camereon Williamson</div>
                </div>
            </div>
        </div>
    )
}