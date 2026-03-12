import React from 'react'
import Shadow from '../Images/Shadow.png'
import Number from '../Images/Number.png'


const Experience = () => {
    return (
        <section>
            <div className='container mt-[90px] mb-[120px]'>


                <div className='main grid lg:grid-cols-2 gap-[30px]'>

                    <div className="div1 pt-[30px] pb-[120px]  ">

<div className="pt-[30px] px-[15px] rounded-[20px] bg-[#F4F4F4]  ">

<div className="div-11 px-[52px] pt-[36px]  grid lg:grid-cols-2 items-center  pb-[115px]">
<img src={Number}/>
<h1 className='sm:text-start pb-[39px] font-bold text-[35.1px] font-rajdhani'>Years Of
experience</h1>
 
</div>

<div className='pb-[51px] text-center px-[52px] mt-[-128px]'>
  <p>Business consulting consultants provide expert advice and guida the
a businesses to help theme their performance efficiency</p> 

</div>

</div>






                    </div>
                    <div className="div2 pt-[32px] gap-[30px]   ">

                        <div className="div21  gap-[30px] grid lg:grid-cols-2 ">
                            <div className="bg-[#F4F4F4] border-r-4 border-b-4 border-red-400 rounded-[30px]">

                                <h1 className='text-[48px] text-center font-bold px-[86px] pt-[35px] font-rajdhani '>20K+</h1>

                                <p className='text-[16px] text-center font-normal  pb-[32px]'>Our Project Complete</p>
                            </div>
                            <div className="bg-[#F4F4F4] border-r-4 border-b-4 border-red-400 rounded-[30px]">

                                <h1 className='text-[48px] text-center font-bold px-[86px] pt-[35px] font-rajdhani '>10K+</h1>

                                <p className='text-[16px] text-center font-normal  pb-[32px]'>Our Natural Products</p>
                            </div>
                        </div>
                        <div className="div22 grid lg:grid-cols-2 gap-[30px] pt-[32px] ">

                            <div className="bg-[#F4F4F4] border-r-4 border-b-4 border-red-400 rounded-[30px]">

                                <h1 className='text-[48px] text-center font-bold px-[86px] pt-[35px] font-rajdhani '>200+</h1>

                                <p className='text-[16px] text-center font-normal  pb-[32px]'>Clients Reviews</p>
                            </div>
                            <div className="bg-[#F4F4F4] border-r-4 border-b-4 border-red-400 rounded-[30px]">

                                <h1 className='text-[48px] text-center font-bold px-[67px] pt-[35px] font-rajdhani '>1,000+</h1>

                                <p className='text-[16px] text-center font-normal  pb-[32px]'>Clients Reviews</p>
                            </div>


                        </div>




                    </div>

                </div>


            </div>




        </section>
    )
}

export default Experience