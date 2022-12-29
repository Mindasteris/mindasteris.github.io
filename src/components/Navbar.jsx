import React, {useState} from 'react'
import {Link } from 'react-router-dom'
import mLogo from '../img/m.png'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {

    const [navbar, setNavbar] = useState(false)

  return (
    <div>
        <nav className='flex items-center justify-between md:justify-start shadow-md p-4'>
            <div>
                <Link to='/'><img src={mLogo} alt="mlogo" className='w-32' /></Link>
            </div>

            {/* Desktop Menu Links */}
            <div>
                <ul className='hidden md:flex gap-8 ml-10'>
                        <li className='nav-links'><Link to='/'>Home</Link></li>
                        <li className='nav-links'><Link to='/projects'>Projects</Link></li>
                        <li className='nav-links'><Link to='/about'>About</Link></li>
                        <li className='nav-links'><Link to='/contact'>Contact</Link></li>
                    </ul>
            </div>

                {/* Mobile Menu Icon */}
                <div className='md:hidden cursor-pointer hover:scale-110 duration-300' onClick={() => setNavbar(!navbar)}>
                    {!navbar ? <AiOutlineMenu size={52} /> : <AiOutlineClose size={52} />}
                </div>
        </nav>

        {/* Mobile Menu Links */}
        <div className='w-52 mx-auto my-4'>
            <ul className={!navbar ? 'hidden' : 'flex flex-col text-center'}>
                <li className='nav-links' onClick={() => setNavbar(!navbar)}><Link to='/'>Home</Link></li>
                <li className='nav-links' onClick={() => setNavbar(!navbar)}><Link to='/projects'>Projects</Link></li>
                <li className='nav-links' onClick={() => setNavbar(!navbar)}><Link to='/about'>About</Link></li>
                <li className='nav-links' onClick={() => setNavbar(!navbar)}><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar