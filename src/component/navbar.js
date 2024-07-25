import React, { useState } from 'react'
import '../css component/navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretUp, faCartShopping, faTimes } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleToggle = () => {
        setDropdownOpen((prevState) => !prevState);
    };

    // =============================================================================

    function upcoming() {
        alert("Upcoming!")
    }






    return (
        <>
            <div className='navbar container-fluid'>
                <div className='logo'>
                    <a href="/"> <img src="http://hifivecafe.com/wp-content/uploads/2021/03/Hifive-Logo-1.png" width={"35px"} /></a>

                </div>
                <ul className='hero'>

                    <li><a href="/">HOME</a></li>
                    <li><a href="/galary">GALLERY</a></li>
                    <li><a href="/reservation">RESERVATION</a></li>
                    <li><a onClick={upcoming} href="#"> CAKE</a></li>
                    <li><a onClick={upcoming} href="#">MENU</a></li>
                    <li><a onClick={upcoming} href="#">CONTACT US</a></li>
                    <li><a onClick={upcoming} href="#"><FontAwesomeIcon icon={faCartShopping} /></a></li>


                </ul>


                <a href="/logIn"><button className='action_btn' > Login</button></a>



                <div className="toggle_btn" onClick={handleToggle}  >


                    {isDropdownOpen ? <div style={{ display: 'flex', justifyContent: 'space-between ', width: '100%' }}><a href="/menu_cart" style={{ marginRight: '90%' }}><FontAwesomeIcon icon={faCartShopping} /></a> <FontAwesomeIcon icon={faTimes} color='orange' /></div>
                        : <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}><a href="" style={{ marginRight: '90%', marginTop: '-12%' }}><FontAwesomeIcon icon={faCartShopping} /></a>  <FontAwesomeIcon icon={faBars} color='orange' /> </div>}



                </div>



            </div>


            <div className={`dropdown_menu ${isDropdownOpen ? 'open' : ''}`}>
                <li><a href="/">HOME</a></li>
                <li><a href="/galary">GALLERY</a></li>
                <li><a href="/reservation">RESERVATION</a></li>
                <li><a onClick={upcoming} href="#"> CAKE</a></li>
                <li><a onClick={upcoming} href="#">MENU</a></li>

                <li><a onClick={upcoming} href="#">CONTACT US</a></li>
                <li ><a  href="/logIn" className='button' > Login</a></li>

            </div>

        </>
    )
}

export default Navbar
