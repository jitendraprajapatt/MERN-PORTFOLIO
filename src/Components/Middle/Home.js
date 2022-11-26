import React from 'react'
import UserData from '../UserData/data.json'
import sidePic from '../Middle/images/sidePic.jpg'

import '../Middle/Home.css'

function Home() {
    
    return (
        UserData.map(data => {

            return (
                <div>

              

                <div className='home'>
                    <div className='home-left'>
                        <div>
                            <h1>Are you looking for  <br /> <tag> freelancer . </tag> </h1>

                            <div className='fav-Icon'>
                                <a href="https://www.youtube.com/watch?v=gY5sGvq-8h8" target="blank"><i class="fa-brands fa-instagram"></i></a>
                                <a href="https://www.youtube.com/watch?v=gY5sGvq-8h8" target="blank"><i class="fa-brands fa-facebook"></i></a>
                                <a href="https://www.youtube.com/watch?v=gY5sGvq-8h8" target="blank"><i class="fa-brands fa-linkedin"></i></a>
                                <a href="https://www.youtube.com/watch?v=gY5sGvq-8h8" target="blank"><i class="fa-brands fa-youtube"></i></a>
                                <a href="https://www.youtube.com/watch?v=gY5sGvq-8h8" target="blank"><i class="fa-brands fa-twitter"></i></a>
                                
                             
                            </div>

                        </div>
                    </div>
                    <div className='home-right'>
                        <div id='sideImg' className='sideImg'>
                            <img src={sidePic} alt="portfolio pic" />
                        </div>

                    </div>
                   
                </div>
                
               
                </div>

            );
        })
    );
}
export default Home;