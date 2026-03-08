import React, { useState } from 'react'
import Icon from '../Images/Icon.png'
import Container from '../Images/Container.png'
import facebook from '../Images/facebook.png'
import instragram from '../Images/instragram.png'
import linkedin from '../Images/linkedin.png'
import twitter from '../Images/twitter.png'
import arrow from '../Images/arrow.png'

const NavBar = () => {
    const[show,setShow] = useState(false)
 const  handleClick=()=>{
 setShow(!show);
    }
    return (
        
<div className='bg-[#F4F4F4] py-[21px]'>

<div className='container justify-between items-center flex'>
    
        
            <div className='pb-[200px] '>
                <img src={Container} />
            </div>
            <div className={`${show?"block":"hidden"} lg:block flex items-center lg:text-black text-blue-900  `}>
                <div className='flex gap-[200.87px]'>
                <div className='lg:pb-[200px]  py-[21px] '>
                <ul className='flex-wrap  lg:flex gap-[14px]  font-bold text-[25px] lg:text-[16px]'>
                    <li>Home</li>
                    <li>About</li>
                    <li className='flex items-center gap-[5.19px]'>
                        <h5>Services</h5>
                        <div>
                            <img src={arrow} />
                        </div>
                    </li>
                    <li className='flex items-center gap-[5.19px]'>
                        <h5>Blog</h5>
                        <div>
                            <img src={arrow} />
                        </div>
                    </li>

                    <li className='flex items-center gap-[5.19px]'>
                        <h5>Project</h5>
                        <div>
                            <img src={arrow} />
                        </div>
                    </li>



                    <li>Contact</li>

                </ul>
                </div>

          {/*  </div>
            <div className=' flex  gap-[25.01px]'>
            <div className='flex hidden lg:pt-0  lg:block gap-[25.01px]'>
                <div className='flex gap-[8px]'>*/}
                <div>
<ul className=' flex-wrap py-[21px] '>
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
                </div>
                <div className='pr-[50px] mt-[-180px]'>
                    <img 
  onClick={handleClick} 
   
  src={Icon} 
  
/>
                    </div>
                
          
            
           
            </div>
        </div>





    )
}

export default NavBar