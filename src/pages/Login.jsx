import React, { useState } from "react";
import styled from "styled-components";
import { Formik, Form, Field, useFormik } from "formik";
import * as Yup from "yup";
import PasswordShowHide from "../components/PasswordShowHide";
import viewIcon from "../assets/icons/password_view.svg";
import { Link } from "react-router-dom";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [passwordState, setPasswordState] = useState("password");
  const { email, password } = formState;
  const handleOnChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  const handleViewPassword = () => {
    if (passwordState === "text") {
      setPasswordState("password");
    } else {
      setPasswordState("text");
    }
  };
  return (
    <Wrapper>
      <div className="bg-text">
        <h1 style={{ textAlign: "right" }}>Se</h1>
      </div>

      <div className="serch__login-container">
        <div>
          <h1>Hi there,</h1>
          <h2 className="sm-text">Good to have you back</h2>
        </div>
        <form>
          <div className="em-box input-box">
            <div className="text-input">
              <label htmlFor="email" className="label">
                Email Address
              </label>
            </div>
            <div>
              <input
                name="email"
                type="email"
                value={email}
                onChange={handleOnChange}
                placeholder="joe@gmail.com"
              />
            </div>
          </div>
          <div className="ps-box input-box">
            <div className="text-input">
              <label htmlFor="password" className="label">
                password
              </label>
            </div>
            <div className="password-box">
              <input
                placeholder="******************"
                name="password"
                type={passwordState}
                id="password"
                value={password}
                onChange={handleOnChange}
              />
              <div className="view-icon" onClick={handleViewPassword}>
                <img src={viewIcon} style={{ cursor: "pointer" }} alt="" />
              </div>
            </div>
          </div>

          <div className="middle-box">
            <div className="remember">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <div>
              <Link>Forgot Password ?</Link>
            </div>
          </div>
          <div className="below-box">
            <div>
              <p>
                <span>New User ?</span>
                <Link>Create Account</Link>
              </p>
            </div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
      <div className="bg-sm-text">
        <h2>Serch</h2>
      </div>
      <div className="bg-text">
        <h1>rch</h1>
      </div>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  @media screen and (max-width: 900px) {
    height: 650px;
  }
  .bg-text {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 700px;
    flex: 0.5;
    @media screen and (max-width: 900px) {
      display: none;
    }
  }
  .bg-sm-text {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    @media screen and (min-width: 900px) {
      display: none;
    }
    h2 {
      font-family: "Inria Sans";
      font-style: normal;
      font-weight: 700;
      font-size: 64px;
      line-height: 77px;
      /* identical to box height */

      /* Light White */

      color: #f0f0f0;
    }
    h1 {
      font-family: "Inria Sans";
      font-style: normal;
      font-weight: 700;
      font-size: 128px;
      line-height: 153px;

      /* Light White */

      color: #f0f0f0;
    }
  }
  .serch__login-container {
    margin-top: 60px;
    /* margin: 14px; */
    flex: 3;
    @media screen and (max-width: 900px) {
      margin: 19px;
    }
    form {
      /* width: 100%; */
      left: 248px;
      top: 354px;
      background: #f0f0f0;
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      margin-top: 59px;
      padding: 62px 50px 54px 43px;
      @media screen and (max-width: 900px) {
        width: unset;
        padding: 39px 15px;
        margin-top: 39px;
      }

      .input-box {
        margin-bottom: 28px;
      }
      .label {
        font-family: "Inria Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        color: #030001;
        margin-bottom: 14px;
        @media screen and (max-width: 600px) {
          font-size: 18px;
          line-height: 22px;
        }
      }
      .text-input {
        margin-bottom: 14px;
      }
      input {
        border: 2px solid #3b043b;
        border-radius: 10px;
        padding: 19px 29px 22px 29px;
        width: calc(100% - 56px);
        font-family: "Inria Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        min-width: 0;
        @media screen and (max-width: 600px) {
          font-size: 18px;
          line-height: 22px;
        }

        color: #b3b3b3;
      }

      input[type="checkbox"] {
        width: 30px;
        height: 30px;
        left: 291px;
        top: 723px;

        border: 1px solid #000000;
        border-radius: 5px;
        margin-right: 16px;
        @media screen and (max-width: 600px) {
          margin-right: 7px;
          border: 1px solid #000000;
          border-radius: 5px;
          width: 20px;
          height: 20px;
        }
      }
      .password-box {
        display: flex;
        align-items: center;
        position: relative;
        .view-icon {
          position: absolute;
          height: calc(100% - 0.5rem);
          bottom: 0;
          right: 0.2rem;
          width: 3rem;
          border: none;
          margin-left: -0.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 40;
        }
      }
      .middle-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 62px;
        .remember {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        label {
          font-family: "Inria Sans";
          font-style: normal;
          font-weight: 300;
          font-size: 24px;
          line-height: 29px;
          color: #000000;
          @media screen and (max-width: 600px) {
            font-size: 14px;
            line-height: 17px;
          }
        }
      }
      .below-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 14px;
        span {
          font-family: "Inria Sans";
          font-style: normal;
          font-weight: 400;
          font-size: 28px;
          line-height: 34px;
          margin-right: 15px;

          color: rgba(124, 124, 124, 0.5);
          @media screen and (max-width: 600px) {
            font-size: 18px;
            line-height: 22px;
            margin-right: 7px;
          }
        }
        a {
          font-family: "Inria Sans";
          font-style: normal;
          font-weight: 400;
          font-size: 24px;
          line-height: 29px;
          color: #6c0062;

          @media screen and (max-width: 600px) {
            font-size: 14px;
            line-height: 17px;
          }
        }
        button {
          width: 200px;
          height: 55px;
          left: 941px;
          top: 813px;
          border: none;
          background: #3f0f36;
          box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
          border-radius: 10px;

          font-style: normal;
          font-weight: 400;
          font-size: 28px;
          line-height: 34px;
          color: #ffffff;
          @media screen and (max-width: 600px) {
            font-size: 18px;
            line-height: 22px;
            padding: 6px 0px;
            width: 120px;
          }
        }
      }
    }
  }
  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;

    color: #000000;
    @media screen and (max-width: 600px) {
      font-size: 32px;
      line-height: 38px;
    }
  }
  .sm-text {
    font-family: "Inria Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    text-align: left;

    /* Hint */

    @media screen and (max-width: 600px) {
      font-weight: 400;
      font-size: 24px;
      line-height: 29px;
    }

    color: #b3b3b3;
  }
`;
