'use client';
import { useRef } from 'react';
import { FaBars, FaTimes} from 'react-icons/fa';
import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const showNavBar = () => {

}


const Navbar = () => (
  
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[30%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}
    >
     <h2 className="font-extrabold text-[24px] leading-[30
.24px] text-white items-center" >
        TECHNORITI'23
      </h2>
      
      <div className='nav-menu'>
        <li id='home'><a></a></li>
        <li id='about'><a href="#about">About</a></li>
        <li id='events'><a href='#explore'>Events</a></li>
        <li id='about'><a href='#about'>Participate</a></li>
        <li id='rules'><a href='#rules'>Rules</a></li>
        <li id='contact'></li>

      </div>
      <div className='nav-button'>
        <button className='nav-contact' id="nav-contact-button">Contact Us</button>
     </div>
    </div>
  </motion.nav>
);

export default Navbar;
