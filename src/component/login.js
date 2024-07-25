
import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "../css component/login.css"
import AOS from 'aos'
import 'aos/dist/aos.css';
import axios from 'axios'
import TextField from '@mui/material/TextField';
import BASEURL from './baseurl';



const Login = () => {

  const [toggle, setToggle] = useState(false);


  useEffect(() => {
    AOS.init({ duration: 1500 });
  })


  // ==================================================================================================
  const handleSubmit = (event) => {

    event.preventDefault();
    const data1 = new FormData(event.target);

    const getdata = { headers: { 'Content-Type': 'multipart/form-data' } };
    // console.log(data1, getdata);

    axios.post(`${BASEURL}usertable`, data1, getdata)
      .then((res) => {


        if (res.data.status == "successfully") {
          alert("Register successfully");
      
          localStorage.setItem('user_id', res.data.detail[0].id);
          window.location.href = '/';
        } else if (res.data.status == "email already exist") {
          alert('your email already exist')
          window.location.reload();

        }
        else {
          alert('Try again later');
        }
      })
      .catch((error) => {
        console.error('Error sending data:', error);
      });
  };

  // ====================================================signin======================================
  const signin = (event) => {
    localStorage.clear();
    event.preventDefault();

    const datastring = new FormData(event.target);
    const config = { headers: { "enctype": "multipart/form-data" } };

    axios.post(`${BASEURL}signin`, datastring, config)

      .then((res) => {
        if (res.data.status !== "success") {
          alert("invalid name")
          window.location.reload();
        }

        else if (res.data.status === "success") {
          alert("Logged in");

          localStorage.setItem('user_id', res.data.details[0].id);
          window.location.href = '/';
        } else if (res.data.status === "no records") {
          alert('no records')
        }
      })
  }





  return (
    <>
      <div className='container-fluid '>
        <div className='row ' >
          <div className='col-lg-12 col-md-12 col-sm-12 full '>
            <div className='loginbox '>
              <div className='buttonbox'>
                <div id='btn' className={toggle ? 'regbtn' : 'logbtn'}></div>
                <button className='btn l_togglebtn' onClick={() => setToggle(false)} >LOGIN</button>
                <button className='btn l_togglebtn' onClick={() => setToggle(true)}>REGISTER</button>
              </div>

              {
                toggle === false ? (
                  <form id='log' className='forminput' onSubmit={signin} >
                    <input type="text" className='input' placeholder='Enter your email' name='email' />
                    <input type="password" className='input' placeholder='password' name='password' />

                    <button className='btn submitbtn' > Login</button>
                  </form>
                ) : (
                  <form id='reg' className='regforminput' onSubmit={handleSubmit} >
                    <input type="text" className='input2' placeholder='Name' data-aos='fade-down' name='name' />
                    <input type="number" className='input2' placeholder='Phone no' data-aos='fade-down' name='phone_number' />
                    <input type="email" className='input2' placeholder='Email id' data-aos='fade-down' name='email' />
                    <input type="password" className='input2' placeholder='password' data-aos='fade-down' name='password' />
                    <button className='btn regsubmitbtn' >Register</button>
                  </form>
                )
              }




            </div>


          </div>

        </div>

      </div>


    </>

  )
}

export default Login


