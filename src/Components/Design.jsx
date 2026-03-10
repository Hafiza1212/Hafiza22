import React from 'react'
import Web from '../Images/Web.png'
import UX from '../Images/UX.png'
import Bulb from '../Images/Bulb.png'
import Mail from '../Images/Mail.png'




const Design = () => {
    return (
        <section>
            <div className='container'>

                <div className='main gap-[15px] mt-[300px] mb-[90px] flex w-full  '>


              <div className="div1 mt-[30px] px-[15px] border-1 text-center  border-[#FF494A]/16 rounded-[20px]">

               <img className='m-auto  pt-[20px] mx-[122.12px] border-box  ' src={Web}/>

<h2 className='text-[24px] font-bold font-rajdhani pt-[30px]'>Web Design</h2>
<p className='m-0 font-normal text-[16px] pt-[9px] pb-[41px] px-[101.12px] text-[#5D6570] whitespace-nowrap'>120 Projects</p>

              </div>
                    

<div className="div2 mt-[30px] px-[15px] border-1 text-center  border-[#FF494A]/16 rounded-[20px]">

               <img className='m-auto  pt-[20px] mx-[122.12px] border-box ' src={UX}/>

<h2 className='text-[24px] font-bold font-rajdhani pt-[30px]'>Ui/Ux Design</h2>
<p className='m-0 font-normal text-[16px] pt-[9px] px-[101.12px] pb-[41px] text-[#5D6570] whitespace-nowrap'>241 Projects</p>

              </div>


              <div className="div3 mt-[30px] px-[15px] border-1 text-center border-box  border-[#FF494A]/16 rounded-[20px]">

               <img className='m-auto  pt-[20px] mx-[122.12px] pb-[142.5px]border-box ' src={Bulb}/>

<h2 className='text-[24px] font-bold font-rajdhani pt-[30px]'>Web Research</h2>
<p className='m-0 font-normal text-[16px] pt-[9px] pb-[41px] px-[101.12px] text-[#5D6570] whitespace-nowrap'>240 Projects</p>

              </div>

<div className="div4 mt-[30px] px-[15px] border-1 text-center border-box border-[#FF494A]/16 rounded-[20px]">

               <img className='m-auto  pt-[20px] mx-[122.12px]  ' src={Mail}/>

<h2 className='text-[24px] font-bold font-rajdhani pt-[30px]'>Marketing</h2>
<p className='m-0 font-normal text-[16px] pt-[9px] pb-[20px] px-[101.12px] text-[#5D6570] whitespace-nowrap'>331 Projects</p>

              </div>
                   
                    
                    
                    



               </div>



            </div>



        </section>
    )
}

export default Design