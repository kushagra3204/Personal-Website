import { useState } from 'react'
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import logo from "../assets/logo.svg";
import { motion } from 'framer-motion';
import { menu, close } from '../assets';
import { fadeIn, textVariant } from '../utils/motion'
import "../App.css";

const Navbar = () => {
  const [active,setActive]=useState('');
  const [toggle,setToggle]=useState(false);

  return (
    <nav className={`px-8 w-3/4 flex items-center xl:py-5 lg:py-5 md:py-5 sm:py-5 py-4 fixed top-0 z-20 bg-primary mt-3 rounded-px custom-rounded-px box`} >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2"
          onClick={()=>{
            setActive("");
            window.scrollTo(0,0);
          }}
        >
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Kushagra &nbsp;<span className='lg:block xl:block hidden'>Agarwal</span>
          </p>
        </Link>
        <ul className="list-none xs:hidden sm:hidden md:flex flex-row gap-10 hidden">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active===link.title? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={()=>(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="md:hidden flex flex-1 justify-end items-center">
          
          <img src={toggle?close:menu} 
            alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={()=> setToggle(!toggle)}
          />

          <div className={`${!toggle?"hidden":"flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            
            <ul className="list-none flex justify-end items-start flex-col gap-3">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active===link.title? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px] hover:text-white text-[18px] cursor-pointer`}
                  onClick={()=>{
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>          
        </div>
      </div>
    </nav>
  )
}

export default Navbar