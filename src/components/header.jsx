import React from 'react';
import '../styles/header.css'

export default function Header(){
    return (
        <header className="header">
            <div className="left">
                <b>
                    <a href="" className="logo">
                        <span className='health'>Health</span>
                        <span className='care'>care.</span>
                    </a>
                </b>
            </div>
            <div className="mid">
                <form>
                    <div className="search-bar">
                        <span className='search-icon'><i class="fa-solid fa-magnifying-glass"></i></span>
                        <input type='text' placeholder='Search' required className='input' />
                    </div>
                </form>
                
                <div>
                    <i class="fa-solid fa-bell bell"></i>
                </div>
            </div>
            <div className="right">
                <button className="user"><i class="fa-solid fa-user-tie"></i></button>
                <button className="plus"><i class="fa-solid fa-plus"></i></button>
            </div>
        </header>
    )
}