"use client";

import { useState } from "react";
import AdminAboutview from "../component/admin-view/about";
import AdminContactview from "../component/admin-view/contact";
import AdminEducationview from "../component/admin-view/education";
import AdminExperienceview from "../component/admin-view/experience";
import AdminHomeview from "../component/admin-view/home";
import AdminProjectview from "../component/admin-view/project";
import { addData } from "@/services";

const initalHomeFromData = {
  heading: "",
  summary: "",
};

const initalAboutFromData = {
  aboutMe:"",
  noofprojects:"",
  yearofexperience:"",
  NumberofClients:"",
  skills:"",
}

const initalEductionFromData ={
  degree:"",
  Year:"",
  collage:"",
  
}

const initalProjectFromData ={
  name:"",
  Teachnology:"",
  websites:"",
  github:"",  
}
const initalExperinceFromData ={
  position:"",
  company:"",
  duration:"",
  location:"",  
  jobprofile:"",  
}



export default function AdminView() {
  const [currentSelectedTab, setCurrentSelectedTab] = useState("home");
  const [homeviewFromData, setHomeViewFromData] = useState(initalHomeFromData);
  const [aboutviewFromData, setAboutViewFromData] = useState(initalAboutFromData);
  const [eductaionviewFromData, setEductaionViewFromData] = useState(initalEductionFromData);
  const [projectviewFromData, setProjectViewFromData] = useState(initalProjectFromData);
  const [experienceviewFromData, setExperienceViewFromData] = useState(initalExperinceFromData);

  const menuItems = [
    {
      id: "home",
      label: "Home",
      component: (
        <AdminHomeview
        formData={homeviewFromData}
        setFormData={setHomeViewFromData}
        handleSaveData={handleSaveData}
        />
      ),
    },
    {
      id: "about",
      label: "About",
      component: (
      <AdminAboutview 
      formData={aboutviewFromData}
      setFormData={setAboutViewFromData}
      handleSaveData={handleSaveData}
      />
      )
    },
    {
      id: "experience",
      label: "Experience",
      component: (<AdminExperienceview
      formData={experienceviewFromData}
      setFormData={setExperienceViewFromData}
      handleSaveData={handleSaveData}
      />),
    },
    {
      id: "eductaion",
      label: "Education",
      component: (<AdminEducationview 
      formData={eductaionviewFromData}
      setFormData={setEductaionViewFromData}
      handleSaveData={handleSaveData}/>),
    },
    {
      id: "project",
      label: "Projects",
      component:( <AdminProjectview 
      formData={projectviewFromData}
      setFormData={setProjectViewFromData}
      handleSaveData={handleSaveData}/>),
    },
    {
      id: "contact",
      label: "Contact",
      component: (<AdminContactview />),
    },
  ];

 
async  function handleSaveData() {
    
  const dataMap = {
    home:homeviewFromData,
    about:aboutviewFromData,
    education:eductaionviewFromData,
    project:projectviewFromData,
    experience:experienceviewFromData,

  }
  const response = await addData(currentSelectedTab,dataMap[currentSelectedTab])
  console.log(response,'response');

  }

  return (
    <div className=" border-b bg-gray-200">
      <nav className="-mb-0.5 flex justify-center space-x-6" role="tablist">
        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className="p-4 font-bold text-xl text-black"
            onClick={() => {
              setCurrentSelectedTab(item.id);
            }}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div className="mt-10 p-10">
        {menuItems.map(
          (item) => item.id === currentSelectedTab && item.component
        )}
      </div>
    </div>
  );
}
