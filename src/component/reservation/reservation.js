import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../navbar";
import '../../css component/reservation.css'
import Sidebar from '../sidebar';
import ReactPlayer from 'react-player'
import Slider from 'react-slick';
import vid1 from '../../video/vid1.webm'
import vid2 from '../../video/vid2.mp4'
import vid3 from '../../video/vid3.mp4'

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { IconButton } from '@mui/material';
import axios from 'axios'
import basaeurl from '../baseurl'

const Reservation = () => {


    const video = [
        {
            id: 1,
            src: vid1
        }, {
            id: 2,
            src: vid2
        }, {
            id: 3,
            src: vid3
        }
    ]

    const [videoid, setVideoid] = useState(0);
    const nextvid = (i) => {

        if (i == 2 || i == 1 || i == 0) {
            setVideoid(i)
        } else {
            setVideoid(0)
        }

    }





    // =======================================res_list
    const [res_list, setRes_list] = useState()
    console.log(res_list);

    useEffect(() => {
        axios.get(`${basaeurl}reservation/overall/list`)
            .then((res) => {
                // console.log(res);

                setRes_list(res.data.Response?.result)
            })
            .catch((err) => {
                console.log(err);
            })


    }, [])


    // // ===============================
    const route_cat = (e) => {
        localStorage.removeItem('res_id')
        localStorage.setItem("res_id", e)
        window.location.href = "/sub_cat"

    }


    return (
        <>
            <div className='container-fluid ' >
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='row nav_bar'>
                            <Navbar />
                        </div>

                        <div className='row home_row_1'>
                            <div className='col-lg-3 home_col_1 sidebar ' >

                                <Sidebar />
                            </div>
                            <div className='col-lg-9  home_col_2'>
                                <ReactPlayer
                                    url={video[videoid].src}
                                    width='100vw'
                                    height='100vh'
                                    pip={true}
                                    controls={false}
                                    playing={true}
                                    playbackRate={true}
                                    volume={0}
                                    onEnded={() => nextvid(videoid + 1)}
                                />

                            </div>
                        </div>

                        <div className='row home_row2 ' >
                            <div className='col-lg-3  sidebar ' >
                                <Sidebar />
                            </div>

                            <div className='col-lg-3  home_row2_1 '>

                                <h1 className=' d-lg-none'>RESERVATION</h1>
                                <div style={{ display: 'flex' }}>
                                    <img className='img1' src="https://i.pinimg.com/474x/01/ac/01/01ac01fc707b723f3c2a4454981fcd52.jpg" />


                                    <img className='img2' src={res_list ? res_list[0]?.reser_image : ''} style={{ position: 'absolute' }} />

                                </div>
                                <h4>{res_list ? res_list[0]?.reser_main_title : ''}</h4>
                                {/* <button style={{ textAlign: 'center' }} className='home_action2_btn ' onClick={() => route_cat(res_list[0]?.reser_id)}>BOOK NOW</button> */}
                                <button style={{ textAlign: 'center' }} className='home_action2_btn ' onClick={() => route_cat(res_list[0]?.reser_id)}>BOOK NOW</button>

                            </div>
                            <div className='col-lg-3 home_row2_2'  >
                                <h1>RESERVATION</h1>

                                <div style={{ display: 'flex' }}>
                                    <img className='img1' src="https://i.pinimg.com/474x/01/ac/01/01ac01fc707b723f3c2a4454981fcd52.jpg" />


                                    <img className='img2' src={res_list ? res_list[1]?.reser_image : ''} style={{ position: 'absolute' }} />


                                </div>
                                <h4>{res_list ? res_list[1]?.reser_main_title : ''}</h4>

                                <button style={{ textAlign: 'center' }} className='home_action2_btn ' onClick={() => route_cat(res_list[1]?.reser_id)} >BOOK NOW</button>

                            </div>




                            <div className='col-lg-3 home_row2_3  '>

                                <div style={{ display: 'flex' }}>
                                    <img className='img1' src="https://i.pinimg.com/474x/01/ac/01/01ac01fc707b723f3c2a4454981fcd52.jpg" />


                                    <img className='img2' src={res_list ? res_list[2]?.reser_image : ''} style={{ position: 'absolute' }} />


                                </div>
                                <h4>{res_list ? res_list[2]?.reser_main_title : ''}</h4>

                                <button style={{ textAlign: 'center' }} className='home_action2_btn ' onClick={() => route_cat(res_list[2]?.reser_id)}>BOOK NOW</button>

                            </div>
                        </div>



                        {/* ===================================================================================== */}


                    </div>

                </div>
            </div>

        </>
    )
}

export default Reservation
