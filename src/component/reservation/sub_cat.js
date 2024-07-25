import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../navbar";
import '../../css component/sub_cat.css'
import Sidebar from '../sidebar';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { IconButton } from '@mui/material';
import axios from 'axios'
import basaeurl from '../baseurl'

import ReactPlayer from 'react-player'
import vid1 from '../../video/vid1.webm'
import vid2 from '../../video/vid2.mp4'
import vid3 from '../../video/vid3.mp4'


const Sub_cat = () => {



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



    // -------------------------------------------------------------------

    const res_id = localStorage.getItem('res_id');



    // =============================================catlist
    const [res_cat_list, setRes_cat_list] = useState([])
    const [title, setTitle] = useState()
    useEffect(() => {

        axios.get(`${basaeurl}reservation/category/get/list?reser_id=${res_id}`)
            .then((res) => {

                if (res.data.Response.Success == 1) {
                    // console.log(res);
                    setTitle(res.data.Response?.result[0].reser_title)
                    setRes_cat_list(res.data.Response?.result[0].reservation_category_list)

                }

            })
            .catch((err) => {
                console.log(err);
            })
    }, [])



    const route_cat = (e) => {

        localStorage.setItem("res_cat_id", e)
        window.location.href = "/sub_cat_list"

    }

    return (
        <>
            <div className='container-fluid ' >
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='row nav_bar'>
                            <Navbar />
                        </div>


                    </div>

                </div>
                <div className='row sc_row2'>

                </div>

                <div className='row'>
                    <div className='col-lg-3  sidebar ' >
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
                    <div className='col-lg-9 sub_cat_1'>
                        <h1>{title}</h1>

                    </div>

                    
                </div>
                <div className='row'>
                    <div className='col-lg-3  sidebar ' >

                    </div>

                    <div className='col-lg-9 '>
                        <div className='row'>
                            {
                                res_cat_list?.map((item, i) => (
                                    <div className='col-lg-3 sub_cat_2' key={i}>
                                        <a onClick={() => route_cat(item.cat_id)}>
                                            <img className='img'
                                                src={item.cat_image} alt={`Image ${i}`} />
                                        </a>
                                        <div style={{ marginTop: '4vh' }}>
                                            <h3>{item.cat_title}</h3>
                                            <h3>{item.price_range}</h3>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>

                    </div>



                </div>




                {/* ===================================================================================== */}

            </div>

        </>
    )
}

export default Sub_cat
