"use client";
import React, { useEffect, useState } from "react";
import data from "../../assets/data.json";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./subscribe.scss";
import { useFormik } from "formik";
import Api from "@/config/api";
import { notifyError, notifySuccess } from "../toastify/toastify";

const Subscribe = ({ open, handleClose }) => {
  const [subscribed, setSubscribed] = useState([]);
  const [allChecked, setAllChecked] = useState(false);
 
  const handleAllCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setAllChecked(isChecked);
    const updatedValues = data.reduce((acc, category) => {
      acc[category] = isChecked;
      return acc;
    }, {});
    formik.setValues(updatedValues);
  };

  async function getSubscribed() {
    try {
      let res = await Api.get("/subscribtion");
      console.log(res.data[0].category);
      setSubscribed(res.data[0].category);
    } catch (error) {
      let errMsg =
        error?.response?.data?.message || error?.response?.data?.error;
      console.log(errMsg);
    }
  }

  const handleCheckBox = async (values) => {
     const mergedCategories = [
      ...subscribed,
      ...Object.keys(values).filter((key) => values[key]),
    ];

    try {
      await Api.post("/subscribtion", { category: mergedCategories });
      notifySuccess("Subscribed Successfully");
      console.log(mergedCategories);
    } catch (error) {
      let errMsg =
        error?.response?.data?.message || error?.response?.data?.error;
      notifyError(errMsg);
    }
  };

  const formik = useFormik({
    initialValues:{},
    onSubmit: handleCheckBox,
  });

  useEffect(() => {
    getSubscribed();
  }, []);
  const handleSubscribe = () => {
    handleCheckBox(formik.values);
    notifySuccess("Subscribed Successfully");
    handleClose();
    window.location.reload();
  };

  return (
    <Modal show={open} onHide={handleClose} className="w-80">
      <Modal.Header closeButton>
        <Modal.Title>All</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={formik.handleSubmit}>
          <input
            className="form-check-input"
            type="checkbox"
            value="all"
            id="allCheckbox"
            checked={allChecked}
            onChange={handleAllCheckboxChange}
          />
          <label className="form-check-label ms-2" htmlFor="allCheckbox">
            All
          </label>

          {data.map((ele, index) => (
            <div key={index}>
              <input
                className="form-check-input"
                type="checkbox"
                value={ele}
                name={ele}
                id={`checkbox${index}`}
                onChange={(e) => {
                  formik.handleChange(e);
                }}
                disabled={subscribed.some((item) => item === ele)}
                checked={
                  subscribed.some((item) => item === ele) || formik.values[ele]
                }
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
            <Button
              variant="primary"
              type="button"
              className="page-direction"
              onClick={handleSubscribe}
            >
              اشتراك
            </Button>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Subscribe;
