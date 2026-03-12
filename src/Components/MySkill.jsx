import React from 'react'
import Homee from '../Images/Home2.png'
import Left from '../Images/LeftArrow.png'
import Curt from '../Images/Curt.png'
import Pen from '../Images/Pen.png'
const MySkill = () => {
  return (
    <section>
        <div className="container py-[120px] bg-[#F4F4F4]">

<div className="div1">
<h6 className='uppercase leading-[28px] font-medium text-[16px] font-semibold text-[#FF494A] tracking-[1px] font-rajdhani'>My Skill</h6>
<h1 className='font-bold text-[48px] leading-[60px] font-rajdhani'>Elevated Designs Personalized<br></br>
the best Experiences</h1>

</div>

<div className="div2 mt-[60px]">
<div className="div21 lg:flex items-center bg-red-500">
    <div className="one flex lg:justify-start justify-center pl-[20px]">
       <img src={Homee}/>

    </div>
    <div className="two px-[132.61px]">
<h1 className='text-[32px] text-center lg:text-start font-bold font-rajdhani leading-[42px]'>Ui/visual Design</h1>
<p className='text-[18px] leading-[27px] text-center lg:text-start font-normal font-rajdhani'>21 Done</p>

    </div>
    <div className="three">
<p className='leading-[30px] text-center lg:text-start font-normal text-[16px] text-[#5D6570]'>My work is driven by the belief that thoughtful design and<br></br>
strategic planningcan empower brands strategic planning<br></br>
can empower brands</p>

    </div>
    <div className="four items-center flex justify-center lg:justify-start  gap-[6.5px] lg:pr-[20px] pt-[72px] pb-[61px] lg:pl-[132.61px]">
        <h4 className='font-bold font-rajdhani uppercase tracking-[1.28px] leading-[32px]'>Read More </h4>
        <img className='py-[9px] ' src={Left}/>
    </div>



</div>


<div className="div22 lg:flex items-center">
    <div className="one flex lg:justify-start justify-center pl-[20px]">
       <img src={Curt}/>

    </div>
    <div className="two px-[132.61px]">
<h1 className='text-[32px] text-center lg:text-start font-bold font-rajdhani leading-[42px]'>Ui/visual Design</h1>
<p className='text-[18px] leading-[27px] text-center lg:text-start font-normal font-rajdhani'>21 Done</p>

    </div>
    <div className="three">
<p className='leading-[30px] text-center lg:text-start text-[#5D6570] font-normal text-[16px]'>In this portfolio, you’ll find a curated selection of projects<br></br>
that highlight my skills in Main Areas, e.g., responsive web
design</p>

    </div>
 <div className="four items-center flex justify-center lg:justify-start  gap-[6.5px] lg:pr-[20px] pt-[72px] pb-[61px] lg:pl-[132.61px]">
        <h4 className='font-bold whitespace-nowrap font-rajdhani uppercase tracking-[1.28px] leading-[32px]'>Read More </h4>
        <img className='py-[9px] ' src={Left}/>
    </div>
   



</div>


<div className="div23 lg:flex items-center">
    <div className="one flex lg:justify-start justify-center pl-[20px]">
       <img src={Pen}/>

    </div>
    <div className="two px-[132.61px]">
<h1 className='text-[32px] text-center lg:text-start font-bold font-rajdhani leading-[42px]'>Motion Design</h1>
<p className='text-[18px] leading-[27px] text-center lg:text-start font-normal font-rajdhani'>21 Done</p>

    </div>
    <div className="three">
<p className='leading-[30px] text-center lg:text-start text-[#5D6570] font-normal text-[16px]'>Each project here showcases my commitment to excellence
and adaptability, tailored to meet each client’s unique needs
</p>

    </div>
 <div className="four items-center flex justify-center lg:justify-start  gap-[6.5px] lg:pr-[20px] pt-[72px] pb-[61px] lg:pl-[132.61px]">
        <h1 className='font-bold whitespace-nowrap font-rajdhani uppercase tracking-[1.28px] leading-[32px]'>Read More </h1>
        <img className='py-[9px] ' src={Left}/>
    </div>
   



</div>







</div>


        </div>



    </section>
  )
}

export default MySkill