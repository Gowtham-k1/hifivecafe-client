import React, { useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "../css component/sidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretUp, faCartShopping, faTimes } from '@fortawesome/free-solid-svg-icons';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { IconButton } from '@mui/material';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { WhatsappIcon } from "react-share";
const Sidebar = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    })

    function upcoming() {
        alert("Upcoming!")
    }
    return (
        <>
            <div className='container-fluid ' >
                <div className='row'>
                    <div className='col-lg-3' style={{ height: '100vh', position: 'fixed',zIndex:'2' }}>

                        <div className='sidebar_one'>
                            <a href="/">
                                <img src="http://hifivecafe.com/wp-content/uploads/2021/03/Hifive-Logo-1.png" alt="Hifive Logo" />
                            </a>
                        </div>

                        <div className='sidebar_two'>
                            <ul >

                                <div data-aos='fade-left'><a href="/" >HOME</a></div>
                                <div data-aos='fade-left'><a href="/galary">GALLERY</a></div>
                                <div data-aos='fade-left'><a href="/reservation">RESERVATION</a></div>
                                <div data-aos='fade-left'><a  onClick={upcoming} href="#"> CAKE</a></div>
                                <div data-aos='fade-left'><a onClick={upcoming} href="#">MENU</a></div>
                                <div data-aos='fade-left'><a onClick={upcoming} href="#">CONTACT US</a></div>
                                <div data-aos='fade-left' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <a onClick={upcoming} href="#"><FontAwesomeIcon icon={faCartShopping} /></a>
                                    <a href="/logIn">LOGIN</a>
                                </div>


                            </ul>

                        </div>
                        <div className='sidebar_three'>
                            <a
                                href="https://api.whatsapp.com/send?phone=919585135049" // Make sure the phone number is in the correct format
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <WhatsappIcon
                                    size={60}
                                    round={true}
                                    style={{ position: 'relative', top: '30%', left: '-140%' }}
                                />
                            </a>
                            <IconButton style={{ color: 'white' }}>
                                <InstagramIcon />
                            </IconButton>

                            <IconButton style={{ color: 'white' }}>
                                <FacebookIcon />
                            </IconButton><IconButton style={{ color: 'white' }}>
                                <XIcon />
                            </IconButton>

                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Sidebar
