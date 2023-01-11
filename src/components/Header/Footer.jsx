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

const Wrapper = styled.div`


ul{
    list-style: none;
}
`;
