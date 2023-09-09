'use client'
import React, { useState } from 'react'
import { BiCloudUpload } from 'react-icons/bi';
import { BsPencilFill } from 'react-icons/bs';
import { MdContentPaste } from 'react-icons/md';
import './blogs.scss'
import { notifyError ,notifySuccess } from "@/components/toastify/toastify";
import { AiTwotoneVideoCamera } from 'react-icons/ai';
import { useFormik } from "formik";
import * as Yup from "yup";
import Api from '@/config/api';
export default function blogs() {

  function handleBlog(values){
   Api.post('/blogs', values,{
    headers:{
      'Content-Type': 'multipart/form-data',
    }
  }).then(()=>{
    notifySuccess('You Created a New Blog !! 😊 ')
    formik.resetForm()
    setSelectImage('');
    setSelectedFile(null);
   })
   .catch((e)=>{
    let error=e?.response?.data?.message || e?.response?.data?.error
    notifyError(`Faild to Create Blog ${error} 😞`)
   })
    console.log("values", values)
    
  }
    const [selectImage, setSelectImage] = useState("");
    const [selectedFile, setSelectedFile] = useState();
    const handleUpload=async()=>{
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
    }
    let validationSchema = Yup.object({
      title: Yup.string()
      .required("Title is required")
      .min(3, "Title minlength 3")
      .max(100, "Title maxlength 100"),
      content:Yup.string() ,
      image: Yup.mixed().test('fileType', 'Image must be a valid image file', (value) => {
         if (!value) return true; // No file is also valid
    
        const acceptedFormats = ['image/jpeg', 'image/png', 'image/gif'];
        return acceptedFormats.includes(value.type);
      }),

      video: Yup.string().url('Video must be a valid URL').nullable(),
        
    });

    let formik = useFormik({
      initialValues: {
        title:"",
        content: "",
        image: "",
        video: ""
      },
      validationSchema,
      onSubmit: handleBlog,
    });

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        formik.setFieldValue('image', file);
        formik.setFieldTouched('image', true);
        setSelectedFile(file);
        setSelectImage(URL.createObjectURL(file));
      }
    };
  
    
  return (
    <> <div className="container plog   ">
    <form className="form-shap shadow" onSubmit={formik.handleSubmit}>
      <h1 className="text-center mt-1 primary-sidebar ">أنشاء مدونة</h1>
      <div className="row  d-flex align-content-center justify-content-center m-4 ">
        <div className="col-12">
        {formik.touched.title && formik.errors.title ? (
                      <div className="alert alert-danger">
                        {formik.errors.title}
                      </div>
                    ) : null}
          <div className="input-with-icon">
            <input
              className="form-control"
              type="text"
              name="title"
              id="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="العنوان"
              required
            />
            <BsPencilFill className="icon primary-sidebar" />
          </div>
        </div>   
        <div className="col-12 mt-4">
        {formik.touched.video && formik.errors.video ? (
                      <div className="alert alert-danger">
                        {formik.errors.video}
                      </div>
                    ) : null}
          <div className="input-with-icon">
            <input
              className="form-control"
              type="url"
              name="video"
              id="video"
              value={formik.values.video}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="اضف رابط الفديو "
               
            />
            <AiTwotoneVideoCamera className="icon primary-sidebar" />
          </div>
        </div>
        <div className="col-12 mb-3" >
          <br />
          <div className="input-with-icon">
            <textarea
              class="form-control "
              name="content"
              value={formik.values.content}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              rows="4"
              placeholder="محتوي المدونة"
            ></textarea>
            <MdContentPaste className="icon-text-area fs-5 primary-sidebar " /> 
          </div>
        </div>
     
        <label htmlFor="image">
       
        <div className="col-12">
        {formik.touched.image && formik.errors.image ? (
                      <div className="alert alert-danger">
                        {formik.errors.image}
                      </div>
                    ) : null}
          <input
            type="file"
            id="image"
            name="image"
            style={{ display: 'none' }}
            onChange={handleImageChange}
            onBlur={formik.handleBlur}
          />
          <div className="col-12 fs-1 primary-sidebar cursor-pointer text-center form-control mt-2 cursor-pointer">
            {selectImage ? (
              <img src={selectImage} alt="Uploaded" className="w-100" height={400} />
            ) : (
              <>
                <h2 className="text-secondary">اختر صورة</h2>
                <BiCloudUpload />
              </>
            )}
          </div>
        </div>
      </label>

        <div className="col-6" >
          <button 
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
