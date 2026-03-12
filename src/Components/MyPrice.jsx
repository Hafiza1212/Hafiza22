import React from 'react'
import Sign from '../Images/Sign.png'
const MyPrice = () => {
    return (
        <section>
            <div className="container py-[120px]">
                <div className="div1">
                    <h3 className='text-[16px] text-center text-[#FF494A] uppercase font-medium leading-[28px] tracking-[1px]'>My Price plan</h3>
                    <h1 className='text-[48px] font-rajdhani font-bold leading-[60px] text-center'>Enhancing Collaboration<br></br>
                        between Remote</h1>


                </div>
                <div className="div2 pt-[20px] gap-[30px] grid lg:grid-cols-3">
                    <div className="one pt-[43px] ">
                        <div className="px-[15px] pt-[30px] bg-[#F4F4F4] rounded-[20px] border-r-2 border-b-2 border-red-300">
                            <h6 className='pt-[38px] pl-[38px] pr-[309px] font-bold text-start'>Starter</h6>
                            <h1 className='text-[48px] px-[38px] text-start font-bold font-rajdhani leading-[60px]'>$ 5.00</h1>
                            <p className='font-bold text-[18px] px-[38px] pt-[3px] pb-[26px]'>Per Month</p>
                            <div className="px-[30px]">
                                <div className="pt-[43px] pb-[38px]">

                                    <div className="one flex gap-[2px]">
                                        <img className="py-[5px]" src={Sign} />
                                        <p className='text-[#5D6570]'>5 Social Media Account</p>
                                    </div>

                                    <div className="two pt-[15px] flex gap-[2px]">
                                        <img className="py-[5px]" src={Sign} />
                                        <p className='text-[#5D6570]'>Free Platform Access</p>
                                    </div>


                                    <div className="three pt-[15px] flex gap-[2px]">
                                        <img className="py-[5px]" src={Sign} />
                                        <p className='text-[#5D6570]'>Free Platform Access</p>
                                    </div>





                                </div>




                            </div>
                            <div className="px-[38px] pb-[37px]">
                                <button className='border-2 px-[25px] border-[#D9DDE0] rounded-[500px] leading-[47px] text-[#2A2D31]'>Get Started</button>
                            </div>
                        </div>





                    </div>
                    <div className="two">
                        <div className="pt-[30px] px-[15px] bg-[#F4F4F4] rounded-[20px] border-r-1 border-b-1 border-[#FF494A]">
                            <div className="py-[40px] ">
                                <h6 className='pt-[38px] pl-[38px] pr-[309px] font-bold font-rajdhani text-start'>Basic</h6>
                                <h1 className='text-[48px] px-[38px] text-start font-bold font-rajdhani leading-[60px]'>$ 230.00</h1>
                                <p className='font-bold text-[18px] px-[38px] pt-[3px] pb-[26px]'>Per Month</p>
                                <div className="px-[30px]">
                                    <div className="pt-[43px] pb-[38px]">

                                        <div className="one flex gap-[2px]">
                                            <img className="py-[5px]" src={Sign} />
                                            <p className='text-[#5D6570]'>5 Social Media Account</p>
                                        </div>

                                        <div className="two pt-[15px] flex gap-[2px]">
                                            <img className="py-[5px]" src={Sign} />
                                            <p className='text-[#5D6570]'>Free Platform Access</p>
                                        </div>


                                        <div className="three pt-[15px] flex gap-[2px]">
                                            <img className="py-[5px]" src={Sign} />
                                            <p className='text-[#5D6570]'>Marketing Platform</p>
                                        </div>

                                        <div className="four pt-[15px] flex gap-[2px]">
                                            <img className="py-[5px]" src={Sign} />
                                            <p className='text-[#5D6570]'>24/7 Customer Support</p>
                                        </div>

                                        <div className="five pt-[15px] flex gap-[2px]">
                                            <img className="py-[5px]" src={Sign} />
                                            <p className='text-[#5D6570]'>Life time support</p>
                                        </div>



                                    </div>




                                </div>
                                <div className="px-[38px] pb-[37px]">
                                    <button className='text-white px-[25px] bg-[#FF494A]  rounded-[500px] leading-[47px] text-[#2A2D31]'>Get Started</button>
                                </div>




                            </div>




                        </div>




                    </div>
                    <div className="three pt-[43px]">
                        <div className="px-[15px] pt-[30px] bg-[#F4F4F4] rounded-[20px] border-r-2 border-b-2 border-red-300">
                            <h6 className='pt-[38px] pl-[38px] pr-[309px] font-bold text-start'>Premium</h6>
                            <h1 className='text-[48px] px-[38px] text-start font-bold font-rajdhani leading-[60px]'>$ 45.00</h1>
                            <p className='font-bold text-[18px] px-[38px] pt-[3px] pb-[26px]'>Per Month</p>
                            <div className="px-[30px]">
                                <div className="pt-[43px] pb-[38px]">

                                    <div className="one flex gap-[2px]">
                                        <img className="py-[5px]" src={Sign} />
                                        <p className='text-[#5D6570]'>5 Social Media Account</p>
                                    </div>

                                    <div className="two pt-[15px] flex gap-[2px]">
                                        <img className="py-[5px]" src={Sign} />
                                        <p className='text-[#5D6570]'>Free Platform Access</p>
                                    </div>


                                    <div className="three pt-[15px] flex gap-[2px]">
                                        <img className="py-[5px]" src={Sign} />
                                        <p className='text-[#5D6570]'>Free Platform Access</p>
                                    </div>





                                </div>




                            </div>
                            <div className="px-[38px] pb-[37px]">
                                <button className='border-2 px-[25px] border-[#D9DDE0] rounded-[500px] leading-[47px] text-[#2A2D31]'>Get Started</button>
                            </div>
                        </div>





                    </div>


                </div>



            </div>



        </section>
    )
}

export default MyPrice