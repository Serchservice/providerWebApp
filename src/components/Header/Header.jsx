import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";

function Header({ children }) {
  return (
    <>
      <StyledHeader>
        <img src={logo} alt="logo" />
        <h1>service made easy</h1>
      </StyledHeader>

      <StyledChild className="serch__navbar-children">{children}</StyledChild>
    </>
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
const StyledChild = styled.div`
  max-width: 1280px;
  margin: auto;
`;
