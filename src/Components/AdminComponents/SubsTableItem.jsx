import React from 'react'
const SubsTableItem = ({email,deleteEmail,mongo_Id,date}) => {
  const emailDate=new Date(date);
  return (
    <tr className='bg-white border-b text-left'>
       <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace'>
              {email? email:"No email"}
       </th>
       <td className='px-6 py-4 hidden sm:block'>{emailDate.toDateString()}</td>
       <td className='px-6 py-4 cursor-pointer' onClick={()=>deleteEmail(mongo_Id)}>x</td>
    </tr>
  )
}
export default SubsTableItem