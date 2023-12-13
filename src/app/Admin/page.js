'use client'

import { useState } from "react"
import AdminAboutview from "../component/admin-view/about"
import AdminContactview from "../component/admin-view/contact"
import AdminEducationview from "../component/admin-view/education"
import AdminExperienceview from "../component/admin-view/experience"
import AdminHomeview from "../component/admin-view/home"
import AdminProjectview from "../component/admin-view/project"

export  default function AdminView() {
  
  const [currentSelectedTab, setCurrentSelectedTab] = useState('home')
  
  const menuItems = 
  [
    {
      id: 'home',
      label: 'Home',
      component: <AdminHomeview/>
    },
    {
      id: 'about',
      label: 'About',
      component:<AdminAboutview/>
    },
    {
      id: 'experience',
      label: 'Experience',
      component:<AdminExperienceview/>
    },
    {
      id: 'eductaion',
      label: 'Education',
      component:<AdminEducationview/>
    },
    {
      id: 'project',
      label: 'Projects',
      component:<AdminProjectview/>
    },
    {
      id: 'contact',
      label: 'Contact',
      component:<AdminContactview/>
    },
  ]

  return(
    <div className=" border-b bg-gray-200">
      <nav className="-mb-0.5 flex justify-center space-x-6"
      
      role="tablist">
        {
          menuItems.map(item=>(
            <button key={item.id} type="button" className="p-4 font-bold text-xl text-black"
            onClick={ ()=>{
              setCurrentSelectedTab(item.id)
            }}>
              {item.label}
            </button>
          ))
        }

      </nav>
      <div className="m-10">
        {
          menuItems.map(item=> item.id === currentSelectedTab && item.component)
        }

      </div>

    </div>
  )
}