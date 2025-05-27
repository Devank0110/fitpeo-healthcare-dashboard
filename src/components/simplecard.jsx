import React from 'react';
import '../styles/simplecard.css'

export default function SimpleCard(props){
    return(
        <div className="simplecard">
            <div className="">{props.checkup}</div>
            <div className="">{props.time}</div>
        </div>
        
    )
}