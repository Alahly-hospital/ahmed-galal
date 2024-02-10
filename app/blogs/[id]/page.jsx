
'use client'
import { useEffect, useState } from 'react';
import Api from '@/config/api';
import YouTube from "react-youtube";
import { useRouter } from 'next/navigation';
import apiUrl from "../../../config/domains";

const blog = ({params}) => {
  const [blog, setBlog] = useState(null);
 
console.log(params);

  async function getBlog() {
    try {
      let res = await Api.get(`/blogs/${ params.id}`)
      console.log(res.data.data); 
      setBlog(res.data.data);
    } catch (e) {
      let error = e?.response?.data?.message || e?.response?.data?.error;
      console.log(`error ${error}`);
    }
  }

  useEffect(()=>{
    getBlog()
  },[])
  function getVideoId(url) {
    if (!url) return null;
    
    const videoId = url.split("/").pop().split("?")[0];
    return videoId;
  }
  return (
    <div className="container blog-details d-flex flex-column align-items-center text-center mt-4 mb-4 ">
         <div className="row ">
      <div className="col-md-12">
        {blog?.video &&      <YouTube
        className='w-100'
        style={{height:'500px' ,width:"100%"}}
      videoId={getVideoId(blog?.video)}
      opts={{ origin: "https://www.youtube.com",                    
      width: '100%',  
      height:'500px'   }} />}
{blog?.image &&       <img src={apiUrl + blog?.image} style={{height:'500px' ,width:"100%"}} alt="blog-img" />
}

      <h1>{blog?.title}</h1>
      <p>{blog?.content}</p>
      </div>



    </div>
    </div>
 
  )
}

export default blog