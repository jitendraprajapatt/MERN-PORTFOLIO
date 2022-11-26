import { NavLink } from 'react-router-dom';
import React, { useState } from 'react'
import './Header.css'


function Navbar() {
    const [isMobile, setMobile] = useState(false);

    return (

        <div className='Navbar'>
            <div className='logo'>
                <h1 >
                    {/*<NavLink to='/' className="">Portfolio</NavLink>*/}
                    PORTFOLIO
                </h1>
            </div>
            <nav>
                <div id='mobile'>

                    <i onClick={() => { setMobile(!isMobile ? true : false); }} className={isMobile ? 'fa-solid fa-circle-xmark' : 'fa-solid fa-bars'}></i>
                </div>
                <ul onClick={() => setMobile(false)} className={isMobile ? 'mobile-ul' : ''}>
                    <li  >
                        <NavLink className="anchor" to="/" > Home </NavLink>
                    </li>
                    <li>
                        <NavLink className="anchor" to="/About"> About</NavLink>
                    </li>
                    <li>
                        <NavLink className="anchor" to="/Projects">Projects</NavLink>
                    </li>
                    <li>
                        <NavLink className="anchor" to="/Contact">Contact</NavLink>
                    </li>
                </ul>


            </nav>



        </div>


    );


}


export default Navbar;

