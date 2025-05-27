import React from 'react';
import Data from '../data/healthstatuscard.json';
import '../styles/healthstatuscards.css'
import { FaArrowRightLong } from "react-icons/fa6";

export default function HealthStatusCards(){
    return(
        <div className="status">
            {
                Data.map(rec=>{
                    return(
                        <div className="statuscard" key={rec.id}>
                            <div className="bodypartheading">
                                <img src={rec.url} height="30px" width="30px" alt={rec.part} style={{paddingRight: '10px'}} />
                                {rec.part}
                            </div>
                            <div className="statusdate">
                                {rec.Date}
                            </div>
                            <div style={{
                                width: '120px',
                                height: '10px',
                                backgroundColor: '#dfe1ec',
                                borderRadius: '15px'
                            }}>
                                <div style={{
                                    width: `${rec.progress}%`,
                                    backgroundColor: `${rec.color}`,
                                    height: '100%',
                                    borderRadius: '15px'
                                }} >

                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <div className="details">Details&nbsp; <FaArrowRightLong/> </div>
        </div>
    )
}