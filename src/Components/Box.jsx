import React from 'react'
import Linear from '../Images/Linear.svg'
import Framer from '../Images/Framer2.svg'
import Notion from '../Images/Notion.svg'
import Slack from '../Images/Slack.svg'
import Medium from '../Images/Medium.svg'
import Upwork from '../Images/Upwork.svg'
import Amazon from '../Images/Amazon.svg'
import Asana from '../Images/Asana.svg'

const Box = () => {
  return (
    <section>
      <div className="container my-[120px]">
        {/* <div className="main  py-[120px]">
<div className="div1 flex  items-center">
<div className="div11 border-1 border-[#D9DDE0] ">
<img className="py-[48.5px] pl-[66.1px] pr-[68px] "src={Linear}/>


</div>
<div className="div12 border-1 border-[#D9DDE0] ">
  <img className="py-[48.5px] pl-[66.22px] pr-[68px] "src={Framer}/>  
</div>
<div className="div13 border-1 border-[#D9DDE0] ">
<img className="py-[48.5px] pl-[66.22px] pr-[68px] "src={Notion}/>


</div>
<div className="div14 border-1 border-[#D9DDE0] ">
<img className="py-[48.5px] pl-[66.22px] pr-[68px] "src={Slack}/>

</div>


</div>





<div className="div2  flex items-center">
<div className="div21 ">
<img className="py-[52.5px] pl-[66.1px] pr-[68px] border-r-1 border-l-1 border-b-1 border-[#D9DDE0]"src={Medium}/>


</div>
<div className="div22">
  <img className="py-[48.5px] pl-[66.22px] pr-[68px] border-r-1 border-b-1 border-[#D9DDE0]"src={Upwork}/>  
</div>
<div className="div23">
<img className="py-[48.5px] pl-[66.22px] pr-[68px] border-r-1 border-b-1 border-[#D9DDE0]"src={Amazon}/>


</div>
<div className="div24">
<img className="py-[48.5px] pl-[66.22px] pr-[68px] border-r-1 border-b-1 border-[#D9DDE0]"src={Asana}/>

</div>


</div>







</div> */}
        <div className="div1 grid lg:grid-cols-4 ">
          <img className='border-1 sm:border-l-0 sm: w-full m-auto border-[#D9DDE0]' src={Linear} />
          <img className='border-1 sm: w-full m-auto border-[#D9DDE0]' src={Framer} />
          <img className='border-1 sm: w-full m-auto border-[#D9DDE0]' src={Notion} />
          <img className='border-1 sm: w-full m-auto border-[#D9DDE0]' src={Slack} />




        </div>
        <div className="div2  grid lg:grid-cols-4">
          <img className='border-1 sm: w-full m-auto border-[#D9DDE0]' src={Medium} />
          <img className='border-1 sm: w-full m-auto border-[#D9DDE0]' src={Upwork} />
          <img className='border-1 sm: w-full m-auto border-[#D9DDE0]' src={Amazon} />
          <img className='border-1 sm: w-full m-auto border-[#D9DDE0]' src={Asana} />



        </div>



      </div>


    </section>
  )
}

export default Box