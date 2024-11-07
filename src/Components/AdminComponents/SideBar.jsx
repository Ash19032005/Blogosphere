import { assets } from '@/Assests/assets'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
const SideBar = () => {
  return (
    <div className='flex flex-col bg-slate-100'>
       <div className='px-2 sm:pl-14 py-3 border border-black '>
              <Link href='/'>
              <Image src={assets.logo} width={120} alt='' className='cursor pointer'/>
              </Link>
              
       </div>
       <div className='w-28 sm:w-80 h-[100vh] relative py-12 border-black'>
              <Link href='/admin/AddProduct' className='flex items-center gap-3 font-medium px-3 py-2 border-b border-black'>
                     <Image src={assets.add_icon} alt='' width={28}/><p>Add Blog</p>
              </Link>

              <Link href='/admin/Bloglist' className='flex items-center  gap-3 font-medium px-3 py-2 border-b border-black'>
                     <Image src={assets.blog_icon} alt='' width={28}/><p>Edit Blog</p>
              </Link>

              <Link href='/admin/Subscription' className='flex items-center gap-3 font-medium px-3 py-2 border-b border-black'>
                     <Image src={assets.email_icon} alt='' width={28}/><p>Subscriptions</p>
              </Link>
       </div>
    </div>
  )
}

export default SideBar