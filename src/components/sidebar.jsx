import React from 'react';
import '../styles/sidebar.css';
import { IoGrid } from "react-icons/io5";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { FaCalendarAlt } from "react-icons/fa";
import { FiPlusSquare } from "react-icons/fi";
import { FaCommentDots } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { PiChartLineFill } from "react-icons/pi";

export default function Sidebar(){
    return(
        <div className='sidebar'>
            <div className="top">
                <div className="general">General</div>
                <div className="elem active"><IoGrid className='icon' /><span>Dashboard</span></div>
                <div className="elem"><HiMiniArrowsUpDown className='icon' /><span>History</span></div>
                <div className="elem"><FaCalendarAlt className='icon' /><span>Calendar</span></div>
                <div className="elem"><FiPlusSquare className='icon'/><span>Appointments</span></div>
                <div className="elem"><PiChartLineFill className='icon'/><span>Statistics</span></div>
                <div className="tools general">Tools</div>
                <div className="elem"><FaCommentDots className='icon'/><span>Chat</span></div>
                <div className="elem"><IoCall className='icon' /><span>Support</span></div>
            </div>
            <div className="bottom">
                <div className="setting elem">Setting</div>
            </div>   
        </div>
    )
}