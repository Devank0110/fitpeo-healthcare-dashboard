import React from 'react';
import '../styles/dashboardoverview.css';
import AnatomySection from './anatomysection.jsx';
import HealthStatusCards from './healthstatuscards.jsx';

export default function DashboardOverview(){
    return(
        <div className="overview">
            <AnatomySection />
            <HealthStatusCards />
        </div>
    )
}