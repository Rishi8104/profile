'use client'
import FormController from "../from-contorls"


const controls = [
  {
    name: "name",
    placeholder: "Enter  Projectname",
    type: "text",
    label: "Enter Project Name",
  },
  {
    name: "Teachnology",
    placeholder: "Enter Technology",
    type: "text",
    label: "Enter Technology",
  },
  {
    name: "websites",
    placeholder: "Enter Website",
    type: "text",
    label: "Enter website",
  },
  {
    name: "github",
    placeholder: "Enter github",
    type: "text",
    label: "Enter Github code Link",
  },
];
 export default function AdminProjectview({formData, setFormData, handleSaveData}) {
  
  return(
    <div className="w-full">
    <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <FormController
        controls={controls}
        formData={formData}
        setFormData={setFormData}
      />
      <button onClick={()=>handleSaveData('project')} className="mt-[10px] border border-green-600 p-4 font-bold text-[16px]">
        Add Info
      </button>
    </div>
  </div>
  )
}