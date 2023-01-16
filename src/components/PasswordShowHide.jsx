import React, { useState } from "react";
import styled from "styled-components";
// import EyeIcon from "../assets/eye.svg";

const PasswordShowHide = ({ field, form }) => {
  const [showHidePassword, changeShowHidePassword] = useState(false);
  const hasError = form.touched[field.name] && form.errors[field.name];

  return (
    <Wrapper>
      <div className="input-container">
        <i
          className={hasError ? "icon-error icon" : "fa fa-key icon"}
          onClick={() => changeShowHidePassword(!showHidePassword)}
        >
          {/* <img src={EyeIcon} alt="" /> */}
        </i>
        <input
          type={showHidePassword ? "text" : "password"}
          {...field}
          className={
            hasError ? "input-error input-field" : "input-field l-input"
          }
          placeholder="Password"
        />
      </div>
    </Wrapper>
  );
};

export default PasswordShowHide;

const Wrapper = styled.div`
  .input-container {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
  i {
    padding-left: 5px;
    background: #ffffff;
    border: 1px solid #e1e1e1;
    border-radius: 4px;
    padding: 7px 12px;
    border-left: none;
    border-top-left-radius: unset;
    border-bottom-left-radius: unset;
  }
`;
