import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/add/1.png";
import AddImage2 from "../../assets/img/add/2.png";
import AddImage3 from "../../assets/img/add/3.png";
import AddImage4 from "../../assets/img/add/4.png";
import Img1 from '../../assets/img/slider/service1.jpg'
import Sus1 from "../../assets/img/sustentabilidade/01sus.jpg";
import Sus2 from "../../assets/img/sustentabilidade/02sus.jpg";
import Sus3 from "../../assets/img/sustentabilidade/03sus.jpg";

export default function Services() {
  return (
    <Wrapper id="services">
     
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">VÅRT ERBJUDANDE</h1>
            <p className="font13">
            Upptäck våra tjänster
            </p>
           
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <img style={{maxWidth: "100px"}} src={Img1} alt="" />
              <ServiceBox
                
                title="Service är underhåll"
                subtitle="Bogfelts tar helhetsansvar för er anläggning och ser till att den fungerar optimalt. Med en väl genomtänkt underhållsplan kan driftstörningar och oförutsedda kostnader minimeras. Löpande rondering och service i kombination med planerat underhåll ger en mer störningsfri och kostnadseffektiv anläggning.

                Bogfelts har en beredskapsorganisation tillgänglig dygnet runt för snabba åtgärder vid akuta insatser.
                
                Genom att lägga ut erat driftansvar på Bogfelts får ni en optimal helhetslösning för eran belysningsanläggning."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
            <img style={{maxWidth: "100px"}} src={Img1} alt="" />
              <ServiceBox
                title="Entreprenad"
                subtitle="Bogfelts har mångårig och gedigen erfarenhet av både små och stora entreprenader inom belysningsteknik. Med branscherfarenhet sedan 1989 har vi bred kompetens inom verksamheten med god kännedom om kundens behov och önskemål för ett välfungerande samarbete. Vi erbjuder kunden en optimerad totallösning för en kostnadseffektiv och driftsäker belysningsanläggning."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
            <img style={{maxWidth: "100px"}} src={Img1} alt="" />
              <ServiceBox
                
                title="Belysningsprodukter"
                subtitle="Genom ett nära samarbete med branschens tillverkare har Bogfelts ständigt koll på marknadens produkter samt kan säkerställa lagerhållning av det mest frekventa materialet. Detta medför snabba leveranser och hög tillgänglighet. Vi håller oss samtidigt uppdaterade i produkternas kostnads- och teknikutveckling, vilket är en förutsättning för framgångsrik underhållsplanering."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
            <img style={{maxWidth: "100px"}} src={Img1} alt="" />
              <ServiceBox  title="Tekniska tjänster" subtitle="Med vår samlade specialistkunskap inom belysningsteknik utför vi en besiktning av er anläggning för att upprätta en skräddarsydd drift - och underhållsplan med fokus på driftsäkerhet och god ekonomi. Efter genomförd kartläggning av systemet tar vi även fram en handlingsplan med kostnadsbesparande åtgärder.

Vi utför även energikartläggningar, besiktningar, mätningar, ljusberäkningar och projektering." />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h4 className="font15 semiBold">Hållbarhet består i att bygga med framtiden i åtanke.</h4>
                <h2 className="font40 extraBold">INVESTER
FÖR EN BÄTTRE VÄRLD</h2>
                <p className="font12">
                Mer än av ekonomiska skäl har effektiva system potential att positivt påverka familjens budget och miljön. Därmed minskar behovet av att producera energi i stora mängder, vilket sparar naturresurser och minimerar problem i distributionsnätet.
                </p>
                <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0"}}>
                  <div style={{ width: "190px" }}>
                    <FullButton title="Veta mer" action={() => alert("clicked")} />
                  </div>
                  <div style={{ width: "190px", marginLeft: "15px" }}>
                    <FullButton title="Kontakta oss" action={() => alert("clicked")} border />
                  </div>
                </ButtonsRow>
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
                      <img src={Sus1} alt="office" />
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