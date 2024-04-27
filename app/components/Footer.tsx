import React from 'react'
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTwitter, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='pb-[2rem] pt-[7rem] '>
        <div className='w-[80%] mx-auto items-center grid grid-cols-1 border-b-2 pb-[2rem] md:grid-cols-2 lg:grid-cols-4 gap-[3rem]'>
            <div>
                {/* first */}
                <h1 className='Footer_heading'>Support</h1>
                <div>
                    <a className='footer_link' href="#">Help Center</a>
                    <a className='footer_link' href="#">safety information</a>
                    <a className='footer_link' href="#">Cancellation options</a>
                    <a className='footer_link' href="#">Medical Doctors</a>
                </div>
            </div>

{/* second */}
            <div>
                <h1 className='Footer_heading'>Company</h1>
                <div>
                    <a className='footer_link' href="#">About Us</a>
                    <a className='footer_link' href="#">Community Blogs</a>
                    <a className='footer_link' href="#">Careers</a>
                    <a className='footer_link' href="#">Privacy Policy</a>
                    <a className='footer_link' href="#">terms of services</a>
                </div>
            </div>

{/* third */}
            <div>
                <h1 className='Footer_heading'>Contact</h1>
                <div>
                    <a className='footer_link' href="#">Partnerships</a>
                    <a className='footer_link' href="#">FAQ</a>
                    <a className='footer_link' href="#">get in Touch</a>
                    
                </div>
            </div>

            <div>
                <h1 className='Footer_heading'>Social</h1>
                <div className='flex items-center space-x-4 text-white text-[1.3rem] '>
                    <div className='footer_icon bg-blue-500'>
                    <FaFacebook />
                    </div>

                    <div className='footer_icon bg-pink-500'>
                    <FaInstagram/>
                    </div>

                    <div className='footer_icon bg-blue-400'>
                    <FaTwitter/>
                    </div>

                    <div className='footer_icon bg-red-500'>
                    <FaYoutube/>
                    </div>

                </div>
            </div>
        </div>
       <div className='mt-[1rem] grid grid-cols-1 gap-[1.4rem] sm:grid-cols-2  justify-between text-center w-[80%] mx-auto'>
        <p className=' text-[17px] text-black opacity-60 font-semibold'>&copy; 2024 VastVentures. All Rights Reserved</p>
       </div>
    </div>
  )
}

export default Footer
