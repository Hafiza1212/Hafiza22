import React from 'react'
import Black from '../Images/black1.png'
import Uparrow from '../Images/UpArrow.png'
const Transform = () => {
  return (
<section>
<div className="container bg-[#F4F4F4] pt-[140px]">
<div className="div1 ">
<h6 className='uppercase  text-[16px] font-medium text-[#FF494A] text-center leading-[28px] tracking-[1px]'>Latest Portfolio</h6>
<h1 className='leading-[60px] font-bold text-[48px] font-rajdhani text-center'>Transforming Ideas into Exceptional</h1>
<p className='leading-[26px] text-center text-[16px] text-[#5D6570] '>Business consulting consultants provide expert advice and guida businesses to help<br></br>
them improve their performance, efficiency, and organizational</p>

</div>
<div className="div2">
    <div className="first w-[50%] mt-[40px]">
        <div className="pl-[25px] pb-[99.52px]">
            <div className="first bg-[#F4F4F4] border-1 border-[#D9DDE0]   rounded-[20px]">
                <img className='px-[20px] py-[20px] ' src={Black}/>

            </div>
            
            <div className="heading mt-[33px] flex justify-between">
<div className="">
<h1 className='text-[24px] font-bold font-rajdhani leading-[30px]'>My Journey as a Creator</h1>
<p className='leading-[30px] text-[16px] font-normal text-[#5D6570]'>Development Coaches</p>

</div>
<div className=" bg-[#F4F4F4] border-[#D9DDE0] rounded-[10px] border-2 ">
    <img className="px-[15.75px] py-[14px]  "src={Uparrow}/>
</div>

            </div>
            
            
            

        </div>
            

            



        </div>




    </div>
</div>




</section>

  )
}

export default Transform