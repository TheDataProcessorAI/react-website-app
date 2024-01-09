import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../assets/Untitled.svg';

import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-y px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
                <ul>
                    <li className='py-1'><h6 className='font-bold uppercase pt-2'>Solutions</h6></li>
                    <Link to = '/data-engineering' target='_blank'>
                        <li className='py-1'>Data Engineering</li>
                    </Link>
                    <Link to = "/analytics" target="_blank">
                        <li className='py-1'>Data Analytics</li>
                    </Link>
                    <Link to = "/generative-ai" target="_blank">
                        <li className='py-1'>Generative AI</li>
                    </Link>
                    <Link to = "/data-science" target="_blank">
                        <li className='py-1'>Data Science</li>
                    </Link>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='py-1'><h6 className='font-bold uppercase pt-2'>Company</h6></li>
                    <Link to="/about">
                        <li className='py-1'>About</li>
                    </Link>

                    <Link to="https://thedataprocessor.hashnode.dev/">
                        <li className='py-1'>Blog</li>
                    </Link>
                    <Link to="/contact">
                        <li className='py-1'>Jobs</li>
                    </Link>
                </ul>
            </div>
            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-bold uppercase'>Subscribe to our newsletter</p>
                <p className='py-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter email..'/>
                    <button className='p-2 mb-4'>Subscribe</button>
                </form>
            </div>
            <div>
                <ul >
                    <Logo className='scale-50 -mt-50 w-50'/>
                </ul>
            </div>
        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2024 The Data Processor AI, LLC. All rights reserved</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaTwitch />
            <FaGithub />
        </div>
        </div>
    </div>
  )
}

export default Footer