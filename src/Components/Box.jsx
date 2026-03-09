import React from 'react'
import Linear  from '../Images/linear.png'
import Framer from '../Images/Framer.png'
import Notion from '../Images/Notion.png'
import Slack from '../Images/slack.png'
import Medium  from '../Images/Medium.png'
import Upwork from '../Images/Upwork.png'
import Amazon from '../Images/Amazon.png'
import Asana from '../Images/Asana.png'



const Box = () => {
  return (
    <section>
<div className="container">
<div className="main  py-[120px]">
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







</div>




</div>


    </section>
  )
}

export default Box