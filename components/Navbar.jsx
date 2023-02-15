'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';


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
      <li id='events'><a href="#about">
          <div className="w-[100px] flex justify-end sm:-mt-[20px] -mt-[20px] pr-[20px] relative z-10">
            <img
              src="/navs/about.png"
              alt="Events"
              className="sm:w-[155px] w-[70px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </a></li>
   
        <li id='events'><a href="#explore">
          <div className="w-[100px] flex justify-end sm:-mt-[20px] -mt-[20px] pr-[20px] relative z-10">
            <img
              src="/navs/Events.png"
              alt="Events"
              className="sm:w-[155px] w-[70px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </a></li>
        
   
      </div>
      <div className='nav-button'>
        <button className='nav-contact' id="nav-contact-button">Contact Us</button>
     </div>
    </div>
  </motion.nav>
);

export default Navbar;
