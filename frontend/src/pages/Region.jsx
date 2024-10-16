import React from 'react'
import Shorting_elem from '../components/Shorting_elem'
import Sidenavbar from '../components/Sidenavbar'

const Region = () => {
  return (
    <div className="w-full box-border h-screen overflow-hidden flex">
    <div className="w-[20%] h-full bg-white p-5">
      <Sidenavbar />
    </div>
    <div className="w-[80%]">
      <div className="fillterelem w-full relative bg-gray-100">
        <Shorting_elem
          onFilterChange={()=>{}}
          insights={[]}
          s={{ endYear: false, topic: false, sector: false, country: false, region: false }}
        />
      </div>
      <div className="graph w-full h-screen overflow-auto bg-gray-100 p-5">
      <div className=" h-full bg-white rounded-md text-xl flex items-center justify-center ">
          <p className="w-2/3">
            <strong>Hello Sir,</strong><br/>
            It is very difficult to think about what kind of data to
            show because, according to me, in graph representation, we usually
            show numerical values. I believe I have covered all the numerical
            values, so I consider my work complete. <br/>
            <strong>Thank you for the</strong>
            opportunity. If my work impresses you, please consider giving me a
            chance for an internship. Thank you, Sir.</p>
          </div>
      </div>
    </div>
  </div>
  )
}

export default Region
