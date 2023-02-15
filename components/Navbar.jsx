'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import { ExploreCard } from '../components';


const handleClickScroll =() =>{
  console.log("soon")
  const element = document.getElementById('explore');
  if (element){
    element.scrollIntoView({behavior:'smooth'});
  }
}
const handleClickScroll2 =() =>{
  const element = document.getElementById('events');
  if (element){
    element.scrollIntoView({behavior:'smooth'});
  }
}

const handleClickScroll3 =() =>{
  const element = document.getElementById('participate');
  if (element){
    element.scrollIntoView({behavior:'smooth'});
  }
}

const handleClickScroll4 =() =>{
  const element = document.getElementById('rules');
  if (element){
    element.scrollIntoView({behavior:'smooth'});
  }
}

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}
    >
     <h2 className="font-extrabold text-[24px] leading-[30
.24px] text-white items-center" >
        TECHNORITI'23
      </h2>
      <div className='nav-menu'>
        
        <li id='about' class="nav-about">About</li>
        <li id='events'>Events</li>
        <li id='participate'>Participate</li>
        <li id='rules'>Rules</li>
      </div>
      <div className='nav-button'>
        <button className='nav-contact' id="nav-contact-button">Contact Us</button>
     </div>
    </div>
  </motion.nav>
);

export default Navbar;
