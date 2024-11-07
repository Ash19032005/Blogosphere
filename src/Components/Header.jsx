import { assets } from '@/Assests/assets'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
const Header = () => {
  const [email,setEmail]=useState("");
  const onSubmitHandler = async (e) => {
       e.preventDefault();
       const formData = new FormData();
       formData.append("email", email);
       try {
         const response = await axios.post('/API/email', formData);
     
         if (response.data.success) {
           setEmail("");  // Clear the input field
           setTimeout(() => alert(response.data.msg), 0);  // Trigger alert after state update
         } else {
           console.log("error");
         }
       } catch (error) {
         console.error("API request failed", error);
       }
     };

  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
       <div className='flex justify-between items-center'>
              <Link href='/'>
                  <Image src={assets.logo} width={180} alt='' className='w-[130px] cursor-pointer' />
              </Link>
              <Link href='/admin/AddProduct'><button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black hover:shadow-[-7px_7px_0px_#000000] transition ease-in-out delay-50'>Get started <Image src={assets.arrow}/></button>
              </Link>       </div>
       <div className='text-center my-8'>
              <h1 className='text-3xl sm:text-5xl font-medium'>Latest blogs</h1>
              <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi atque aliquam aliquid doloribus consectetur aspernatur, hic distinctio similique pariatur, id, minima placeat! Nemo ex sed rerum, cum aut optio perferendis?</p>
              <form onSubmit={onSubmitHandler} className='flex justify-between max-w-[500px] scale-100 sm:scale-100 mx-auto  mt-10 border border-black'>
                     <input onChange={(e)=>{setEmail(e.target.value)}} type='email' placeholder='Enter your email' className='pl-4 outline-none'/>
                     <button type='submit' className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Subscribe</button>
              </form>
       </div>
    </div>
  )
}

export default Header