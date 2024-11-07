'use client'
import { assets } from '@/Assests/assets';
import Image from 'next/image';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
const Page = () => {
  const [data, setData] = useState(null);
  const router = useRouter();
  const { id: queryId } = router.query; // Extracting id from the route parameters
  const fetchBlogData = async () => {
    const blogId = queryId;
    console.log(blogId) // Use the id prop or the query parameter
    if (blogId) {
      try {
        const response = await axios.get('/API/blogs', {
          params: { blogId } // Passing the id as a query parameter
        });
        setData(response.data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, [queryId]);

  return (
    data ? (
       <>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28 '>
      <div className='flex justify-between items-center'>
        <Link href={`../`}>
        <Image src={assets.logo} alt='' width={180}/></Link>
        <Link href='/admin/AddProduct'><button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black hover:shadow-[-7px_7px_0px_#000000] transition ease-in-out delay-50'>Get started <Image src={assets.arrow}/></button>
              </Link> 
      </div>
      <div className='text-center my-24'>
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto' >{data.title}</h1>
        <Image className='mx-auto mt-6 border border-white rounded-full' src={data.author_img} width={60} height={60}/>
        <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
      </div>
    </div>
    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
      <Image className='border-4 center border-white priority' src={data.image} width={1100} height={720} alt=''/>
      <h1 className='my-8 text-[26px] font-semibold'>Introduction:</h1>
      <p>{data.description}</p>
      <h3 className='my-5 text-[18px] font-semibold'>Step 1:Self-reflection and Goal setting</h3>
      <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nihil sint consectetur accusamus, asperiores dolorem exercitationem vitae, aliquam possimus expedita ipsa magni reiciendis minima ratione voluptatem est animi dolores adipisci?</p>
      <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nihil sint consectetur accusamus, asperiores dolorem exercitationem vitae, aliquam possimus expedita ipsa magni reiciendis minima ratione voluptatem est animi dolores adipisci?</p>
      <h3 className='my-5 text-[18px] font-semibold'>Step 1:Self-reflection and Goal setting</h3>
      <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nihil sint consectetur accusamus, asperiores dolorem exercitationem vitae, aliquam possimus expedita ipsa magni reiciendis minima ratione voluptatem est animi dolores adipisci?</p>
      <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nihil sint consectetur accusamus, asperiores dolorem exercitationem vitae, aliquam possimus expedita ipsa magni reiciendis minima ratione voluptatem est animi dolores adipisci?</p>
      <h1 className='my-8 text-[26px] font-semibold'>Conclusion:</h1> 
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur modi dicta voluptates, numquam quo quia et vero. Ratione beatae aut dignissimos doloremque expedita omnis cumque quis officiis optio suscipit vitae, alias possimus delectus harum nemo tenetur et debitis. Commodi temporibus quaerat consectetur nobis neque distinctio eveniet porro dolore amet natus.</p>
      <div className='my-24'>
        <p className='text-black font-semibold my-4'>Share this article on:</p>
        <div className='flex'>
          <Image src={assets.facebook_icon} width={50} alt=''/>
          <Image src={assets.twitter_icon} width={50} alt=''/>
          <Image src={assets.googleplus_icon} width={50} alt=''/>

        </div>
      </div>
    </div>
    </>) : <div>Data not found</div>
  );
};

export default Page;
//       <>
//         <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28 '>
//           <div className='flex justify-between items-center'>
//             <Link href="/">
//               <Image src={assets.logo} alt='' width={180} />
//             </Link>
//             <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black hover:shadow-[-7px_7px_0px_#000000] transition ease-in-out delay-50'>
//               Get Started
//               <Image src={assets.arrow} alt='' />
//             </button>
//           </div>
//           <div className='text-center my-24'>
//             <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
//             <Image className='mx-auto mt-6 border border-white rounded-full' src={data.author_img} width={60} height={60} />
//             <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
//           </div>
//         </div>
//         <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
//           <Image className='border-4 border-white' src={data.image} width={1280} height={720} alt='' />
//           <h1 className='my-8 text-[26px] font-semibold'>Introduction:</h1>
//           <p>{data.description}</p>
//           <h3 className='my-5 text-[18px] font-semibold'>Step 1:Self-reflection and Goal setting</h3>
//           <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nihil sint consectetur accusamus, asperiores dolorem exercitationem vitae, aliquam possimus expedita ipsa magni reiciendis minima ratione voluptatem est animi dolores adipisci?</p>
//           <h3 className='my-5 text-[18px] font-semibold'>Step 1:Self-reflection and Goal setting</h3>
//           <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nihil sint consectetur accusamus, asperiores dolorem exercitationem vitae, aliquam possimus expedita ipsa magni reiciendis minima ratione voluptatem est animi dolores adipisci?</p>
//           <h1 className='my-8 text-[26px] font-semibold'>Conclusion:</h1>
//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur modi dicta voluptates, numquam quo quia et vero. Ratione beatae aut dignissimos doloremque expedita omnis cumque quis officiis optio suscipit vitae, alias possimus delectus harum nemo tenetur et debitis. Commodi temporibus quaerat consectetur nobis neque distinctio eveniet porro dolore amet natus.</p>
//           <div className='my-24'>
//             <p className='text-black font-semibold my-4'>Share this article on:</p>
//             <div className='flex'>
//               <Image src={assets.facebook_icon} width={50} alt='' />
//               <Image src={assets.twitter_icon} width={50} alt='' />
//               <Image src={assets.googleplus_icon} width={50} alt='' />
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </>


    

// 'use client'
// import { assets} from '@/Assests/assets';
// import Image from 'next/image';
// import axios from 'axios';
// import React, {useState, useEffect } from 'react';
// import Footer from '@/Components/Footer';
// import Link from 'next/link';

// const page = ({id}) => {
//   const [data,setData]=useState(null);
//   const fetchBlogData=async()=>{
//     console.log(id);
//     const response=await axios.get('API/blogs',{
//       params:id,
//     })
    
    
//     // console.log('Fetching blog data for id:', params.id);
//     setData(response.data);
//   }
//   useEffect(()=>{
//     fetchBlogData();
//   },[]);

//   return (data ?<>
//     <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28 '>
//       <div className='flex justify-between items-center'>
//         <Link href={`../`}>
//         <Image src={assets.logo} alt='' width={180}/></Link>
        
//         <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black hover:shadow-[-7px_7px_0px_#000000] transition ease-in-out delay-50'>Get Started
//           <Image src={assets.arrow} alt=''/>
//         </button>
//       </div>
//       <div className='text-center my-24'>
//         <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto' >{data.title}</h1>
//         <Image className='mx-auto mt-6 border border-white rounded-full' src={data.author_img} width={60} height={60}/>
//         <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
//       </div>
//     </div>
//     <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
//       <Image className='border-4 border-white' src={data.image} width={1280} height={720} alt=''/>
//       <h1 className='my-8 text-[26px] font-semibold'>Introduction:</h1>
//       <p>{data.description}</p>
//       <h3 className='my-5 text-[18px] font-semibold'>Step 1:Self-reflection and Goal setting</h3>
//       <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nihil sint consectetur accusamus, asperiores dolorem exercitationem vitae, aliquam possimus expedita ipsa magni reiciendis minima ratione voluptatem est animi dolores adipisci?</p>
//       <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nihil sint consectetur accusamus, asperiores dolorem exercitationem vitae, aliquam possimus expedita ipsa magni reiciendis minima ratione voluptatem est animi dolores adipisci?</p>
//       <h3 className='my-5 text-[18px] font-semibold'>Step 1:Self-reflection and Goal setting</h3>
//       <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nihil sint consectetur accusamus, asperiores dolorem exercitationem vitae, aliquam possimus expedita ipsa magni reiciendis minima ratione voluptatem est animi dolores adipisci?</p>
//       <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nihil sint consectetur accusamus, asperiores dolorem exercitationem vitae, aliquam possimus expedita ipsa magni reiciendis minima ratione voluptatem est animi dolores adipisci?</p>
//       <h1 className='my-8 text-[26px] font-semibold'>Conclusion:</h1> 
//       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur modi dicta voluptates, numquam quo quia et vero. Ratione beatae aut dignissimos doloremque expedita omnis cumque quis officiis optio suscipit vitae, alias possimus delectus harum nemo tenetur et debitis. Commodi temporibus quaerat consectetur nobis neque distinctio eveniet porro dolore amet natus.</p>
//       <div className='my-24'>
//         <p className='text-black font-semibold my-4'>Share this article on:</p>
//         <div className='flex'>
//           <Image src={assets.facebook_icon} width={50} alt=''/>
//           <Image src={assets.twitter_icon} width={50} alt=''/>
//           <Image src={assets.googleplus_icon} width={50} alt=''/>

//         </div>
//       </div>
//     </div>
//     <Footer/>
//     </>:<div>Data not found wrong page</div>
//   )
// }
  

// export default page

