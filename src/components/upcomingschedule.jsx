import React from 'react';
import '../styles/upcomingschedule.css';
import SimpleCard from './simplecard';
import { GiLoveInjection } from "react-icons/gi";
import { FaEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { GiNurseMale } from "react-icons/gi";

export default function UpcomingSchedule(){
    return(
        <div className="upcomingschedule">
            <div className="upcomingscheduleheading">The Upcoming Schedule</div>
            <div className="day">On Thursday</div>
            <div className="simplecard1">
                <SimpleCard checkup={<>Health Checkup Complete &nbsp;&nbsp; <GiLoveInjection/></>} time="11:00 AM" />
                <SimpleCard checkup={<>Health Checkup Complete&nbsp;&nbsp; <FaEye/></>} time="11:00 AM" />
            </div>
            <div className="day">On Saturday</div>
            <div className="simplecard2">
                <SimpleCard checkup={<>Health Checkup Complete&nbsp;&nbsp; <FaHeart/></>} time="11:00 AM" />
                <SimpleCard checkup={<>Health Checkup Complete&nbsp;&nbsp; <GiNurseMale/></>} time="11:00 AM" />
            </div>
        </div>
    )
}