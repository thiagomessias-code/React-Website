import React, { Component } from "react";
import Img1 from '../../assets/img/slider/team.jpg'

class Team extends Component {
    render() {
        return (
	<section class="section-team" >
		<div class="container">
			
			<div class="row justify-content-center text-center">
				<div class="col-md-8 col-lg-6">
					<div class="header-section">
						<h3 class="small-title">Våra experter</h3>
						<h2 class="title">Låt oss träffa våra teammedlemmar</h2>
					</div>
				</div>
			</div>
			
			<div class="row" data-aos="fadeInUp" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
				
				<div class="col-sm-6 col-lg-4 col-xl-3">
					<div class="single-person">
						<div class="person-image">
							<img src={Img1} alt=""/>
							<span class="icon">
								<i class=""></i>
							</span>
						</div>
						<div class="person-info">
							<h3 class="full-name">Joakim Bogfeltts</h3>
							<span class="speciality">President</span>
						</div>
					</div>
				</div>
				
				<div class="col-sm-6 col-lg-4 col-xl-3">
					<div class="single-person">
						<div class="person-image">
						<img src={Img1} alt=""/>
							<span class="icon">
								<i class=""></i>
							</span>
						</div>
						<div class="person-info">
							<h3 class="full-name">Joakim Bogfelts</h3>
							<span class="speciality">Direktör</span>
						</div>
					</div>
				</div>
				
				<div class="col-sm-6 col-lg-4 col-xl-3">
					<div class="single-person">
						<div class="person-image">
						<img src={Img1} alt=""/>
							<span class="icon">
								<i class=""></i>
							</span>
						</div>
						<div class="person-info">
							<h3 class="full-name">Joakim Bogfelts</h3>
							<span class="speciality">Senior</span>
						</div>
					</div>
				</div>
		
				<div class="col-sm-6 col-lg-4 col-xl-3">
					<div class="single-person">
						<div class="person-image">
						<img src={Img1} alt=""/>
							<span class="icon">
								<i class=""></i>
							</span>
						</div>
						<div class="person-info">
							<h3 class="full-name">Joakim Bogfelts</h3>
							<span class="speciality">Senior</span>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</section>
            
        )
    }
}

export default Team;