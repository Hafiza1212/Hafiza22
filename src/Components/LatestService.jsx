import React from 'react'
import Boy from '../Images/Boy.png'
const LatestService = () => {
    return (
        <section>
            <div className='container'>
                <div className='main mt-[120px]'>
                    <div className="div1">

                        <h3 className='text-[#FF494A] text-[16px] font-medium uppercase lineHeight-[60px] text-center'>Latest Service</h3>
                        <h1 className='text-[48px] font-bold font-rajdhani text-center'>Inspiring The World One Project</h1>
                        <p className='text-[16px] text-[#5D6570] text-center'>Business consulting consultants provide expert advice and guida businesses to help <br></br>
                            them improve their performance, efficiency, and organizational</p>


                    </div>
                    <div className="div2 grid lg:grid-cols-2 mt-[30px]">

<div className="div21 ">
    <div className="pt-[30px] px-[15px] ">

<div className="first  bg-[#F4F4F4] rounded-[20px] mb-[20px] border-r-4 border-b-4 border-red-400 ">
<h1 className=' text-[24px] pt-[34px] font-bold font-rajdhani   pl-[40px] pb-[22px] px-[40px] '>01. A Portfolio of Creativity</h1>
<p className='px-[38px] pb-[34px] text-[#5D6570] '>Business consulting consultants provide expert advice and guida the a 
businesses to help theme their performance efficiency</p>


</div>
<div className="second bg-[#F4F4F4] rounded-[20px]  mb-[20px] border-r-4 border-b-4 border-red-400 ">
<h1 className=' text-[24px] pt-[34px] font-bold font-rajdhani   pl-[40px] pb-[22px] px-[40px] '>02. My Portfolio of Innovation</h1>
<p className='px-[38px] pb-[34px] text-[#5D6570] '>My work is driven by the belief that thoughtful design and strategic
planning can empower brands, transform businesses</p>


</div>


<div className="third bg-[#F4F4F4] rounded-[20px]  mb-[20px] border-r-4 border-b-4 border-red-400 ">
<h1 className=' text-[24px] pt-[34px] font-bold font-rajdhani   pl-[40px] pb-[22px] px-[40px] '>03. A Showcase of My Project</h1>
<p className='px-[38px] pb-[34px] text-[#5D6570] '>In this portfolio, you’ll find a curated selection of projects that highlight
my skills in [Main Areas, e.g., responsive web design</p>


</div>








    </div>
    



</div>
<div className="div22">
<div className="pt-[30px] pl-[85px] pr-[15px]">
    <img src={Boy}/>
        
    </div>



</div>



                    </div>


                </div>




            </div>


        </section>
    )
}

export default LatestService