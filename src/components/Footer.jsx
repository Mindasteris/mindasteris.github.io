import React from 'react'
import {BsFacebook, BsTwitter, BsYoutube, BsTwitch, BsGithub} from 'react-icons/bs'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-black text-white'>
        <div className='flex flex-col justify-center items-center md:items-start md:px-20'>
            <div className='py-10'>
                <ul className='space-y-4 text-xl'>
                    <li><Link to='/' className='hover:border-b-2'>Home</Link></li>
                    <li><Link to='/projects' className='hover:border-b-2'>Projects</Link></li>
                    <li><Link to='/about' className='hover:border-b-2'>About</Link></li>
                    <li><Link to='/contact' className='hover:border-b-2'>Contact</Link></li>
                </ul>
            </div>

            <div>
                <ul className='flex gap-8 pb-10'>
                    <a href="https://www.facebook.com/" target='_blank'><BsFacebook size={30} className='cursor-pointer hover:scale-125 duration-300' /></a>
                    <a href="https://twitter.com/" target='_blank'><BsTwitter size={30} className='cursor-pointer hover:scale-125 duration-300' /></a>
                    <a href="https://www.youtube.com/" target='_blank'><BsYoutube size={30} className='cursor-pointer hover:scale-125 duration-300' /></a>
                    <a href="https://www.twitch.tv/" target='_blank'><BsTwitch size={30} className='cursor-pointer hover:scale-125 duration-300' /></a>
                    <a href="https://github.com/Mindasteris" target='_blank'><BsGithub size={30} className='cursor-pointer hover:scale-125 duration-300' /></a>
                </ul>
            </div>
        </div>
        <p className='text-center text-xl py-2'>&copy; All Rights Reserved. Mindaugas {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer