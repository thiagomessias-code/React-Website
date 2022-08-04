import styled from "styled-components";

export const Content =styled.div`
max-width: 1120px;
margin: 0 auto;

padding: 2rem 1rem 12rem;
display: flex;
align-items: center;
justify-content: space-between;
`;
export const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  box-shadow: 1px 1px 2px #00000023;
  `;
export const NavInner = styled.div`
  position: relative;
  height: 100%;
`
export const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
export const UlWrapper = styled.ul`
  display: flex;
  li {
    font-weight: 400;
    font-size: 1rem;
  }
  
  
  @media (max-width: 760px) {
    display: none;
  }
`;
export const UlWrapperRight = styled.ul`
margin-right: -50px;
  @media (max-width: 760px) {
    display: none;
  }
`;