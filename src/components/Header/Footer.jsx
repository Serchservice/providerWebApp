import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <Wrapper>
      <div>
        <ul>
          <li>Privacy Policy</li>
          <li>Accessibility Policy</li>
          <li>Terms and Conditions</li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  /* position: fixed; */
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 34px 0;
  @media screen and (max-width: 600px) {
    padding: 34px 0px;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
  }
  li {
    color: #b3b3b3;
    /* font-family: "Inter"; */
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    @media screen and (max-width: 600px) {
      font-size: 12px;
      padding: 0;
    }
  }
`;
