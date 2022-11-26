import React from 'react'
import userData from '../UserData/data.json'
import '../Middle/About.css'
import sidePics from '../Middle/images/profile.jpg'
function About() {
    return (
        userData.map((data) => {
            return (

                <div>
                    <div className='about'>
                        <div className='about-box'>
                            <div className='dp-img'>
                                <img src={sidePics} alt='Profile img' />
                                <div className='Intro-box'>
                                <p>{data.Name}</p>
                                <p>Software Engineer</p>
                                </div>
                            </div>
                            <div className='bio'>
                                <p>{data.Bio} </p>
                            </div>
                            <div className='fav-Icon'>
                                <a href={data.Link.instagram} target="blank"><i class="fa-brands fa-instagram"></i></a>
                                <a href={data.Link.facebook} target="blank"><i class="fa-brands fa-facebook"></i></a>
                                <a href={data.Link.youtube} target="blank"><i class="fa-brands fa-youtube"></i></a>
                                <a href={data.Link.linkedin} target="blank"><i class="fa-brands fa-linkedin"></i></a>
                                <a href={data.Link.twitter} target="blank"><i class="fa-brands fa-twitter"></i></a>
                            </div>

                        </div>
                    </div>
                </div>


            );
        })


    );
}
export default About;