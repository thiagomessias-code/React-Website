import React from "react";
import styled from "styled-components";

// Assets
import AddImage1 from "../../assets/img/sustentabilidade/city.jpg";

import Sus1 from "../../assets/img/sustentabilidade/01sus.jpg";
import Sus2 from "../../assets/img/sustentabilidade/02sus.jpg";
import Sus3 from "../../assets/img/sustentabilidade/03sus.jpg";
import Sus4 from "../../assets/img/contact1.jpg"

export default function Sustaibility() {
  return (
    <Wrapper id="services"data-aos="fade-fadeInUp" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
     
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="" style={{margin:0}}>
          <HeaderInfo>
              <div className="row">
                <div className="ImgCenter col-md-12">
                <img className="img-responsive d-block w-100" src={AddImage1} alt=""/>
                <h1 className="font40 extraBold  title">Hållbarhet</h1>
                </div>
              </div>
            
           
    
          </HeaderInfo>
        </div>
        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h4 className="font15 semiBold">Hållbarhet består i att bygga med framtiden i åtanke.</h4>
                <h2 className="font40 extraBold">INVESTER
FÖR EN BÄTTRE VÄRLD</h2>
                <p className="font15">
                Mer än av ekonomiska skäl har effektiva system potential att positivt påverka familjens budget och miljön. Därmed minskar behovet av att producera energi i stora mängder, vilket sparar naturresurser och minimerar problem i distributionsnätet.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores sint iure facilis tempora sapiente, ullam aperiam aliquam rem nihil! Officia deserunt et eum nostrum id ducimus quia minus! Repellat?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque vel iure aperiam blanditiis. Voluptate optio officiis velit natus, ea sit eum, maiores ad dolores, amet excepturi porro recusandae quidem non!
                </p>
                
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={Sus1} alt="office" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={Sus2} alt="office" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={Sus3} alt="office" />
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src={Sus4} alt="office" />
                    </AddImgWrapp4>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5% auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;