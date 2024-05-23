import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { motion } from 'framer-motion';
import { menulight, menudark, closelight, closedark } from '../assets';
import { fadeIn, textVariant } from '../utils/motion';
import { lightmode, darkmode, logo } from '../assets';
import "../App.css";

const Navbar = ({darkThemeEnabled, setDarkTheme}) => {
  
  const [active,setActive]=useState('');
  const [toggle,setToggle]=useState(false);

  return (
    <nav className={`w-3/4 flex items-center fixed top-0 z-20 mt-3 gap-6`} >
      <div className={`px-8 xl:py-5 lg:py-5 md:py-5 sm:py-5 py-4 w-full flex justify-between items-center max-w-7xl mx-auto rounded-px custom-rounded-px ${darkThemeEnabled?'dark-theme-box':'light-theme-box'} `}>
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className='w-10 h-10 object-contain border-[1px] border-black rounded-full' />
          <Link to="/"
            onClick={()=>{
              setActive("");
              window.scrollTo(0,0);
            }}
          >
            <p className={`${darkThemeEnabled?'text-white':'text-slate-700'} text-[18px] font-bold cursor-pointer sm:flex hidden`}>
              Kushagra &nbsp;<span className='lg:block xl:block hidden'>Agarwal</span>
            </p>
          </Link>
        </div>
        <ul className="list-none lg:flex md:flex-row xl:gap-10 lg:gap-5 hidden">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`
                ${
                  darkThemeEnabled?(active===link.title? "text-white": "text-secondary hover:text-white")
                  :
                  (active===link.title? "text-slate-200" : "text-slate-600 hover:text-slate-400")
                }
                text-[18px] font-medium cursor-pointer
              `}
              onClick={()=>(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="lg:hidden flex flex-1 justify-end items-center">
          
          <img src={toggle?darkThemeEnabled?closedark:closelight:darkThemeEnabled?menudark:menulight} 
            alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={()=> setToggle(!toggle)}
          />

          <div className={`${!toggle?"hidden":"flex"} ${darkThemeEnabled?'black-gradient':'white-gradient'} p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            
            <ul className="list-none flex justify-end items-start flex-col gap-3">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`
                    ${
                      darkThemeEnabled?(active===link.title? "text-white": "text-secondary hover:text-white")
                      :
                      (active===link.title? "text-slate-400" : "text-slate-600 hover:text-slate-400")
                    }
                    font-poppins font-medium cursor-pointer text-[16px] hover:text-white text-[18px] cursor-pointer`}
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
      <div className={`lg:px-6 px-7 lg:py-5 md:py-5 sm:py-5 py-4 mx-auto rounded-full box ${darkThemeEnabled?'dark-theme-box':'light-theme-box'}`}>
        <img src={darkThemeEnabled?darkmode:lightmode} alt="logo" className='w-10 h-10 object-contain cursor-pointer' onClick={() => setDarkTheme( !darkThemeEnabled )} />
      </div>
    </nav>
  )
}

export default Navbar