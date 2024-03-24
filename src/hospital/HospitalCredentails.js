import React from 'react'
import './style.css'
import logo from '../assets/logo.svg'
import img1 from '../assets/about/img1.png'
import img2 from '../assets/about/img2.png'
import img3 from '../assets/about/img3.png'
import img4 from '../assets/about/img4.png'
import img5 from '../assets/about/img5.png'
import aboutimg from '../assets/aboutimg.png'
import Logo from '../Logo'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link, Outlet } from 'react-router-dom'
function HospitalCredentails() {
  return (
    <div className='overflow-scroll flex flex-col'>
      <div className='fixed top-0 left-0 w-full'>
          <Outlet/>
      </div>
      <div className='banner'>
        <div className='flex items-center justify-between p-3'>
          <div className=''>
            <Logo/>
          </div>
          <div className='hidden md:flex w-1/2 justify-around text-white'>
            <div className='font-semibold'>Home</div>
            <div className='font-semibold'>About Us</div>
            <div className='font-semibold'>Contact Us</div>
          </div>
          <div className='blue text-white font-semibold p-2 rounded-md'>login as user</div>
        </div>
        <div className='gap-5 flex flex-col font-bold text-white h-3/4 justify-center items-center'>
          <div className='md:text-2xl lg:text-5xl  flex flex-col gap-2'>
            <div className=''>Together Towards Better Health</div>
            <div className=''>Partner with <span className='text-green'>Healthkard </span> Today</div>
          </div>
          <Link to='login' className='blue rounded-md p-3'>Login to View Your Existing Hospital</Link>
          <Link to='signup' className='font-bold underline text-xl  hover:cursor-pointer'>Register Your Hospital Now</Link>
        </div>
      </div>
      <div className='flex flex-col gap-12  items-center justify-around my-12'>
        <div className='flex flex-col gap-2 items-center'>
          <div className='font-bold text-2xl'>Steps to Join Our Community</div>
          <div className='hidden md:block'>Team up with us for a healthier community focused on well-being for all.</div>
        </div>
        <div className='flex md:flex-row flex-col w-2/3  justify-around h-2/3 gap-3  p-3'>
          <div className='flex flex-col gap-5 items-center h-1/2 justify-center w-full md:w-1/4 shadow-md border p-4 rounded-md'>
            <div className='font-bold green text-white w-[40px] h-[40px] flex justify-center items-center text-2xl rounded-full'>1</div>
            <div className='text-center font-bold'>Register your hospital on HealthKard</div>
            <div className='text-center'>Register with your details so users can see list the listing</div>
          </div>
          <div className='flex flex-col gap-5 items-center h-1/2 justify-center w-full md:w-1/4 shadow-md border p-4 rounded-md'>
            <div className='font-bold green text-white w-[40px] h-[40px] flex justify-center items-center text-2xl rounded-full'>2</div>
            <div className='text-center font-bold'>Get <br/> Verified</div>
            <div className='text-center'>Our team will verify the details provided</div>
          </div>
          <div className='flex flex-col gap-5 items-center h-1/2 justify-center w-full md:w-1/4 shadow-md border p-4 rounded-md'>
            <div className='font-bold green text-white w-[40px] h-[40px] flex justify-center items-center text-2xl rounded-full'>3</div>
            <div className='text-center font-bold'>YAY!! <br/>Appear to users</div>
            <div className='text-center'>Congratulations!! you can now appear to users</div>
          </div>
        </div>
      </div>
      <div className='p-3 flex md:flex-row flex-col gap-5  md:w-2/3 w-3/4 mx-auto items-center justify-around'>
        <div className='font-bold text-xl lg:hidden'>About US</div>
        <img src={aboutimg} alt='aboutimg' width='300px' className='' />
        <div className='flex flex-col gap-2 w-full items-center lg:items-start'>
          <div className='font-bold text-md lg:block hidden'>About US</div>
          <div className='text-xl font-semibold'>Pioneering accessible, affordable, and quality healthcare.</div>
          <div className=''>Revolutionizing healthcare access with affordable, hassle-free consultations. Our single card solution eliminates financial barriers, enabling regular check-ups and preventive care. Empowering individuals to prioritize well-being, we aim to create a healthier future for all. Join us in making a positive impact on healthcare accessibility. Your health, our priority.</div>
          <div className='blue text-white p-2 rounded-md'>Get Started</div>
        </div>
      </div>
      <div className='flex flex-col items-center gap-10 my-10 p-2'>
        <div className='font-bold text-4xl'>Why Choose Us ?</div>
        <div className='flex flex-col gap-10 md:w-2/3 w-3/4' >
          <div className='flex flex-col md:flex-row border shadow-md w-full  gap-6 p-5 rounded-md'>
            <div className='w-full md:w-1/4 flex justify-center items-center'>
              <img src={img1} alt='img1' width='120px'/>
            </div>
            <div className='flex flex-col gap-5 w-full md:w-3/4'>
              <div className='font-bold text-center'>Reaching more patient</div>
              <div className='text-center'> By teaming up with us, you’ll be able to offer your services to a larger group of people who might not have easy access to  healthcare.</div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row-reverse w-full  gap-6 p-5 rounded-md'>
            <div className='w-full md:w-1/4 flex justify-center items-center'>
              <img src={img2} alt='img2' width='120px'/>
            </div>
            <div className='flex flex-col gap-5 w-full md:w-3/4'>
              <div className='font-bold text-center'>Building a good reputation </div>
              <div className='text-center'> Giving free consultations can help you build a positive image and earn trust from potential patients.</div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row border shadow-md w-full  gap-6 p-5 rounded-md'>
            <div className='w-full md:w-1/4 flex justify-center items-center'>
              <img src={img3} alt='img3' width='120px'/>
            </div>
            <div className='flex flex-col gap-5 w-full md:w-3/4'>
              <div className='font-bold text-center'>Marketing Support</div>
              <div className='text-center'> We’ll help you with promotional activities to get the word out about you and your hospital.</div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row-reverse w-full  gap-6 p-5 rounded-md'>
            <div className='w-full md:w-1/4 flex justify-center items-center'>
              <img src={img4} alt='img4' width='120px'/>
            </div>
            <div className='flex flex-col gap-5 w-full md:w-3/4'>
              <div className='font-bold text-center'>Making a difference</div>
              <div className='text-center'>Join us in making a positive impact on the health of our country. Let’s work together to keep everyone healthy and fit!</div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row border shadow-md w-full  gap-6 p-5 rounded-md'>
            <div className='w-full md:w-1/4 flex justify-center items-center'>
              <img src={img5} alt='img5' width='120px'/>
            </div>
            <div className='flex flex-col gap-5 w-full md:w-3/4'>
              <div className='font-bold text-center'>Easy Tracking</div>
              <div className='text-center'>Our app will make it simple for you to keep track of how many patients are coming in for consultations right at your fingertips.</div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-black text-white items-center flex flex-col p-4'>
        <div className='flex md:flex-row flex-col-reverse justify-around w-full gap-6 p-4'>
          <div className='flex flex-col w-full md:w-fit'>
            <div className='flex gap-2 flex-col items-center'>
              <img src={logo} alt='logo' width='100px'/>
              <div className='font-bold text-green'>HealthKard</div>
            </div>
            <div className='flex w-full justify-around p-2'>
              <div className='p-2 hover:bg-gray-200 rounded-full cursor-pointer hover:text-black'>
                <FaInstagram/>
              </div>
              <div className='p-2 hover:bg-gray-200 rounded-full cursor-pointer hover:text-black'>
                <FaLinkedin/>
              </div>
              <div className='p-2 hover:bg-gray-200 rounded-full cursor-pointer hover:text-black'>
                <FaTwitter/>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='font-bold text-left md:text-center'>About Healthkard</div>
            <div className='text-centerfont-thin'>who are we</div>
            <div className='font-thin'>Investor Relations</div>
            <div className='font-thin'>Contact Us</div>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='font-bold text-left md:text-center'>For Hospitals</div>
            <div className='text-centerfont-thin'>Patner with us</div>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='font-bold text-left md:text-center'>Learn more</div>
            <div className='text-centerfont-thin'>Terms & Conditions</div>
          </div>
        </div>
        <div className=''>Powered by Halekard private Limited</div>
      </div>
    </div>
  )
}

export default HospitalCredentails