'use client'
// import Image from "next/image";
import Header from "@/src/Components/Header";
import BlogList from "@/src/Components/BlogList";
import Footer from "@/src/Components/Footer";
import '@/src/app/globals.css'; // Adjust the path as necessary

export default function Home() {
  return (
    <>
    {/* component mounting in the main page */}
    <Header/>
    <BlogList/>
    <Footer/>
    </>
      );
}

