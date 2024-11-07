'use client'
import { assets } from '@/Assests/assets'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify'

const page = () => {
  const [Img,setImage]=useState(false);
  const [data,setData]=useState({
    title:"",
    description:"",
    category:"startUp",
    author:"Alex Bennett",
    authorImg:'/author_img.png',
  }
  )

  const onChangeHandler=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setData(data=>({...data,[name]:value}))
    console.log(data);
  }

  const onSubmithandler=async(event)=>{
      event.preventDefault();
      const formData=new FormData();
      formData.append('title',data.title);
      formData.append('description',data.description);
      formData.append('category',data.category);
      formData.append('author',data.author);
      formData.append('image',Img);
      formData.append('authorImg',data.authorImg);
      for (let [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
    }
    try{
      const res=await axios.post('/API/blogs',formData);
      if(res.data.success){
          Alert(res.data.msg);
          setImage(false);
          setData({
            title:"",
            description:"",
            category:"startUp",
            author:"Alex Bennett",
            authorImg:'@public/',
          }
          );
        
      }
      else{
          toast.error(res.data.msg);
      }
    }
    catch(err){
      console.log("The error is:",err);

    }

  }
  return (
    <>
    <form onSubmit={onSubmithandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
        <p className='text-xl'>Upload thumbnail</p>
        <label htmlFor='image'
        >
          {!Img? <Image name='image'  className='mt-4' width={150} height={150} src={assets.upload_area}  alt=''/>:
          <Image name='image'  className='mt-4' width={150} height={150}  src={URL.createObjectURL(Img)}  alt=''/>} 

        {/* <Image name='image' className='mt-4' width={200}  height={200} src={!Img? assets.upload_area:URL.createObjectURL(Img)}  alt=''/> */}
          
        </label>
        <input type='file' id='image' onChange={(e) => {
          console.log(e.target.files[0]);
          setImage(e.target.files[0]);
        }} hidden required/>

        <p className='text-xl mt-4'>Blog Title</p>
        <input name='title' onChange={onChangeHandler} value={data.title} type='text' placeholder='Type here' className='w-full sm:w-[500px] mt-4 py-3 px-2 border outline-none'/>
        <p className='text-xl mt-4'>Blog description</p>
        <textarea name='description' onChange={onChangeHandler} value={data.description} type='text' placeholder='write Content here' className='w-full sm:w-[500px] mt-4 py-3 px-2 border outline-none'/>
        <p className='text-xl mt-4'>Blog Category</p>
        <select name='category' onChange={onChangeHandler} value={data.category}className='w-40 mt-4 px-4 py-3 border text-gray outline-none'>
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="LifeStyle">LifeStyle</option>
        </select>
        <br/>
        <button type='submit' className='mt-8 w-40 h-12 bg-black text-white mb-10'>Add</button>
        
    </form>
    </>
  )
}
export default page