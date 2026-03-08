import React from 'react'
import Man from '../Images/man.png'
import { IoArrowForwardOutline } from "react-icons/io5";
import Web from '../Images/WEB DESIGN.png'
import Heading from '../Images/Heading 2.png'
import instragram from '../Images/instragram.png'
import linkedin from '../Images/linkedin.png'
import twitter from '../Images/twitter.png'
import facebook from '../Images/facebook.png'
const Banner = () => {
  return (
    <section>
<div className='container'>
    <div className='flex justify-between items-start relative'>
    <img className='absolute left-[50%] -translate-x-[50%]' src={Man}/>
<div className="w-[25%] mt-[192px] ">
<h2 className='text-[28px] font-bold leading-9 font-rajdhani '>Hello i’m</h2>
<h1 className='text-[90px] font-bold leading-26 font-rajdhani'>Brooklyn
Simmons</h1>
<button className='flex items-center gap-2 bg-[#FF494A] px-7.5 leading-15 rounded-full text-white text-[16px]'>View Portfolio <IoArrowForwardOutline /></button>
</div>
<div className="w-[25%] mt-[192px]">
    <h6 className='text-[16px]   font-bold'>About Me</h6>
    <p className='py-[20px] text-[#5D6570]'>A personal <span className='text-[#FF494A]'> portfolio</span> is a collection of to <br></br>
your work, that is achievements, and a<br></br>
skills that <span className='text-[#FF494A]'> web design </span> highlights in your</p>
    <h6>Find me on</h6>
    <ul className='flex gap-[6px] py-[10px]'>
<li className="p-3.25 bg-gray-300 rounded-full  inline-block">
                        <img src={instragram} alt="" />
                    </li>

                    <li className="p-3.25 bg-gray-300 rounded-full  inline-block">
                        <img src={linkedin} />
                    </li>
                    <li className="p-3.25 bg-gray-300 rounded-full  inline-block" >
                        <img src={twitter} />
                    </li>
                    <li className="p-3.25 bg-gray-300 rounded-full  inline-block" >
                        <img src={facebook} />
                    </li>



    </ul>
   
</div>

    </div>
<div className='pt-[91.08px] pl-[142.5px]'>

    <img src={Web}/>
</div>
<div className='mt-[-60.5px] pl-[270px]'>
<img className='absolute'src={Heading} />
</div>
</div>

    </section>
  )
}

export default Banner