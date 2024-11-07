import React from 'react'
import Link from 'next/link'
const BlogTableItem = ({mongoId,author,date,title,deleteBlog}) => {
  return (
    <tr className='bg-white border-b'>
       <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
           <p>{author? author:"No author"}</p>
       </th>
       <td className='px-6 py-4'>
              {title? title:"no title"}
       </td>
       <td className='px-6 py-4'>
              {date? date:"no date"}
       </td>
       <td onClick={()=>deleteBlog(mongoId)} className='px-6 py-4 cursor-pointer'>
              x
       </td>
      
    </tr>
  )
}
export default BlogTableItem