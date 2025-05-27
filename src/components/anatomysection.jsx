import React from 'react';
import '../styles/anatomysection.css'

import { HiMiniMagnifyingGlassPlus } from "react-icons/hi2";

export default function AnatomySection(){
    return(
        <div className="anatomy">
            <div className="anatomy-content">
                <img src="\assets\body.jpg" alt="Logo" className='human' width="124" height="300" />
                <HiMiniMagnifyingGlassPlus className='magnify' />
                
            </div>
            <div className="label1">&nbsp;❤️ Healthy Heart</div>
            <div className="label2">&nbsp;🦵 Healthy Leg</div>
        </div>
    )
}

// src\assets\body.jpg