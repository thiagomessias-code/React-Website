import React, {useEffect} from "react";

import Aos from 'aos'
import 'aos/dist/aos.css'

import {AddImgWrapp2,AddImgWrapp1,AddImgWrapp3,AddImgWrapp4,AddLeft,AddRight,AddRightInner,Advertising,ButtonsRow,HeaderInfo,ServiceBoxRow,ServiceBoxWrapper,Wrapper} from "./style";
// Components
import ClientSlider from "../../Elements/ClientSlider";
import ServiceBox from "../../Elements/ServiceBox";
import FullButton from "../../Buttons/FullButton";
// Assets
import Sus1 from "../../../assets/img/sustentabilidade/01sus.jpg";
import Sus2 from "../../../assets/img/sustentabilidade/02sus.jpg";
import Sus3 from "../../../assets/img/sustentabilidade/03sus.jpg";



import Img4 from "../../../assets/img/services/service-4.jpg";

export default function Services() {
  useEffect(() => {
    Aos.init();
  },[])
  return (
    
    <Wrapper id="services " >
     
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">VÅRT ERBJUDANDE</h1>
            <p className="font13">
            Upptäck våra tjänster
            </p>
           
          </HeaderInfo>
          <ServiceBoxRow className="flex services">
            <ServiceBoxWrapper>
              <i className="radius8 fa-solid fa-lightbulb-on" style={{maxWidth: "130px" , marginLeft:"40px"}}  alt="" />
              <ServiceBox
                
                title="Service är underhåll"
                subtitle="Bogfelts tar helhetsansvar för er anläggning och ser till att den fungerar optimalt. Med en väl genomtänkt underhållsplan kan driftstörningar och oförutsedda kostnader minimeras. Löpande rondering och service i kombination med planerat underhåll ger en mer störningsfri och kostnadseffektiv anläggning.

                Bogfelts har en beredskapsorganisation tillgänglig dygnet runt för snabba åtgärder vid akuta insatser.
                
                Genom att lägga ut erat driftansvar på Bogfelts får ni en optimal helhetslösning för eran belysningsanläggning."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
            <img className="radius8" style={{maxWidth: "130px" , marginLeft:"40px"}} src={Img4} alt="" />
              <ServiceBox
                title="Entreprenad"
                subtitle="Bogfelts har mångårig och gedigen erfarenhet av både små och stora entreprenader inom belysningsteknik. Med branscherfarenhet sedan 1989 har vi bred kompetens inom verksamheten med god kännedom om kundens behov och önskemål för ett välfungerande samarbete. Vi erbjuder kunden en optimerad totallösning för en kostnadseffektiv och driftsäker belysningsanläggning."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
            <img  className="radius8" style={{maxWidth: "130px" , marginLeft:"40px"}} src={Img4} alt="" />
              <ServiceBox
                
                title="Belysningsprodukter"
                subtitle="Genom ett nära samarbete med branschens tillverkare har Bogfelts ständigt koll på marknadens produkter samt kan säkerställa lagerhållning av det mest frekventa materialet. Detta medför snabba leveranser och hög tillgänglighet. Vi håller oss samtidigt uppdaterade i produkternas kostnads- och teknikutveckling, vilket är en förutsättning för framgångsrik underhållsplanering."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
            <img className="radius8" style={{maxWidth: "130px" , marginLeft:"40px"}} src={Img4} alt="" />
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

