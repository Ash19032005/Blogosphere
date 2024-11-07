import {connectDB} from '@/lib/config/db';
import BlogModel from '@/lib/models/blogModel';
const {NextResponse}=require("next/server");
import {writeFile} from 'fs/promises';
const loadDB=async()=>{
       await connectDB();
}

loadDB();
const fs=require('fs');
// API endpoint to get all the blogs from the DB
export async function GET(request){
       console.log("API working"); 
       const blog=request.nextUrl.searchParams.get("blogId");
       if(blog){
              const blogs=await BlogModel.findById(blog);
              return NextResponse.json(blogs);
       }
       else{
       const blogdata=await BlogModel.find({});
       console.log(blogdata)
       return NextResponse.json({blogdata});
       }
}

// API end point to post data
export async function POST(request){
       const formData=await request.formData();
       console.log(formData);
       const timeStamp=Date.now();
       const image=formData.get('image');
       const imageByteData=await image.arrayBuffer();
       const buffer=Buffer.from(imageByteData);
       const path=`./public/${timeStamp}_${image.name}`;
       await writeFile(path,buffer);
       const imgURL=`/${timeStamp}_${image.name}`;
       const blogData={
              title:`${formData.get('title')}`,
              description:`${formData.get('description')}`,
              category:`${formData.get('category')}`,
              author:`${formData.get('author')}`,
              image:`${imgURL}`,
              authorImg:`${formData.get('authorImg')}`,
       }
       await BlogModel.create(blogData);
       console.log("Blog saved");
       return NextResponse.json({success:true});
}



// API endpoint to delete a post
export async function DELETE(request) {
       const blog_id = request.nextUrl.searchParams.get("id"); // Ensure this matches the client-side query parameter name
     
       if (!blog_id) {
         return NextResponse.json({ error: "Blog ID is required" }, { status: 400 });
       }
     
       try {
         const blog = await BlogModel.findById(blog_id);
         if (!blog) {
           return NextResponse.json({ error: "Blog not found" }, { status: 404 });
         }
     
         // Delete the file
         fs.unlink(`./public/${blog.image}`, (err) => {
           if (err) console.error('Error deleting file:', err);
         });
     
         // Delete the blog entry
         await BlogModel.findByIdAndDelete(blog_id);
     
         return NextResponse.json({ msg: "Blog deleted" });
       } catch (error) {
         console.error('Error occurred:', error);
         return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
       }
     }