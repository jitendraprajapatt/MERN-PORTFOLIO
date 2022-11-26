import React from 'react'
import '../App.css'
function Footer(props){
    return(
       <div className='footer'>
        <div>
            <p className='yr-tag'>Copyright : {props.Year}</p>
        </div>
       </div>
    );
}
export default Footer ;