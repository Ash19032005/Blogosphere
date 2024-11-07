import { assets, blog_data } from '@/Assests/assets'
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect } from 'react'
const BlogItem = ({key,image,category,title,description,id}) => {
  // useEffect(()=>{
  //   console.log(id);
  // },[id])
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000] transition ease-in-out delay-50'>
              <Image src={image} alt='' width={400} height={400} classname='border-b border-black'/>
              <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>{category}</p>
              <div key={key} className='p-5'>
                     <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title} </h5>
                     <p className='mb-3 text-sm tracking-tight text-gray-700' >{description}</p>
                      <Link href={`/${id}`} className='inline-flex items-center py-2 font-semibold text-center gap-2'>
                      Read more <Image src={assets.arrow} width={12}/>
                      </Link>
              </div>
    </div>
  )
}
export default BlogItem