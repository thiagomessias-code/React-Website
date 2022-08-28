import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import ProjectImg1 from "../../assets/img/projects/0-1.jpg";
import ProjectImg2 from "../../assets/img/projects/0-2.jpg";
import ProjectImg3 from "../../assets/img/projects/0-3.jpg";
import ProjectImg4 from "../../assets/img/projects/0-4.jpg";
import ProjectImg5 from "../../assets/img/projects/0-5.jpg";
import ProjectImg6 from "../../assets/img/projects/0-6.jpg";



import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <Wrapper id="projects" data-aos="fadeInUp" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo >
            <h1 className="font40 extraBold">Upptäck våra projekt</h1>
            <p className="font13">
            Vi har ett utbildat team och modern utrustning för att möta alla projekt.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <Link to="/projects">
                <ProjectBox
                  img={ProjectImg1}
                  title=" Underjordiska kablar"
                  text="Kablage fungerar över hela landet."
                />
              </Link>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <Link to="/projects">
                <ProjectBox
                  img={ProjectImg2}
                  title="Gatubelysning"
                  text="Projektet startade på huvudgatan i Stokolm."
                  
                />
              </Link>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <Link to="/projects">
                <ProjectBox
                  img={ProjectImg3}
                  title="Ännu ett arbete pågår"
                  text="kvalitet och engagemang."
                  
                />
              </Link>
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <Link to="/projects">
                <ProjectBox
                  img={ProjectImg4}
                  title="Modern belysning."
                  text="Följ alltid med i utvecklingen av energisparteknik."
                  
                />
              </Link>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <Link to="/projects">
                <ProjectBox
                  img={ProjectImg5}
                  title="Arbeta i interiören"
                  text="Struktur för arbete inuti."
                  
                />
              </Link>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <Link to="/projects">
                <ProjectBox
                  img={ProjectImg6}
                  title="Julbelysning"
                  text="Vi är med på ett viktigt datum, med en toppmodern julstruktur."
                  
                />
              </Link>
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px", width: "200px" }}>
              
            </div>
          </div>
        </div>
      </div>
     
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;

