'use client'

import FormControls from "../from-contorls";


const controls = [
  {
    name: "aboutMe",
    placeholder: "Aboutme",
    type: "text",
    label: "Enter heading text",
  },
  {
    name: "noofprojects",
    placeholder: "No of projects",
    type: "text",
    label: "Enter No of projects",
  },
  {
    name: "yearofexperience",
    placeholder: "No of experience",
    type: "text",
    label: "Enter No of experience",
  },
  {
    name: "NumberofClients",
    placeholder: "No of Clients",
    type: "text",
    label: "Enter No of Clients",
  },
  {
    name: "skills",
    placeholder: "skills",
    type: "text",
    label: "skills",
  },
];
 export default function AdminAboutview({ setFormData, formData, handleSaveData}) {
  
  return<div className=" w-full">
    <div className=" bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <FormControls
      controls ={controls}
      formData ={formData}
      setFormData={setFormData}
      ></FormControls>
      <button onClick={()=>handleSaveData('About')} className="mt-[10px] border border-green-600 p-4 font-bold text-[16px]">
          Add Info
        </button>
    </div>

  </div>;
  
}