"use client";
import React from "react";
import "./login.scss";
import logo from "../../assets/Logo.png";
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
export default function login() {
    return (
        <>
        <div className="login-page">
            <div className="bg">
            <div className="container">
                <div className="row  min-vh-100 d-flex align-items-center ">
                <div className="col-md-6 ">
                    <h1 className=" fw-bold "> تسجل الدخول : </h1>
                    <h6 className="   text-secondary mt-4 mb-4">
                    ادخل الي حسابك بادخال البريد الالكتروني و كلمة المرور
                    </h6>
                    <form action="">
                    <label htmlFor="name mt-4">البريد الالكتروني</label>
                    <div className="position-relative d-flex align-items-center ">
                        <div className="input-with-icon responsive-input">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                        />
                        <FaUserAlt className="icon primary-color" />
                        </div>
                    </div>

                    <label htmlFor="password">كلمة المرور </label>
                    <div className="position-relative d-flex align-items-center">
                        <div className="input-with-icon  responsive-input ">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className=" form-control  "
                        />
                        <RiLockPasswordFill className="icon primary-color" />
                        </div>
                    </div>

                    <button className="btn responsive-input form-control text-center text-white mt-4 primary-bg p-2   ">
                        تسجيل الدخول
                    </button>
                    <p className="mt-4 ">
                        لا يوجد لديك حساب ؟
                        <Link
                        href={"/register"}
                        className="span-color text-decoration-none"
                        >
                        انشئ حسابك الان !
                        </Link>
                    </p>
                    </form>
                </div>
                <div className="col-md-6 text-center">
                    <img src={logo.src} className="w-75 img" alt="" />
                </div>
                </div>
            </div>
            </div>
        </div>
        </>
    );
}
