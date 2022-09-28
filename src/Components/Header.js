import { NavLink } from 'react-router-dom';
import React from 'react'
import mac from './Middle/images/mac.jpg'
import '../App.css'
import $ from "jquery"

$('li').click(function(e){
    e.preventDefault();
   $(this).addClass('actives');
    $(this).siblings().each(function(){
        $(this).removeClass('actives') ;

    });
});
function Navbar() {
   
   

    return (
    
        <div className='Navbar'>
            <div className='right_block'>
               <h1> <NavLink to='/' className="logo">Portfolio</NavLink></h1>
            </div>
            <div className='nav-btn'>
                <div className='div div1'></div>
                <div className='div div2'></div>
                <div className='div div3'></div>
            </div>
            <div className='left_block'>
                <ul id="nav">
                    <li className='actives' >
                        <NavLink  className="anchor" to="/" > Home </NavLink>
                    </li>
                    <li>
                        <NavLink className="anchor " to="/About"> About</NavLink>
                    </li>
                    <li>
                        <NavLink className="anchor" to="/Projects">Projects</NavLink>
                    </li>
                    <li>
                        <NavLink className="anchor " to="/Contact">Contact</NavLink>
                    </li>
                </ul>
                <div className='avatar'>
                    <img src={mac} alt="Profile"/>
                </div>

                
            </div>

        </div>

   
    );

    
}


export default Navbar;

