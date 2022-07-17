import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets

import LogoIcon from "../../assets/svg/LogoOk";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import FlagIcon from "../../assets/svg/suecia.png";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);


  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: "60px" } : { height: "80px" }}>
        <NavInner className="container flexSpaceCenter">
          <Link to="/" className="pointer flexNullCenter"  smooth={true}>
            <img src="/assets/svg/LogoIcon.svg" alt="" />
            <LogoIcon />
            <h1 style={{ marginLeft: "10px", fontSize: "20px", textAlign:"center" }} className="font20 extraBold">
              Bogfelts
            </h1>
          </Link>
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer text-dark">
              <Link activeClass="active" style={{ padding: "10px 15px" }} exact to="/" spy={true} smooth={true} offset={-80}>
              Hem
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link  activeClass="active" style={{ padding: "10px 15px" }} exact to="/about"  spy={true} smooth={true} offset={-80}>
              Om Oss
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="/projects" exact spy={true} smooth={true} offset={-80}>
              Projekt
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="/sustainability" spy={true} smooth={true} offset={-80}>
              Hållbarhet
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="/pricing" exact spy={true} smooth={true} offset={-80}>
                Partners
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="/contact" exact spy={true} smooth={true} offset={-80}>
                Kontact
              </Link>
            </li>
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <Link to="/location" exact style={{ padding: "10px 30px 10px 0" }}>
              Jobba med oss <img src={FlagIcon} alt="" style={{width:"30px", cursor:"pointer", marginLeft:"5px"}} />
              
              </Link>
            </li>
            
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const BurderWrapper = styled.button`
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
const UlWrapper = styled.ul`
  display: flex;
  li {
    font-weight: 400;
    font-size: 1rem;
  }
  
  
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
margin-right: -50px;
  @media (max-width: 760px) {
    display: none;
  }
`;


