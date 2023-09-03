'use client'
import React, { useState } from 'react'
import { BiCloudUpload } from 'react-icons/bi';
import { BsPencilFill } from 'react-icons/bs';
import { MdContentPaste } from 'react-icons/md';
import './blogs.scss'
export default function blogs() {
    const [selectImage, setSelectImage] = useState("");
    const [selectedFile, setSelectedFile] = useState();
    const handleUpload=async()=>{
      // setUpload(true)
      try{
        if(!selectedFile) return ; 
          const formData = new FormData()
          formData.append('myImage' , selectedFile)
          const {data} =await axios.post('/api/image' , formData)
          console.log(data);
        }
        catch(error){
          console.log(error.response?.data);
      }
      // setUpload(false)
    }
  return (
    <> <div className="container plog   ">
    <form className="form-shap shadow">
      <h1 className="text-center mt-4 primary-sidebar ">أنشاء مدونة</h1>
      <div className="row  d-flex align-content-center justify-content-center m-4 ">
        <div className="col-12">
          <div className="input-with-icon">
            <input
              className="form-control"
              type="text"
              name=""
              id=""
              placeholder="العنوان"
              required
            />
            <BsPencilFill className="icon primary-sidebar" />
          </div>
        </div>
        <div className="col-12">
          <br />
          <div className="input-with-icon">
            <textarea
              class="form-control "
              id=""
              rows="4"
              placeholder="محتوي المدونة"
            ></textarea>
            <MdContentPaste className="icon-text-area fs-5 primary-sidebar " />
          </div>
        </div>

        <label>
          <div className="col-12">
            <input type="file" hidden 
            onChange={({target})=>{
              if(target.files){
                const file = target?.files[0];
                setSelectImage(URL.createObjectURL(file))
                setSelectedFile(file)
              }
            }}
            />
            <div className="col-12  fs-1 primary-sidebar cursor-pointer text-center form-control mt-4">
              {selectImage ? <img src={selectImage} className="w-100"/> :<> <h2 className="text-secondary"> اختر صورة </h2>
              <BiCloudUpload /></>}
             
            </div>
          </div>
        </label>

        <div className="col-6" style={{ marginBottom: "50px" }}>
          <button
          disabled={!selectedFile}
          onClick={handleUpload}
          type="submit"
          className="btn form-control primary-sidebar-bg text-white mt-4"
          >
            انشئ المدونة
          </button>
        </div>
      </div>
    </form>
  </div>
</>
  )
}
