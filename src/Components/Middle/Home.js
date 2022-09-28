import React from 'react'
import UserData from '../UserData/data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import sidePic from '../Middle/images/sidepic.jpg'
import Footer from '../Footer'

function Home() {
    const currentYr = new Date().getFullYear();
    return (
        UserData.map(data => {
         
            return (
                <div className='div-home'>
                    <div className='Home'>
                        <div className='home-left box box-animations-left'>
                            <div>
                                <h1>Are you looking for  <br/> <tag> freelancer . </tag> </h1>
                                
                                <div className='fav-Icon'>
                                    <FontAwesomeIcon icon="fa-instagram" />
                                    <FontAwesomeIcon icon="" />
                                    <FontAwesomeIcon icon="" />

                                </div>

                            </div>
                        </div>
                        <div className='home-right box'>
                            <div id='sideImg' className='sideImgs'>
                                <img src={sidePic} alt="portfolio pic" />
                                <img src={sidePic} alt="portfolio pic" />
                                <img src={sidePic} alt="portfolio pic" />
                            </div>

                        </div>
                    </div>
                    <Footer Year = {currentYr} />
                </div>
                
            );
        })
    );
}
export default Home;