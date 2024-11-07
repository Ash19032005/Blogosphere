"use client"
import SubsTableItem from '@/src/Components/AdminComponents/SubsTableItem'
import axios from 'axios';
import React from 'react'
import { useEffect, useState} from 'react';
import { toast } from 'react-toastify';
const page = () => {
  const [emails,setEmails]=useState([]);
  const fetchEmails=async()=>{
    const response=await axios.get('/API/email');
    setEmails(response.data.emails);
  }
  const deleteEmails=async(mongo_Id)=>{
    const response=await axios.delete('/API/email',{
      params:{
        id:mongo_Id
      }
    })
  if(response.data.success){
    toast.success(response.data.msg);
    fetchEmails();
  }
}
  useEffect(()=>{
    fetchEmails();
  },[]);
  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
      <h1>Subscription</h1>
      <div className='relative max-w-[600px] h-[80vh] overflow-x-auto mt-4  scrollbar-hide'>
          <table className='w-full text-sm text-gray-500'>
            <thead className='text-xs text-left text-gray-700 uppercase bg-gray-50'>
                <tr>
                  <th scope='col' className='px-6 py-3'>
                    Email Subscription
                  </th>
                  <th scope='col' className='hidden sm:block px-6 py-3'>
                    Date
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Action
                  </th>
                </tr>
            </thead>
            <tbody>
              {emails.map((item,index)=>{
                return <SubsTableItem key={index} mongo_Id={item._id} deleteEmail={deleteEmails} email={item.email} date={item.date}/>
              })}
            </tbody>
          </table>
      </div>
    </div> 
  )
}

export default page
