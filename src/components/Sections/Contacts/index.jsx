import React from "react";
import {
    ContactImgBox,
    Contacts,
    HeaderInfo,
    SumbitWrapper,
    Wrapper
} from "./styles"
// Assets
import ContactImg1 from "../../../assets/img/1contact.jpg";
import ContactImg2 from "../../../assets/img/2contact.jpg";
import ContactImg3 from "../../../assets/img/3contact.jpg";

export default function Contact() {
    return (
        <Wrapper id="contact">
            <div className="lightBg">
                <div className="container">
                    <HeaderInfo>
                        <h1 className="font40 extraBold mt-4">Kontakta oss</h1>
                        <p className="font13">
                            Tvivlar, förslag eller vill bli en del av vårt team. Hör av dig via mail eller
                            telefon.
                        </p>
                    </HeaderInfo>
                    <Contacts>
                        <div className="row" style={{}}>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <span className="name">Joakim Bogfelt | <span className="function">VD</span></span><br/>

                                        <i class="fa-solid fa-phone"></i>
                                        <span className="phone">070 944 49 50</span><br/>
                                        <i class="fa-solid fa-envelope"></i>
                                        <a className="mail" href="mailto:joakim.bogfelt@bogfelts.se">joakim.bogfelt@bogfelts.se</a>
                                    </li>

                                    <li class="list-group-item">
                                        <span className="name">Mario Decarlini | <span className="function">VD Holding, Operativ Chef Stockholm</span></span><br/>

                                        <i class="fa-solid fa-phone"></i>
                                        <span className="phone">070 942 40 67</span><br/>
                                        <i class="fa-solid fa-envelope"></i>
                                        <a className="mail" href="mailto:joakim.bogfelt@bogfelts.se">mario.decarlini@bogfelts.se</a>
                                    </li>

                                    <li class="list-group-item">
                                        <span className="name">Roman Iljins |<span className="function"> Projektledare Projekt Sthlm</span></span><br/>

                                        <i class="fa-solid fa-phone"></i>
                                        <span className="phone">070 950 49 46</span><br/>
                                        <i class="fa-solid fa-envelope"></i>
                                        <a className="mail" href="mailto:joakim.bogfelt@bogfelts.se">roman.iljins@bogfelts.se</a>
                                    </li>

                                    <li class="list-group-item">
                                        <span className="name">Martin Messo | <span className="function
                                        ">Projektledare Projekt Norr</span><span className="function"></span></span><br/>

                                        <i class="fa-solid fa-phone"></i>
                                        <span className="phone">076 106 68 69</span><br/>
                                        <i class="fa-solid fa-envelope"></i>
                                        <a className="mail" href="mailto:joakim.bogfelt@bogfelts.se">
                                            martin.messo@bogfelts.se</a>
                                    </li>

                                    <li class="list-group-item">
                                        <span className="name">Peter Forsell | <span className="function">Projektledare Entreprenad </span></span><br/>

                                        <i class="fa-solid fa-phone"></i>
                                        <span className="phone">070 895 76 69</span><br/>
                                        <i class="fa-solid fa-envelope"></i>
                                        <a className="mail" href="mailto:joakim.bogfelt@bogfelts.se">peter.forsell@bogfelts.se</a>
                                    </li>

                                    <li class="list-group-item">
                                        <span className="name">Rafaela Christensen | <span className="function">Felanmälan Norr & Söder</span></span><br/>

                                        <i class="fa-solid fa-phone"></i>
                                        <span className="phone">073 803 65 92</span><br/>
                                        <i class="fa-solid fa-envelope"></i>
                                        <a className="mail" href="mailto:joakim.bogfelt@bogfelts.se">rafaela.christensen@bogfelts.se</a>
                                    </li>

                                    <li class="list-group-item">
                                        <span className="name">Adam Marcelind | <span className="function"> Projektledare Påkörd & Kabelfel Sthlm Norr</span></span><br/>

                                        <i class="fa-solid fa-phone"></i>
                                        <span className="phone">073 875 60 06</span><br/>
                                        <i class="fa-solid fa-envelope"></i>
                                        <a className="mail" href="mailto:joakim.bogfelt@bogfelts.se">adam.marcelind@bogfelts.se</a>
                                    </li>

                                    <li class="list-group-item">
                                        <span className="name">Svetlana Kneiziene | <span className="function"> Projektledare Påkörd & Kabelfel Sthlm Syd</span></span><br/>

                                        <i class="fa-solid fa-phone"></i>
                                        <span className="phone">070 950 57 61</span><br/>
                                        <i class="fa-solid fa-envelope"></i>
                                        <a className="mail" href="mailto:joakim.bogfelt@bogfelts.se">svetlana.kneiziene@bogfelts.se</a>
                                    </li>

                                    <li class="list-group-item">
                                        <span className="name">Marielle Bogfelt | <span className="function">Driftledare Felanmälan Mellan </span></span><br/>

                                        <i class="fa-solid fa-phone"></i>
                                        <span className="phone">072 373 56 61</span><br/>
                                        <i class="fa-solid fa-envelope"></i>
                                        <a className="mail" href="mailto:joakim.bogfelt@bogfelts.se">marielle.bogfelt@bogfelts.se</a>
                                    </li>

                                    <li class="list-group-item">
                                        <span className="name">Lucas Bogfelt | <span className="function">Kalkyl Entreprenad</span></span><br/>

                                        <i class="fa-solid fa-phone"></i>
                                        <span className="phone">070 813 42 54</span><br/>
                                        <i class="fa-solid fa-envelope"></i>
                                        <a className="mail" href="mailto:joakim.bogfelt@bogfelts.se">
                                            lucas.bogfelt@bogfelts.se</a>
                                    </li>

                                    <li class="list-group-item">
                                        <span className="name">Mats Högberg | <span className="function">Projektledare Mälardalen</span></span><br/>

                                        <i class="fa-solid fa-phone"></i>
                                        <span className="phone">070 964 04 40</span><br/>
                                        <i class="fa-solid fa-envelope"></i>
                                        <a className="mail" href="mailto:joakim.bogfelt@bogfelts.se">mats.hogberg@bogfelts.se</a>
                                    </li>

                                    <li class="list-group-item">
                                        <span className="name">

                                            Kundreskontra/ Leverantörsreskontra</span><br/>
                                        <i class="fa-solid fa-envelope"></i>
                                        <a className="mail" href="mailto:joakim.bogfelt@bogfelts.se">
                                            faktura@bogfelts.se</a>
                                    </li>

                                    <li class="list-group-item">
                                        <span className="name">Besöksadress:</span><br/>

                                        <i class="fa-solid fa-phone"></i>
                                        <span className="phone">Danderyd Svärdvägen 19, 3 tr 182 33 Danderyd</span><br/>
                                        <i class="fa-solid fa-envelope"></i>
                                        <a className="mail" href="mailto:joakim.bogfelt@bogfelts.se">Örebro Adolfbergsvägen 2-4 702 27 Örebro</a>
                                    </li>

                                </ul>
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-6 flex">
                                <div
                                    style={{
                                        width: "50%"
                                    }}
                                    className="flexNullCenter flexColumn">
                                    <ContactImgBox>
                                        <img src={ContactImg1} alt="office" className="radius6"/>
                                    </ContactImgBox>
                                    <ContactImgBox>
                                        <img src={ContactImg2} alt="office" className="radius6"/>
                                    </ContactImgBox>
                                </div>
                                <div
                                    style={{
                                        width: "50%"
                                    }}>
                                    <div
                                        style={{
                                            marginTop: "100px"
                                        }}>
                                        <img src={ContactImg3} alt="office" className="radius6"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Contacts>
                </div>

            </div>

        </Wrapper>
    );
}
