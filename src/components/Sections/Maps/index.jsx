import React from 'react'
import {Container} from './styles'

export default function Map() {
    return (
        <Container>
            <section id="google-map-area">
                <div className="container-fluid text-center">
                    <div className="row">
                        <div className="col-12 padding-0">
                            <object
                                data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2030.9497036438584!2d18.03308091565242!3d59.40055161235248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9c41b1fe2525%3A0xda40730ed0efe82c!2zU3bDpHJkdsOkZ2VuIDExRCwgMTgyIDMzIERhbmRlcnlkLCBTdcOpY2lh!5e0!3m2!1spt-BR!2sbr!4v1622671003758!5m2!1spt-BR!2sbr"
                                allowfullscreen=""
                                loading="lazy"></object>
                        </div>
                    </div>
                </div>
            </section>
        </Container>

    )
}
