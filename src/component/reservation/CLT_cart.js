import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../navbar";
import TextField from '@mui/material/TextField';
import '../../css component/CLT_cart.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { IconButton } from '@mui/material';
import basaeurl from '../baseurl'



const CLT_cart = () => {
    const user_id = localStorage.getItem("user_id")

    useEffect(() => {
        if (!user_id) {
            window.location.href = '/logIn';
        }
    }, []);


    const res_id = localStorage.getItem('res_id');
    const res_cat_id = localStorage.getItem('res_cat_id');
    const res_scat_id = localStorage.getItem('res_scat_id');

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [numOfPeople, setNumOfPeople] = useState('');
    const [menu, setMenu] = useState([]);
    const [menuItem, setMenuItem] = useState([]);
    const [selectedMenuItem, setSelectedMenuItem] = useState('');

    useEffect(() => {
        axios.get(`${basaeurl}candle/light/dinner/menulist?reser_sub_id=1`)
            .then((res) => {
                let data = res?.data;

                if (data.result.length > 0) {
                    setMenu(data.result);
                    console.log("RES :", data.result);
                } else {
                    console.log("No data found.");
                }
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
            })
    }, []);



    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("userid :", user_id);
        console.log("reser_id :", res_id);
        console.log("reser_catid :", res_cat_id);
        console.log("resersubcatid :", res_scat_id);
        console.log("type:", "CL");
        console.log("date:", date);
        console.log("time:", time);
        console.log("peoples:", numOfPeople);
        console.log("menu_type:", selectedMenuItem);
        // console.log("Selected Menu:", selectedMenu);


        const formData = new FormData();
        formData.append('userid', user_id);
        formData.append('reser_id', res_id);
        formData.append('reser_catid', res_cat_id);
        formData.append('resersubcatid', res_scat_id);
        formData.append('type', "CL");
        formData.append("date", date);
        formData.append("time", time);
        formData.append("peoples", numOfPeople);
        formData.append("menu_type", selectedMenuItem);


        axios
            .post(`${basaeurl}reservationbooking/api`, formData)
            .then(function (res) {
                console.log("RESPONSE :", res.data);
                if (res?.data?.Response?.Success == '1') {
                    alert('Success.');
                    window.location.href = '/reservation';
                } else if (res.data.message == 'Give Valid Id') {
                    alert('Give Valid Id');
                } else {
                    console.log('execution error');
                }
            })
            .catch((error) => {
                console.error('fetching error:', error);
            });
    }



    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };


    const handleChange = (e) => {
        const selectedMenuId = e.target.value;
        axios.get(`${basaeurl}candle/light/dinner/menu_item_list?menuitem_id=${selectedMenuId}`)
            .then((res) => {
                let data = res?.data;
                // console.log("data :", data.result); 
                if (data.result.length > 0) {
                    setMenuItem(data.result);
                    console.log("RES :", data.result);
                } else {
                    console.log("No data found.");
                }
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
            })
    };



    const handleMenuItemChange = (e) => {
        const selectedItem = e.target.value;
        setSelectedMenuItem(selectedItem);
        console.log("Selected Menu Item ID:", selectedItem);
    };



    return (
        <>
            <div className='container-fluid '>
                <div className='row' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='col-lg-12'>
                        <div className='row'>
                            <Navbar />

                        </div>
                        <div className='row CLT_cart_row1'>

                        </div>
                        <div className='row'>
                            <div className='col-lg-12 '>
                                <h1 className='text-center' style={{ color: 'orange', fontFamily: '"Bebas Neue", sans-serif' }}>CANDLE LIGHT DINNER - BOOKING</h1>
                            </div>
                        </div>
                        <div className='row BTB_cart_row12'>
                            <div className='col-lg-12'>
                                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae expedita doloremque quibusdam iusto, error accusantium facere minima asperiores soluta. Quos recusandae reprehenderit dolores ratione numquam blanditiis inventore, tenetur autem cumque!</h2>

                            </div>

                        </div>

                        <div className='row CLT_cart_row2'>

                            <div className='col-lg-4 CLT_cart_row2_1'>
                                <img style={{ border: '1px solid orange', borderRadius: '10%' }} src="http://hifivecafe.com/upload_img/862735066.jpg" alt="" />
                                <h2>CODE : SL-CLD001</h2>


                            </div>
                            <div className="col-lg-4 CLT_cart_row2_2 ">
                                <div >

                                    <div className='p-2'>
                                        <label>Date</label>
                                        <input type="date" className="form-control p-2" onChange={(e) => setDate(e.target.value)} />
                                    </div>
                                    <div className='p-2'>
                                        <label>Time</label>
                                        <input type="time" className="form-control p-2" onChange={(e) => setTime(e.target.value)} />
                                    </div>

                                    <div className='p-2'>
                                        <label>No. of People</label>
                                        <input type="number" className="form-control p-2" onChange={(e) => setNumOfPeople(e.target.value)} />
                                    </div>

                                    {/* <div className='p-2'>
                                        <label>Select veg or n-veg</label>
                                        <select className="form-control p-2" onChange={(e) => setSelectedVegOrNonVeg(e.target.value)}>
                                            <option value="1">Veg</option>
                                            <option value="2">Non-Veg</option>
                                        </select>
                                    </div> */}

                                    <div className='p-2'>
                                        <label>Select veg or non-veg</label>
                                        <select className="form-control p-2" onChange={handleChange}>
                                            <option value="">Select an option</option>
                                            {menu.map((item) => (
                                                <option key={item.menu_id} value={item.menu_id}>{item.menu_title}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* <div className='p-2'>
                                        <label>Select Menu</label>
                                        <select className="form-control p-2" onChange={(e) => setSelectedMenu(e.target.value)}>
                                            <option value="veg">Veg</option>
                                            <option value="non-veg">Non-Veg</option>
                                        </select>
                                    </div> */}



                                    <div className='p-2'>
                                        {menuItem.length > 0 && menuItem.map((item) => (
                                            <div key={item.menu_id}
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    justifyContent: 'start'
                                                }}>
                                                <input
                                                    type="radio"
                                                    id={`menu_item_${item.menu_id}`}
                                                    name="menu_item"
                                                    value={item.menu_id}
                                                    onChange={handleMenuItemChange}
                                                />
                                                <label htmlFor={`menu_item_${item.menu_id}`}
                                                    style={{ marginLeft: '2vh' }}>{item.menu_title}</label>
                                            </div>
                                        ))}
                                    </div>





                                    <div className='p-2' style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                                        <button type='button' className='btn home_action2_btn' onClick={handleSubmit} >Book NOW</button>

                                    </div>



                                </div>
                            </div>


                            {/* =================================== */}

                            <div className='col-lg-4 CLT_cart_row2_3 '>
                                <Slider  {...settings} style={{ width: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div>
                                        <img src="http://hifivecafe.com/upload_img/862735066.jpg" style={{ width: '100%', height: "60vh", borderRadius: '10%' }} />
                                    </div>
                                    <div>
                                        <img src="http://hifivecafe.com/upload_img/172687397.jpg" style={{ width: '100%', height: "60vh", borderRadius: '10%' }} />
                                    </div>
                                    {/* Add more images as needed */}
                                </Slider>


                            </div>

                        </div>




                        {/* ===================================================================================== */}





                        <div className='row  home_col3_3'>
                            <div className='col-lg-4  home_col3_1 ' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffeeda' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <h1 >Wedding Event Hall</h1>
                                    <h1 >Candle Light Dinner</h1>
                                    <h1>Book Team Lunch</h1>
                                    <h1>Quick Cake Delivery</h1>
                                    <h1>Birthday Cakes</h1>

                                </div>


                            </div>
                            <div className='col-lg-4  home_col1_3 ' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffeeda' }}>

                                <div style={{ textAlign: 'center' }}>
                                    <p>Find Us</p>
                                    <h1 >Hifive Cafe and Cakes, 3, Sathy Rd,
                                        Ramanandha Nagar, Saravanampatti, Coimbatore</h1>
                                    <h1>+91 99408 88633,<br /> contact@hifivecafe.com</h1>
                                    <h1>Open: 11:00 am – 10:00 pm</h1>

                                    <div>
                                        <IconButton style={{ color: 'orange' }}>
                                            <InstagramIcon />
                                        </IconButton>

                                        <IconButton style={{ color: 'orange' }}>
                                            <FacebookIcon />
                                        </IconButton><IconButton style={{ color: 'orange' }}>
                                            <XIcon />
                                        </IconButton>

                                    </div>

                                </div>


                            </div>
                            <div className='col-lg-4  home_col3_1 ' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffeeda' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <h1 >Privacy Policy</h1>
                                    <h1 >Terms & Conditions</h1>
                                    <h1>Refund Policy</h1>
                                    <h1>Shipping Policy</h1>

                                </div>


                            </div>



                        </div>



                    </div>
                </div>
            </div>

        </>
    )
}

export default CLT_cart
