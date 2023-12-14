'use client'

import FormController from "../from-contorls"


const controls = [
  {
    name: "position",
    placeholder: "Enter position",
    type: "text",
    label: "Enter position",
  },
  {
    name: "company",
    placeholder: "Enter  company",
    type: "text",
    label: "Enter company",
  },
  {
    name: "duration",
    placeholder: "Enter duration",
    type: "text",
    label: "Enter duration ",
  },
  {
    name: "location",
    placeholder: "Enter location",
    type: "text",
    label: "Enter location",
  },
  {
    name: "jobprofile",
    placeholder: "Enter jobprofile",
    type: "text",
    label: "Enter jobprofile",
  },
];



 export default function AdminExperienceview({formData,setFormData,handleSaveData}) {
  
  return(
    <div className="w-full">
    <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <FormController
        controls={controls}
        formData={formData}
        setFormData={setFormData}
      />
      <button onClick={()=>handleSaveData('experience')} className="mt-[10px] border border-green-600 p-4 font-bold text-[16px]">
        Add Info
      </button>
    </div>
  </div>
  )
}