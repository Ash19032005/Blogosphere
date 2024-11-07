
import { assets } from '@/Assests/assets'
import SideBar from '@/src/Components/AdminComponents/SideBar'
import Image from 'next/image'
import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const layout = ({children}) => {
  return (
       <>
            <div className='flex'>
              <ToastContainer theme='dark'/>
               <SideBar/>
               <div className='flex flex-col w-full'>
                      <div className='flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black'>
                        <h3 className='flex items-center'>Admin Panel</h3>
                        <Image src={assets.profile_icon} width={40} alt="" />
                      </div>
                      {children}
               </div>
            </div>
             
             {/* After the div, it renders {children}, which means any content or 
             components nested within the layout component when 
             it is used will be displayed here. */}
            </>
  )
}

export default layout



