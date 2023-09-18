import React from "react";
import data from "../../assets/data.json";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./subscribe.scss";
import { useFormik } from "formik";
import Api from "@/config/api";
import { notifyError, notifySuccess } from "../toastify/toastify";

const Subscribe = ({ open, handleClose }) => {

  const handleCheckBox =async (values) => {
    let data = []
    for (const key in values) {
      if (values.hasOwnProperty(key)) {
        data.push(values[key]);
      }
      data = data.flat()
     await Api.post("/subscribtion",{category:data})
      .then(()=>{
          notifySuccess("Subscribed Successfully")      
      })
      .catch((error)=>{
        let errMsg = error?.response?.data?.message ||  error?.response?.data?.error
        notifyError(errMsg)
      })
    }
    formik.resetForm()
  };

  const formik = useFormik({
    initialValues: {},
    onSubmit: handleCheckBox,
  });

  return (
    <Modal show={open} onHide={handleClose} className="w-80">
      <Modal.Header closeButton>
        <Modal.Title>All</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={formik.handleSubmit}>
          {data.map((ele, index) => (
            <div key={index}>
              <input
                className="form-check-input"
                type="checkbox"
                value={ele}
                name={`ele`}
                id={`checkbox${index}`}
                onChange={formik.handleChange}
              />
              <label
                className="form-check-label ms-2"
                htmlFor={`checkbox${index}`}
              >
                {ele}
              </label>
            </div>
          ))}
          <Modal.Footer className="mt-4">
            <Button variant="secondary" onClick={handleClose}>
              الغاء
            </Button>
            <Button variant="primary" type="submit" className="page-direction"  onClick={handleClose}>
              اشتراك
            </Button>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Subscribe;
