import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'
// Assets
import LogoImg from "../../assets/svg/LogoOk";

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
        
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6 style={{ color:"  #38074e"}}>Handla om</h6>
            <p class="text-justify">Vi på Bogfelts är ett serviceinriktat företag som alltid har kundens mervärde i fokus.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6 style={{ color:"  #38074e"}}>Categories</h6>
            <ul class="footer-links">
             
              <Link to="/about">
                <li><a >Handla Om</a></li>
              </Link>
              <Link to="/projects">
                <li><a>Projekt</a></li>
              </Link>
              <Link to="/sustainability">
                <li><a>Hållbarhet</a></li>
              </Link>
              <Link to="/partners">
                <li><a>Partners</a></li>
              </Link>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6 style={{ color:"  #38074e"}}>Quick Links</h6>
            <ul class="footer-links">
              <li><a>Contact Us (00) 33 969854222</a></li>
              <Link to="privacy">
                <li><a>Privacy Policy</a></li>
              </Link>
            </ul>
          </div>
        </div>
        
      </div>
      <div class="container">
        <div class="row">


          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
      
      <div className="darkBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
       
            <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
              <LogoImg />
              <h1 className="font15 extraBold whiteColor" style={{ marginLeft: "15px" }}>
                Bogfelts
              </h1>
            </Link>
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} - <span className="purpleColor font13">Bogfelts</span> All Right Reserved
            </StyleP>

            <Link className="whiteColor animate pointer font13" to="home" smooth={true} offset={-80}>
              Back to top
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;