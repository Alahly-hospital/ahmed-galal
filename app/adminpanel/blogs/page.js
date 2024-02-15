"use client";
import React, { useState, useEffect } from "react";
import { BiCloudUpload } from "react-icons/bi";
import { BsPencilFill } from "react-icons/bs";
import { MdContentPaste } from "react-icons/md";
import "./blogs.scss";
import { notifyError, notifySuccess } from "@/components/toastify/toastify";
import { AiTwotoneVideoCamera } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";
import Api from "@/config/api";
import { MdDeleteSweep } from "react-icons/md";
import data from "../../../assets/data.json";
import Link from "next/link";

export default function blogs() {
  const [blogs, setBlogs] = useState([]);
  const [category, setCategory] = useState([]);
  const [select, setSelect] = useState("");
  async function getBlogs() {
    try {
      let res = await Api.get("/blogs");
      // let data = data.json(res);
      setBlogs(res.data);
    } catch (e) {
      let error = e?.response?.data?.message || e?.response?.data?.error;
      console.log(`error ${error}`);
      console.log(e);
    }
  }

  useEffect(() => {
    getBlogs();
  }, []);

  function handleBlog(values) {
    if (!category.length) return notifyError("Category is rqeuired");

    Api.post(
      "/blogs",
      { ...values, category },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
      .then(() => {
        notifySuccess("You Created a New Blog !! 😊 ");
        formik.resetForm();
        setCategory([]);
        setSelectImage("");
        setSelectedFile(null);
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
  let validationSchema = Yup.object({
    title: Yup.string()
      .required("Title is required")
      .min(3, "Title minlength 3")
      .max(100, "Title maxlength 100"),
    content: Yup.string(),
    image: Yup.mixed().test(
      "fileType",
      "Image must be a valid image file",
      (value) => {
        if (!value) return true; // No file is also valid

        const acceptedFormats = ["image/jpeg", "image/png", "image/gif"];
        return acceptedFormats.includes(value.type);
      }
    ),

    video: Yup.string().url("Video must be a valid URL").nullable(),
  });

  let formik = useFormik({
    initialValues: {
      title: "",
      content: "",
      image: "",
      category: "",
      video: "",
    },
    validationSchema,
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
        getBlogs();
      })
      .catch((e) => {
        let error = e?.response?.data?.message || e?.response?.data?.error;
        notifyError(`Faild to delete Blog ${error} 😞`);
      });
  }
  function addCategory(ele) {
    setSelect(ele);
    let data = category.slice();
    data.push(ele);
    setCategory(data);
  }
  function removeCategory(e) {
    let data = category.slice();
    data = data.filter((ele) => ele != e);
    setCategory(data);
  }

  return (
    <>
      <div className="container plog   ">
        <form className="form-shap shadow" onSubmit={formik.handleSubmit}>
          <h1 className="text-center mt-1 primary-sidebar ">أنشاء مدونة</h1>
          <div className="row  d-flex align-content-center justify-content-center m-4 ">
            <div className="col-12">
              {formik.touched.title && formik.errors.title ? (
                <div className="alert alert-danger">{formik.errors.title}</div>
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
              {formik.touched.category && formik.errors.category ? (
                <div className="alert alert-danger">
                  {formik.errors.category}
                </div>
              ) : null}
              <div className="input-with-icon">
                <select
                  className="form-control pr-4"
                  style={{ paddingRight: "40px" }}
                  id="category"
                  value={select}
                  onChange={(e) => addCategory(e.target.value)}
                >
                  <option disabled value="">
                    نوع المدونة
                  </option>
                  {data.map((ele) => {
                    if (!category.includes(ele)) {
                      return <option value={ele}>{ele}</option>;
                    }
                  })}
                </select>
                <BsPencilFill className="icon primary-sidebar ml-4" />
              </div>
              {category.map((ele) => (
                <p className="d-flex justify-content-between mb-0">
                  {ele}
                  <MdDeleteSweep
                    className="fs-2 ms-4 delete-icon"
                    onClick={() => removeCategory(ele)}
                    style={{ color: "red" }}
                  />
                </p>
              ))}
            </div>
            <div className="col-12 mt-4">
              {formik.touched.video && formik.errors.video ? (
                <div className="alert alert-danger">{formik.errors.video}</div>
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
            <div className="col-12 mb-3">
              <br />
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

            <div className="col-6">
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

      <div>
        <h1 className="text-center">المدونات</h1>
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th>العنوان</th>
              <th>نوع المدونة</th>
              <th>المحتوى</th>
              <th>تعديل</th>
              <th>حذف</th>
              {/* <th>تعديل </th> */}
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, id) => (
              <tr key={id}>
                <td>{blog.title}</td>
                <td>{blog.category}</td>
                <td>{blog.content.substring(0, 20)}</td>
                <td>
                  <Link href={`/adminpanel/blogs/${blog._id}`}>
                    <MdDeleteSweep className="fs-2 ms-4 delete-icon" />
                  </Link>
                </td>
                <td>
                  <MdDeleteSweep
                    className="fs-2 ms-4 delete-icon"
                    onClick={() => handleDeleteBlog(blog._id)}
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
