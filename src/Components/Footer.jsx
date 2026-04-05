import React from 'react'
import Link from '../Images/Link.png'
import Email from '../Images/Email.png'
import BlackMail from '../Images/blackmail.png'
import Position from '../Images/Position.png'
import Hello from '../Images/Hello.png'
import facebook from '../Images/facebook.png'
import instragram from '../Images/instragram.png'
import linkedin from '../Images/linkedin.png'
import twitter from '../Images/twitter.png'

const Footer = () => {
  return (
    <section>
<div className='container  pt-[120px]'>

<div className="pt-[90px] bg-[#F4F4F4] grid lg:grid-cols-3 pb-[120px]">
<div className="one">
    <div className="pt-[30px]">

<div className="pl-[15px] pr-[35px] pb-[19.34px]">
<img className="pr-[383.8px]"src={Link}/>
<h1 className='font-rajdhani leading-[60px]pt-[22px] text-[50px]'><span className='font-bold'>Get Ready To<br></br></span>
Create Great</h1>
<div className="mr-[163.75px] flex justify-between items-center border-b-1 border-r-1 border-[#D9DDE0]">
    <p className='text-[#5D6570] text-start'>Email Adress</p>
    <img src={Email}/>

</div>

</div>


    </div>



</div>
<div className="two">
<div className="pt-[30px]">
    <div className="pl-[25px] pb-[38px] pr-[150px]">
<h1 className='pb-[40px]  font-bold text-[24px] font-rajdhani'>Quick Link</h1>
<ul >
<li className='text-[16px] text-start leading-[30px] font-normal' >About Me</li>
<li className='text-[16px] leading-[30px] font-normal'>Service</li>
<li className='text-[16px] leading-[30px] font-normal'>Contact Us</li>
<li className='text-[16px] leading-[30px] font-normal'>Blog Post</li>
<li className='text-[16px] leading-[30px] font-normal'>Pricing</li>


</ul>

    </div>




</div>


</div>
<div className="three pl-[15px]">
<div className="pt-[30px]">
<h1 className='font-bold font-rajdhani text-[24px]'>Contact</h1>
<div className="main pt-[40px]">
<div className="one  gap-1 flex ">

<div className=" inline-block border-[#D9DDE0] border-1 rounded-[100%]">
    <img className="px-[10px] py-[10px]"src={BlackMail}/>
</div>
<p>nafiz125@gmail.com</p>



</div>

<div className="two pt-[21px] items-center gap-1 flex ">

<div className=" inline-block border-[#D9DDE0] border-1 rounded-[100%]">
    <img className="px-[10px] py-[10px]"src={Position}/>
</div>
<p>3891 Ranchview Dr. Richardson</p>



</div>


<div className="three pt-[21px] items-center gap-1 flex ">

<div className=" inline-block border-[#D9DDE0] border-1 rounded-[100%]">
    <img className="px-[10px] py-[10px]"src={Hello}/>
</div>
<p>01245789321</p>



</div>


</div>
<div className="">
<ul className=' flex gap-2 py-[21px] '>
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



</div>




</div>



    </section>
  )
}

export default Footer