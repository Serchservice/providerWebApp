import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, useFormik } from "formik";
import * as Yup from "yup";
import PasswordShowHide from "../components/PasswordShowHide";
import viewIcon from "../assets/icons/password_view.svg";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <Wrapper>
      <div className="serch__login-container">
        <div>
          <h1>Hi there,</h1>
          <h2>Good to have you back</h2>
        </div>
        <form>
          <div className="em-box input-box">
            <div className="text-input">
              <label htmlFor="email" className="label">
                Email Address
              </label>
            </div>
            <div>
              <input name="email" placeholder="Type here" type="email" />
            </div>
          </div>
          <div className="ps-box input-box">
            <div className="text-input">
              <label htmlFor="password" className="label">
                password
              </label>
            </div>
            <div>
              <input
                placeholder="Type your password here"
                name="password"
                type="password"
                id="password"
              />
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
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  .serch__login-container {
    margin: 14px;
    form {
      width: 943px;
      height: 558px;
      left: 248px;
      top: 354px;
      background: #f0f0f0;
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      margin-top: 59px;
      padding: 62px 50px 54px 43px;
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
      }
      .text-input {
        margin-bottom: 14px;
      }
      input {
        border: 2px solid #3b043b;
        border-radius: 10px;
        padding: 19px 29px 22px 29px;
        width: 100%;
      }

      input[type="checkbox"] {
        width: 30px;
        height: 30px;
        left: 291px;
        top: 723px;

        border: 1px solid #000000;
        border-radius: 5px;
        margin-right: 16px;
      }
      .middle-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
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
          /* identical to box height */

          color: rgba(124, 124, 124, 0.5);
        }
        a {
          font-family: "Inria Sans";
          font-style: normal;
          font-weight: 400;
          font-size: 24px;
          line-height: 29px;
          /* identical to box height */

          color: #6c0062;
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
  }
  h2 {
    font-family: "Inria Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    text-align: left;

    /* Hint */

    color: #b3b3b3;
  }
`;
