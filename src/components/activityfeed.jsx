import React from 'react';
import '../styles/activityfeed.css'

export default function ActivityFeed(){
    return(
        <div className="activity">
            <div className="activityheading">
                <div className="activityheadingleft">
                    Activity
                </div>
                <div className="noofappointment">
                    3 appointments on this week
                </div>
            </div>
            <img src="/assets/barchart.png" width="500px" height="100px" alt="barchart" />
        </div>
    )
}