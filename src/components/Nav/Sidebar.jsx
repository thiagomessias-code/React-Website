import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Assets
import CloseIcon from "../../assets/svg/CloseIcon";
import LogoIcon from "../../assets/svg/LogoOk";
import FlagIcon from "../../assets/svg/suecia.png"


export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <Wrapper className="animate darkBg" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <LogoIcon />
          <h1 className="whiteColor font20" style={{ marginLeft: "15px", marginRight: "7rem",color:"#38074e",fontWeight:"bold" }}>
            Bogfelts
          </h1>
          <Link to="/maps" style={{ padding: "10px 30px 10px 0" }}>
            <img src={FlagIcon} alt="" style={{width:"30px", cursor:"pointer", margin:"auto"}} />
              </Link>
        </div>
        <CloseBtn onClick={() => toggleSidebar(!sidebarOpen)} className="animate pointer">
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">
        <li className="semiBold font15 pointer">
          <Link
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="/"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Hem
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
           
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="/about"
            spy={true}
            smooth={true}
            offset={-60}
          >
             Om Oss
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="/projects"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Projekt
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="/sustainability"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Hållbarhet
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="/partners"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Partners
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="/contact"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Kontact
          </Link>
        </li>
      </UlStyle>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 300px;
  height: 100vh;
  position: fixed;
  background-color: #cbcbcb;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebarOpen ? "0px" : "-400px")};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 85%;
  }
`;
const SidebarHeader = styled.div`
  padding: 20px 0;
  

`;
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;
const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;
