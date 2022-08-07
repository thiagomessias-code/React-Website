import React from 'react';

import Img1 from '../../../assets/img/parceiros/botkyrka.png'
import Img2 from '../../../assets/img/parceiros/alvesta4.png'
import Img3 from '../../../assets/img/parceiros/lidingo.png'
import Img4 from '../../../assets/img/parceiros/osteraker.png'

import Img5 from '../../../assets/img/parceiros/orebro4.png'
import Img6 from '../../../assets/img/parceiros/strkomm2.png'
import Img7 from '../../../assets/img/parceiros/taby.png'
import Img8 from '../../../assets/img/parceiros/tie4.png'

import Img9 from '../../../assets/img/parceiros/habo4.png'
import Img10 from '../../../assets/img/parceiros/Danderyd.png'
import Img11 from '../../../assets/img/parceiros/norr4.png'
import Img12 from '../../../assets/img/parceiros/katri4.png'

import Img13 from '../../../assets/img/parceiros/huddinge.png'
import Img14 from '../../../assets/img/parceiros/jarfalla.png'
import Img15 from '../../../assets/img/parceiros/nynashamn.png'
import Img16 from '../../../assets/img/parceiros/nacka4.png'

import Img17 from '../../../assets/img/parceiros/vax4.png'
import Img18 from '../../../assets/img/parceiros/sollentuna.png'
import Img19 from '../../../assets/img/parceiros/uppvasby.png'
import Img20 from '../../../assets/img/parceiros/str2kmm.png'

import {Container} from './styles';

function Partners() {
    return (
        <Container>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 ">
                        <a href=""><img className='line1' src={Img1} alt=""/></a>
                    </div>
                    <div className="col-md-3">
                        <a href=""><img src={Img2} alt=""/></a>
                    </div>
                    <div className="col-md-3">
                        <a href=""><img src={Img3} alt=""/></a>
                    </div>
                    <div className="col-md-3">
                        <a href=""><img src={Img4} alt=""/></a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3 ">
                        <a href=""><img className='line1' src={Img5} alt=""/></a>
                    </div>
                    <div className="col-md-3">
                        <a href=""><img src={Img6} alt=""/></a>
                    </div>
                    <div className="col-md-3">
                        <a href=""><img src={Img7} alt=""/></a>
                    </div>
                    <div className="col-md-3">
                        <a href=""><img src={Img8} alt=""/></a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3 ">
                        <a href=""><img className='line1' src={Img9} alt=""/></a>
                    </div>
                    <div className="col-md-3">
                        <a href=""><img src={Img10} alt=""/></a>
                    </div>
                    <div className="col-md-3">
                        <a href=""><img src={Img11} alt=""/></a>
                    </div>
                    <div className="col-md-3">
                        <a href=""><img src={Img12} alt=""/></a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3 ">
                        <a href=""><img className='line1' src={Img13} alt=""/></a>
                    </div>
                    <div className="col-md-3">
                        <a href=""><img src={Img14} alt=""/></a>
                    </div>
                    <div className="col-md-3">
                        <a href=""><img src={Img15} alt=""/></a>
                    </div>
                    <div className="col-md-3">
                        <a href=""><img src={Img16} alt=""/></a>
                    </div>
                </div>
                  <div className="row">
                    <div className="col-md-3 ">
                        <a href=""><img className='line1' src={Img17} alt=""/></a>
                    </div>
                    <div className="col-md-3">
                        <a href=""><img src={Img18} alt=""/></a>
                    </div>
                    <div className="col-md-3">
                        <a href=""><img src={Img19} alt=""/></a>
                    </div>
                    <div className="col-md-3">
                        <a href=""><img src={Img20} alt=""/></a>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Partners;