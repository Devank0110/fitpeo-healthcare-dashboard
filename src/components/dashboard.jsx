import React from 'react';
import '../styles/dashboard.css';
import DashboardOverview from './dashboardoverview.jsx';
import ActivityFeed from './activityfeed.jsx';
import CalendarView from './calendarview.jsx';
import UpcomingSchedule from './upcomingschedule.jsx';
import { IoIosArrowDown } from "react-icons/io";

export default function Dashboard(){
    return(
        <div className='dashboard'>
            <div className="leftside">
                <div className='dash-heading'>
                    <div className="dash-heading-left">Dashboard</div>
                    <div className="dash-heading-right">This Week &nbsp; <IoIosArrowDown /></div>
                </div>
                <DashboardOverview />
                <ActivityFeed />
            </div>
            <div className="rightside">
                <CalendarView />
                <UpcomingSchedule />
            </div>
        </div>
    )
}