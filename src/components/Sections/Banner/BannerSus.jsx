import React from 'react'
import PhotoSus from '../../../assets/img/sustentabilidade/meio.jpg'
import FullButton from '../../Buttons/FullButton'
import { Link } from 'react-router-dom'
import { BtnWrapper } from './styles'






export default function BannerSus() {
  return (

        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <img className='img-fluid' src={PhotoSus} alt="" style={{width: "600px", height: "400px"}}/>
                </div>
                <div className="col-md-6 mt-4">
                    <h1   className="font35 extraBold">Hållbarhet</h1>
                    <span  className="font13">Investeringar i inköp av ny teknik och LED-belysningsutrustning, vilket ger stora besparingar till landet och hela världen, vilket gör världen till en bättre plats.
                    <br />
                    Företaget har följt denna väg i de små sakerna för att anpassa ekonomiska investeringar med hållbara metoder som redan är sociala skyldigheter och för att bevara miljön vi lever i även för framtida generationer.</span>
                    <Link to='sustainability'>
            <BtnWrapper className='text-center mt-4'>
            <FullButton title="Veta mer" />
            </BtnWrapper>
              
          </Link>
                </div>
            </div>
        </div>
  )
}
