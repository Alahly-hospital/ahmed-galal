"use client";
import React, { useState, useEffect } from "react";
import { BiCloudUpload } from "react-icons/bi";
import { BsPencilFill } from "react-icons/bs";
import { MdContentPaste } from "react-icons/md";
import "../blogs.scss";
import { notifyError, notifySuccess } from "@/components/toastify/toastify";
import { AiTwotoneVideoCamera } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";
import Api from "@/config/api";
import { MdDeleteSweep } from "react-icons/md";
import apiUrl from "../../../../config/domains";
import data from "../../../../assets/data.json";

export default function blogs({ params }) {
  const [blogs, setBlogs] = useState([]);
  const [category, setCategory] = useState([]);
  const [select, setSelect] = useState("");
  const [blog, setBlog] = useState(null);
  const [blogContent, setBlogContent] = useState(null);


  async function getBlogs() {
    try {
      let res = await Api.get("/blogs");
      let data = res.data;
      let blog = data?.find((ele) => ele._id == params.id);
      setBlog(blog);
      setBlogs(res.data);
    } catch (e) {
      let error = e?.response?.data?.message || e?.response?.data?.error;
    }
  }
console.log(blog);
  async function getBlogContent() {
    try {
      let res = await Api.get(`/blog-content/${params.id}`);
      let data = res?.data;
      setBlogContent(data);
    } catch (e) {
      let error = e?.response?.data?.message || e?.response?.data?.error;
    }
  }

  useEffect(() => {
    getBlogs();
    getBlogContent();
  }, []);

  function handleBlog(values) {
    console.log(values);
    Api.post("/blog-content", {...values , blog:params.id}, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(() => {
        notifySuccess("You Created a New Blog !! 😊 ");
        formik.resetForm();
        setCategory([]);
        setSelectImage(""); 
        setSelectedFile(null);
        getBlogs();
      })
      .catch((e) => {
        let error = e?.response?.data?.message || e?.response?.data?.error;
        notifyError(`Faild to Create Blog ${error} 😞`);
      });
  }
  const [selectImage, setSelectImage] = useState("");
  const [selectedFile, setSelectedFile] = useState();

  const handleUpload = async () => {
    try {
      if (!selectedFile) return;
      const formData = new FormData();
      formData.append("myImage", selectedFile);
      const { data } = await axios.post("/api/image", formData);
      console.log(data);
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  // let validationSchema = Yup.object({
  //   content: Yup.string().when('type', {
  //     is: 'content',
  //     then: Yup.string().required('Content is required')
  //   }),
  //   subtitle: Yup.string().when('type', {
  //     is: 'subtitle',
  //     then: Yup.string().required('Subtitle is required')
  //   }),
  //   video: Yup.string().when('type', {
  //     is: 'video',
  //     then: Yup.string().url('Video must be a valid URL').required('Video URL is required')
  //   }),
  //   image: Yup.mixed().when('type', {
  //     is: 'image',
  //     then: Yup.mixed().required('Image is required').test(
  //       "fileType",
  //       "Image must be a valid image file",
  //       (value) => {
  //         if (!value) return true; // No file is also valid
  //         const acceptedFormats = ["image/jpeg", "image/png", "image/gif"];
  //         return acceptedFormats.includes(value.type);
  //       }
  //     )
  //   }),
  //   list: Yup.array().when('type', {
  //     is: 'list',
  //     then: Yup.array().of(Yup.string().required('List item is required'))
  //   })
  // });

  let formik = useFormik({
    initialValues: {
      type: "content",
      image: "",
      video: "",
      list: [""],
      subtitle: "",
      content: "",
    },
    // validationSchema,
    onSubmit: handleBlog,
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      formik.setFieldValue("image", file);
      formik.setFieldTouched("image", true);
      setSelectedFile(file);
      setSelectImage(URL.createObjectURL(file));
    }
  };

  function handleDeleteBlog(id) {
    Api.delete(`/blogs/${id}`)
      .then(() => {
        notifySuccess("Blog deleted !! 😊 ");
      })
      .catch((e) => {
        let error = e?.response?.data?.message || e?.response?.data?.error;
        notifyError(`Failed to delete Blog ${error} 😞`);
      });
  }
  function handleDeleteBlogContent(id) {
    Api.delete(`/blog-content/${id}`)
      .then(() => {
        notifySuccess("Blog content deleted !! 😊 ");
      })
      .catch((e) => {
        let error = e?.response?.data?.message || e?.response?.data?.error;
        notifyError(`Failed to delete Blog ${error} 😞`);
      });
  }
  function handleListChange(value, index) {
    let newList = [...formik.values.list];
    newList[index] = value;
    formik.setValues({ ...formik.values, list: newList });
  }

  return (
    <>
      <div className="container plog   ">
        <form className="form-shap shadow" onSubmit={formik.handleSubmit}>
          <h1 className="text-center mt-1 primary-sidebar ">أضافة محتوى</h1>
          <div className="row  d-flex align-content-center justify-content-center m-4 ">
            <div className="col-12 mt-4">
              {formik.touched.type && formik.errors.type ? (
                <div className="alert alert-danger">{formik.errors.type}</div>
              ) : null}
              <div className="input-with-icon ">
                <select
                  className="form-control pr-4 mb-3"
                  style={{ paddingRight: "40px" }}
                  id="type"
                  name="type"
                  value={formik.values.type}
                  onChange={formik.handleChange}
                >
                  <option disabled value="">
                    نوع المحتوى
                  </option>
                  <option value="content">Content</option>;
                  <option value="subtitle">Sub-title</option>;
                  <option value="image">Image</option>;
                  <option value="video">video</option>;
                  <option value="list">List</option>;
                </select>
                <BsPencilFill className="icon primary-sidebar ml-4" />
              </div>
            </div>
            {formik.values.type == "subtitle" && (
              <div className="col-12">
                {formik.touched.subtitle && formik.errors.subtitle ? (
                  <div className="alert alert-danger">
                    {formik.errors.subtitle}
                  </div>
                ) : null}
                <div className="input-with-icon">
                  <input
                    className="form-control"
                    type="text"
                    name="subtitle"
                    id="subtitle"
                    value={formik.values.subtitle}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="subtitle"
                    required
                  />
                  <BsPencilFill className="icon primary-sidebar" />
                </div>
              </div>
            )}
            {formik.values.type == "video" && (
              <div className="col-12 ">
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
            )}
            {formik.values.type == "content" && (
              <div className="col-12 mb-3">
                <div className="input-with-icon">
                  <textarea
                    className="form-control "
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
            )}
            {formik.values.type == "image" && (
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
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                    onBlur={formik.handleBlur}
                  />
                  <div className="col-12 fs-1 primary-sidebar cursor-pointer text-center form-control mt-2 cursor-pointer">
                    {selectImage ? (
                      <img
                        src={selectImage}
                        alt="Uploaded"
                        className="w-100"
                        height={400}
                      />
                    ) : (
                      <>
                        <h2 className="text-secondary">اختر صورة</h2>
                        <BiCloudUpload />
                      </>
                    )}
                  </div>
                </div>
              </label>
            )}
            {formik.values.type === "list" && (
              <div className="col-12">
                {formik.touched.list && formik.errors.list ? (
                  <div className="alert alert-danger">{formik.errors.list}</div>
                ) : null}
                {formik.values.list.map((ele, ind) => (
                  <div key={ind} className="input-with-icon mt-2">
                    <input
                      className="form-control"
                      type="text"
                      name={`list-${ind}`}
                      value={ele}
                      onChange={(e) => handleListChange(e.target.value, ind)}
                      onBlur={formik.handleBlur}
                      placeholder="List item"
                      required
                    />
                    <BsPencilFill className="icon primary-sidebar" />
                  </div>
                ))}
                <button
                  onClick={() => {
                    let listArr = [...formik.values.list, ""];
                    formik.setValues({ ...formik.values, list: listArr });
                  }}
                  className="btn btn-primary mt-2"
                >
                  Add List Item
                </button>
              </div>
            )}

            <div className="col-6">
              <button
                onClick={handleUpload}
                type="submit"
                className="btn form-control primary-sidebar-bg text-white mt-4"
              >
                أضافة محتوي
              </button>
            </div>
          </div>
        </form>
      </div>

 
      <div>
        <h1 className="text-center">المدونة</h1>
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th>العنوان</th>
              <th>نوع المدونة</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>{blog?.title}</td>
                <td>{blog?.category}</td>
                <td>
                  <MdDeleteSweep
                    className="fs-2 ms-4 delete-icon"
                    onClick={() => handleDeleteBlog(blog?._id)}
                  />
                </td>
              </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h1 className="text-center">المحتوي الاضافي</h1>
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th>نوع المحتوي </th>
              <th>المحتوي</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {blogContent?.map((blogCont, id) => (
              <tr key={id}>
                <td>{blogCont?.type}</td>
                <td>{blogCont?.type === 'video' &&blogCont?.video || blogCont?.type === 'content' &&blogCont?.content || blogCont?.type === 'subtitle' &&blogCont?.subtitle || blogCont?.type === 'image' &&<img
      src={apiUrl + blog?.image}
      style={{ height: "30px", width: "30px" , borderRadius:'30px' }}
      alt="blog-img"
    />  || blogCont?.type === 'list' && (
            <dl>
              {blogCont?.list.map((item, index) => (
                <dd key={index}>{item}</dd>
              ))}
            </dl>
          ) }</td> 
                <td>
                  <MdDeleteSweep
                    className="fs-2 ms-4 delete-icon"
                    onClick={() => handleDeleteBlogContent(blogCont?._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
