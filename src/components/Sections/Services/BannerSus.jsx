import React from 'react'
import PhotoSus from '../../../assets/img/fotosus.jpg'
export default function BannerSus() {
  return (

        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img className='img-fluid' src={PhotoSus} alt="" style={{width: "400px", height: "400px"}}/>
                </div>
                <div className="col-md-6">
                    <h1>Sustentabilodadae</h1>
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, atque nobis? Cupiditate culpa, est nesciunt vel fugit facilis magnam ullam praesentium corporis rem ipsum accusamus voluptatum. Laudantium odit excepturi veritatis.</span>
                </div>
            </div>
        </div>
  )
}
