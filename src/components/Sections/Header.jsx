import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import { Link } from "react-router-dom";
import SlideImage1 from "../../assets/img/slider/slider-1.jpg";
import SlideImage2 from "../../assets/img/slider/slider-2.jpg";
import SlideImage3 from "../../assets/img/slider/slider-3.jpg";
import SlideImage4 from "../../assets/img/slider/slider-4.jpg";
import SlideImage5 from "../../assets/img/slider/slider-5.jpg";
import SlideImage6 from "../../assets/img/slider/slider-6.jpg";
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";


export default function Header() {
  
  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60">30 år  <span style={{color: "blueviolet"}}>Erfarenhet</span></h1>
          <HeaderP className="font16 semiBold">
          Vi på Bogfelts är ett serviceinriktat företag som alltid har kundens mervärde i fokus.
          </HeaderP>
          <Link to='about'>
            <BtnWrapper>
              <FullButton title="Veta mer" />
            </BtnWrapper>
          </Link>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>

  
    
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner "style={{ width: "400px", borderRadius:10}}>
    <div class="carousel-item active">
    <img className="radius8 m-auto  p-0" src={SlideImage1} alt="office" style={{zIndex: 9, width: "400px", borderRadius:0}} />
    </div>
    <div class="carousel-item">
    <img className="radius8 m-auto  p-0" src={SlideImage2} alt="office" style={{zIndex: 9, width: "400px", borderRadius:0}} />
    </div>
    <div class="carousel-item">
    <img className="radius8 m-auto  p-0" src={SlideImage3} alt="office" style={{zIndex: 9, width: "400px", borderRadius:0}} />
    </div>
    <div class="carousel-item">
    <img className="radius8 m-auto  p-0" src={SlideImage4} alt="office" style={{zIndex: 9, width: "400px", borderRadius:0}} />
    </div>
    <div class="carousel-item">
    <img className="radius8 m-auto  p-0" src={SlideImage5} alt="office" style={{zIndex: 9, width: "400px", borderRadius:0}} />
    </div>
    <div class="carousel-item">
    <img className="radius8 m-auto  p-0" src={SlideImage6} alt="office" style={{zIndex: 9, width: "400px", borderRadius:0}} />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

          
          <QuoteWrapper className="balon flexCenter darkBg radius8">
            <QuotesWrapper>
              <QuotesIcon />
            </QuotesWrapper>
            <div>
              <p className="font15 whiteColor">
                <em>Jobbar över hela landet</em>
              </p>
              <p className="font13 orangeColor textRight" style={{marginTop: '10px'}}>Stockholm</p>
            </div>
          </QuoteWrapper>
          
        </ImageWrapper>
        <GreyDiv className="lightBg"></GreyDiv>
      </RightSide>
    </Wrapper>
  );
}


const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  margin-top: -200px;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  margin-top: -150px;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  .carousel-control-prev-icon, .carousel-control-next-icon {
    border-radius: 50%;
    background-color: #7620FF;
    color: yellow;
    cursor: pointer;
  }
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
    margin-top: -30px;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
    margin-bottom: 60px;
    left: 30px;
    
   
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;


