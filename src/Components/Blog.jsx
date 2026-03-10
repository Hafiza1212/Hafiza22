import React from 'react'
import Laptop from '../Images/Laptop.png'
import Laptop2 from '../Images/Laptop2.png'
import Mobile from '../Images/Mobile.png'

const Blog = () => {
    return (
        <section>
            <div className='container'>
                <div className="div1">
                    <h6 className='tracking-[1px] leading-[28px] font-medium text-[16px] text-center  text-[#FF494A]'>Blog and news</h6>
                    <h1 className='text-[48px] text-center font-bold leading-[60px] font-rajdhani'>Elevating Personal Branding the<br></br>
                        through Powerful Portfolios</h1>

                </div>
                <div className="div2 pt-[20px] flex">
                    <div className="one">
                        <div className="pt-[30px]    px-[15px]">
                            <div className='rounded-[20px] border-[1px] border-[#D9DDE0]'>
                                <img src={Laptop} />
                                <div className="">
                                    <h1 className='px-[30px] pt-[30px] pb-[16px]  font-bold font-rajdhani text-[24px] leading-[30px]'>Let’s bring your ideas to life!<br></br>
                                        Contact me, and let’s</h1>
                                    <p className='text-[#5D6570] text-[13px] pb-[31px] uppercase tracking-[.5px] leading-[27px] pl-[30px]'>Read More </p>
                                </div>
                            </div>
                        </div>


                    </div>
                    
 <div className="two">
                        <div className="pt-[30px]    px-[15px]">
                            <div className='rounded-[20px] border-[1px] border-[#D9DDE0]'>
                                <img src={Laptop2} />
                                <div className="">
                                    <h1 className='px-[30px] pt-[30px] pb-[16px]  font-bold font-rajdhani text-[24px] leading-[30px]'>Inspiring the World, One Project  <br></br>a Time for the man</h1>
                                    <p className='text-[#5D6570] pb-[31px] text-[13px] uppercase tracking-[.5px] leading-[27px] pl-[30px]'>Read More </p>
                                </div>
                            </div>
                        </div>


                    </div>                   




<div className="three">
                        <div className="pt-[30px]    px-[15px]">
                            <div className='rounded-[20px] border-[1px] border-[#D9DDE0]'>
                                <img src={Mobile} />
                                <div className="">
                                    <h1 className='px-[30px] pt-[30px] pb-[16px]  font-bold font-rajdhani text-[24px] leading-[30px]'>Each one showcases my approach<br></br>
and dedication man
</h1>
                                    <p className='text-[#5D6570] pb-[31px] text-[13px] uppercase tracking-[.5px] leading-[27px] pl-[30px]'>Read More </p>
                                </div>
                            </div>
                        </div>


                    </div>                   




                   
                </div>

            </div>


        </section>
    )
}

export default Blog