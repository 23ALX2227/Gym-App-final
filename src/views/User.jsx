import React from 'react'
import style from '../../src/front/styles/User.module.css'
import { Link } from 'react-router-dom'


const User = () => {
    return (

        
        <div>
            
            

            <div className={style.main}>
                <div className={style.main__container}>
                    <div className={style.main__content}>
                        <h1>Get In Action Now</h1>
                        <h2></h2>
                        <p>Checkout your daily routines and diet.</p>
                        
                    </div>
                    <div className={style.main__img__container}>
                        <img src="https://images.pexels.com/photos/4162583/pexels-photo-4162583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="pic" id={style.main__img} />
                    </div>
                </div>
            </div>


            <div className={style.services}>
                <h1>Get The Best Results</h1>
                <div className={style.services__container}>
                    
                    <div className={style.services__card}>
                    
                        <h2>Your Routines</h2>
                        <p></p>
                        
                    </div>
                    <div className={style.services__card}>
                    
                        <h2>Your Diets</h2>
                        <p></p>
                        
                    </div>
                    <div className={style.services__card}>
                    
                        <h2>Your Progress</h2>
                        <p></p>
                        
                    </div>
                </div>
            </div>


            <div className={style.footer__container}>
                <div className={style.footer__links}>
                    <div className={style.footer__link__wrapper}>
                        <div className={style.footer__link__items}>
                            <h2>About Us</h2>
                            <a href="/">How it works</a>
                            <a href="/">Testimonials</a>
                            <a href="/">Careers</a>
                            <a href="/">Investments</a>
                            <a href="/">Terms of service</a>
                        </div>
                        <div className={style.footer__link__items}>
                            <h2>Contact Us</h2>
                            <a href="/">Contact</a>
                            <a href="/">Support</a>
                            <a href="/">Destinations</a>
                            <a href="/">Sponsorship</a>
                        </div>
                    </div>
                    <div className={style.footer__link__wrapper}>
                        <div className={style.footer__link__items}>
                            <h2>Videos</h2>
                            <a href="/">Submit Video</a>
                            <a href="/">Ambassadors</a>
                            <a href="/">Agency</a>
                            <a href="/">Influencer</a>

                        </div>
                        <div className={style.footer__link__items}>
                            <h2>Social Media</h2>
                            <a href="/">Instagram</a>
                            <a href="/">Facebook</a>
                            <a href="/">Youtube</a>
                            <a href="/">LinkedIn</a>
                        </div>
                    </div>
                </div>
                <div className={style.social__media}>
                    <div className={style.social__media__wrap}>
                        <div className={style.footer__logo}>
                            <a href="/" id={style.footer__logo}><i className="fa-solid fa-dumbbell"></i>__GYMApp</a>
                        </div>
                        <p className={style.website__rights}><i class="fa-solid fa-copyright"></i>GYMApp 2023. All rights reserved</p>
                    <div className={style.social__icons}>
                        <a href="/" className={style.social__icon__link} target="_blank">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="/" className={style.social__icon__link} target="_blank">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="/" className={style.social__icon__link} target="_blank">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                        <a href="/" className={style.social__icon__link} target="_blank">
                        <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div >
    )
}


export default User