'use client'
import BlogTableItem from '@/src/Components/AdminComponents/BlogTableItem'
import React, { useState,useEffect } from 'react'
import axios from 'axios';
// import { useRouter } from 'next/router';
const page = () => {
  const [blogs,setBlogs]=useState([]);
  const fetchBlogs = async () => {
    try {
      const response = await axios.get('/API/blogs');
    const list=Object.values(response.data);
    console.log(list);
    setBlogs(list[0]);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };
  const deleteBlog = async (mongoId) => {
    try {
      console.log(mongoId);
      const response = await axios.delete('/API/blogs', {
        params: { id: mongoId } // Ensure parameter key matches server-side expectation
      });
      // Handle success (uncomment if needed)
      Toast.success(response.data.msg);
  
      // Call fetchBlogs to refresh the list
      fetchBlogs();
    } catch (err) {
      console.log('Error occurred:', err);
    }
  };
  useEffect(()=>{
    fetchBlogs();
  },[])
  return (
    <div className='flex-1 pt-5 sm:pt-12 sm:pl-16'>
      <h1>All blogs</h1>
      <div className='relative h-[80vh] max-w-[850px] overflow-x-auto mt-4  scrollbar-hide'>
        <table className='w-full text-sm text-gray-500'>
          <thead className='text-sm text-gray-700 text-left uppercase bg-gray-50'>
            <tr>
              <th scope='col' className='hidden sm:block px-6 py-3 '>
                Author name
              </th>
              <th scope='col' className='px-6 py-3 '>
                Blog Title
              </th>
              <th scope='col' className='px-6 py-3 '>
                Date
              </th>
              <th scope='col' className='px-6 py-3 '>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((item,index)=>(
                <BlogTableItem mongoId={item._id} author={item.author} date={item.date.split('T')[0]} title={item.title} deleteBlog={deleteBlog}/>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default page