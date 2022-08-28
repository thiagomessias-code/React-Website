import React from 'react'
import SlideImage1 from "../../assets/img/1.jpg";
import AddImage1 from "../../assets/img/group-1.jpg"
import {AddLeft,AddLeftInner,AddRight,Advertising,ButtonsRow,ImgWrapper,} from './style'

import Perfil from "../../assets/img/projects/perfil.jpg";
import FullButton from "../../components/Buttons/FullButton";

import { Link } from 'react-router-dom';

class About extends React.Component {
    render (){
        return (
            <section class="about-section">
                
              <div className="row">
                <div className="ImgCentercol-md-12">
                <img className="img-responsive d-block w-100" src={AddImage1} alt=""/>
                <h1 className="font40 extraBold  title">Om oss</h1>
                </div>
              </div>
            
    
            <div class="container" data-aos="fadeInUp" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <div class="row clearfix">
             
                    <div class="content-column col-md-6 col-sm-12 col-xs-12">
                        <div class="inner-column">
                            <div class="sec-title">
                                <div class="title">Om oss</div>
                                <h2>Vi är bäst på det vi gör.</h2>
                            </div>
                            <div class="text font20" >Bogfelts har mångårig och gedigen erfarenhet av både små och stora entreprenader inom belysningsteknik. Med branscherfarenhet sedan 1989 har vi bred kompetens inom verksamheten med god kännedom om kundens behov och önskemål för ett välfungerande samarbete. Vi erbjuder kunden en optimerad totallösning för en kostnadseffektiv och driftsäker belysningsanläggning.</div>
                            <div class="email">Kontakta oss: <span class="theme_color">info@bogfelts.se</span></div>
                           
                        </div>
                    </div>
                    
             
                    <div class="image-column col-md-6 col-sm-12 col-xs-12">
                        <div class="inner-column " data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div class="image">
                                <img src={SlideImage1} alt=""/>
                                <div class="overlay-box">
                                    <div class="year-box"><span class="number">30</span>år <br/> Erfarenhet <br/> Arbetssätt</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={Perfil} alt="add" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h4 className="font15 semiBold">Joakim Bogfefelts</h4>
              <h2 className="font40 extraBold">Co. Grundarer</h2>
              <p className="font15">
              Företaget grundades 1989 i Stokolm, Sverige, av elektroingenjören Joakim Bogfelts. Företaget startade i en liten verkstad i hans hem när han gick på college och är idag det största offentliga belysningsunderhållsföretaget i landet, även ledande inom försäljning av el. produkter, med 6 filialer och mer än 120 anställda. 
              </p>
             
            </AddRight>
          </Advertising>
        </div>
      </div>
        
        </section>
    
        )
    }
    
   
}



export default About;