'use client'

import FormControls from "../from-contorls";


const controls = [
  {
    name: "degree",
    placeholder: "Degree name",
    type: "text",
    label: "Enter Degree name",
  },
  {
    name: "Year ",
    placeholder: "year",
    type: "text",
    label: "Enter Year",
  },
  {
    name: "collage",
    placeholder: " collagename",
    type: "text",
    label: "Enter Your Collagename",
  },
];
 export default function AdminEducationview({setFormData, formData, handleSaveData}) {
  
  return(
    <div className="w-full">
      <div className="bg-white shadow-md rounded px-8 pt-6 pn-8 mb-4">
        <FormControls
       controls ={controls}
       formData ={formData}
       setFormData={setFormData}
        />
      </div>
      <button onClick={()=>handleSaveData('education')} className="mt-[10px] border border-green-600 p-4 font-bold text-[16px]">
          Add Info
        </button>
    </div>
  )
}