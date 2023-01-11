import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";

function Header({ children }) {
  return (
    <div>
      <StyledHeader>
        <img src={logo} alt="logo" />
        <h1>service made easy</h1>
      </StyledHeader>

      <div>{children}</div>
    </div>
  );
}

export default Header;

const StyledHeader = styled.header`
  background-color: #030001;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  h1 {
    font-family: "Inria Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */

    /* Light White */

    color: #f0f0f0;
  }
`;
