import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useMobileHook } from '../useMobileView/useMobileHook';

const Footer = () => {
    const isMobile = useMobileHook();
  return (
    <>
    { isMobile ? (
        <footer>
      <div className="flex flex-row justify-center items-center gap-2 mt-4 py-3">
        <hr />
        <a href="https://github.com/The-Dev-Sumit" className=' shadow-2xl' target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} color='#FBF3C1'/>
        </a>
        <a href="https://www.linkedin.com/in/sumit-sonar-097738281/" className=' shadow-2xl' target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} color='#FBF3C1'/>
        </a>
        <a href="https://www.instagram.com/_the_great_sumit_?igsh=dnBrbnBvZWJpaDdz" className=' shadow-2xl' target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} color='#FBF3C1' />
        </a>
      </div>
        <p className="text-center text-[#FBF3C1] text-sm py-3">
            © {new Date().getFullYear()} Sumit Sonar. All rights reserved. </p>
    </footer>
    ):(
        <footer>
      <div className="flex flex-row justify-center items-center md:gap-2 md:mt-16 py-3 lg:mt-20 lg:gap-4 xl:gap-6">
        <hr />
        <a href="https://github.com/The-Dev-Sumit" className=' shadow-2xl' target="_blank" rel="noopener noreferrer">
          <FaGithub size={40} color='#FBF3C1'/>
        </a>
        <a href="https://www.linkedin.com/in/sumit-sonar-097738281/" className=' shadow-2xl' target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} color='#FBF3C1'/>
        </a>
        <a href="https://www.instagram.com/_the_great_sumit_?igsh=dnBrbnBvZWJpaDdz" className=' shadow-2xl' target="_blank" rel="noopener noreferrer">
          <FaInstagram size={40} color='#FBF3C1' />
        </a>
      </div>
        <p className="text-center text-[#FBF3C1] md:text-md lg:text-lg xl:text-xl py-3">
            © {new Date().getFullYear()} Sumit Sonar. All rights reserved. </p>
    </footer>
    )}
    </>
  )
}

export default Footer