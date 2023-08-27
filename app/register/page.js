"use client";
import React from "react";
import "./register.scss";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsFillPencilFill } from "react-icons/bs";
import {
    AiFillPhone,
    AiOutlineMail,
    AiTwotoneCalendar,
    AiTwotoneHome,
    } from "react-icons/ai";
    import Link from "next/link";

    export default function register() {
    return (
        <>
        <div className="register-page">
            <div className="container">
            <h1>أنشء حسابك الان :</h1>
            <h6 className="text-secondary">
                {" "}
                ادخل بياناتك بشكل صحيح للحصول علي افضل تجربة داخل الموقع
            </h6>
            <form>
                <div className="row">
                <div className="col-md-4">
                    <div className="input-with-icon">
                    <input
                        className="form-control"
                        type="text"
                        name=""
                        id=""
                        placeholder="الاسم الاول"
                        required
                    />
                    <FaUserAlt className="icon primary-color" />
                    </div>
                </div>{" "}
                <br />
                <br />
                <div className="col-md-4">
                    <div className="input-with-icon">
                    <input
                        className="form-control"
                        type="text"
                        name=""
                        placeholder="الاسم الاخير"
                        id=""
                        required
                    ></input>
                    <FaUserAlt className="icon primary-color" />
                    </div>
                </div>
                </div>

                <div className="row">
                <div className="col-md-4 mt-4">
                    <div className="input-with-icon">
                    <input
                        className="form-control"
                        type="number"
                        name=""
                        id=""
                        placeholder="العمر  "
                        required
                    ></input>
                    <AiTwotoneCalendar className="icon fs-5 primary-color " />
                    </div>
                </div>
                <div className="col-md-4 mt-4">
                    <div className="input-with-icon">
                    <input
                        className="form-control"
                        type="email"
                        name=""
                        id=""
                        placeholder="البريد الالكتروني  "
                        required
                    ></input>
                    <AiOutlineMail className="icon fs-5 primary-color " />
                    </div>
                </div>
                </div>

                <div className="row mt-4">
                <div className="col-md-4">
                    <div className="input-with-icon">
                    <input
                        className="form-control"
                        type="text"
                        name=""
                        id=""
                        placeholder="مقر السكن"
                        required
                    />
                    <AiTwotoneHome className="icon primary-color" />
                    </div>
                </div>{" "}
                <br />
                <br />
                <div className="col-md-4">
                    <div className="input-with-icon">
                    <input
                        className="form-control"
                        type="number"
                        name=""
                        placeholder=" رقم الهاتف"
                        id=""
                        required
                    ></input>
                    <AiFillPhone className="icon fs-5 primary-color" />
                    </div>
                </div>
                </div>

                <div className="row">
                <div className="col-md-4 mt-4">
                    <div className="input-with-icon">
                    <input
                        className="form-control"
                        type="number"
                        name=""
                        id=""
                        placeholder="الرقم السري   "
                        required
                    ></input>
                    <RiLockPasswordFill className="icon primary-color" />
                    </div>
                </div>
                <div className="col-md-4 mt-4">
                    <div className="input-with-icon">
                    <input
                        className="form-control"
                        type="number"
                        name=""
                        id=""
                        placeholder=" تأكيدالرقم السري  "
                        required
                    ></input>
                    <RiLockPasswordFill className="icon primary-color" />
                    </div>
                </div>
                </div>

                <div className="row" style={{ paddingBottom: "100px" }}>
                <div className="col-8">
                    <button
                    type="submit"
                    className="btn form-control primary-bg text-white mt-4"
                    >
                    {" "}
                    أنشء حسابك الان{" "}
                    </button>
                    <p className=" mt-4">
                    {" "}
                    يوجد لديك حساب بالفعل{" "}
                    <Link
                        href={"login"}
                        className="text-decoration-none span-color"
                    >
                        أدخل الي حسابك !
                    </Link>
                    </p>
                </div>
                </div>
            </form>
            </div>
        </div>
        </>
    );
}
