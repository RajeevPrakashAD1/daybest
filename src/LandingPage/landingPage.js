import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './landingPage.css';
import style from './landingpage.module.css';
import Slider from 'react-slick';
import PreBookButton2 from './prebookbutton2';
import PreBookButton from './prebookbutton';
import { KnowMore } from '../Components/Utils/button';
import ReactPlayer from 'react-player';
import TopNavbar from '../Components/TopNavbar/TopNavbar';
import LazyLoad from 'react-lazyload';
//sdtyled components
import {
	S1div,
	S2div,
	S4div,
	H1,
	H2,
	P1,
	S5div,
	S6div,
	S7div,
	S8div,
	P2,
	Wrapper7,
	Wrapper11,
	Wrapper8,
	Mynav
} from './styledcomponent';

//icons
import FacebookIcon from '@material-ui/icons/Facebook';

//images
import s9 from './images/s9.svg';
import s1 from './images/s1.svg';
import s2 from './images/s2.svg';

import s4 from './images/s4.svg';
import s5 from './images/s5.svg';
import s6 from './images/s6.png';
import s11 from './images/s11.svg';
import s7 from './images/s7.svg';
import s8 from './images/s8.svg';
import s10 from './images/s10.svg';

import logo from './images/logo.svg';
import logo2 from './images/logo2.svg';
import cart from './images/cart.svg';
import farm from './images/farm.svg';
import medikit from './images/medikit.svg';
import grppic from './images/grppic.png';
import design from './images/design.svg';
import drnimg1 from './images/drnimg1.png';

import drnimg2 from './images/drnimg2.png';
import drnimg3 from './images/drnimg3.png';
import c1 from './images/c1.svg';
import c2 from './images/c2.svg';
import c3 from './images/c3.svg';
import c4 from './images/c4.svg';
import c5 from './images/c5.svg';
import c6 from './images/c6.svg';
import c7 from './images/c7.svg';
import c8 from './images/c8.svg';
import c9 from './images/c9.svg';
import c10 from './images/c10.svg';
import c11 from './images/c11.svg';
import face from './images/face.svg';
import sd1 from './images/sd1.svg';
import truck from './images/truck.svg';
import defence from './images/defence.svg';
import sudharshan from './images/sudharshan.svg';
import matang from './images/matang.svg';
import hanuyan from './images/hanuyan.svg';

//video

//mport v2 from './video/v2.mp4';

const LandingPage = () => {
	// slider ke liye backchodi
	function SampleNextArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={{
					...style,
					display: 'block',
					background: 'grey',
					margin: '0px 50px',
					borderRadius: '100%',
					width: '30px',
					height: '30px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}
				onClick={onClick}
			/>
		);
	}

	function SamplePrevArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={{
					...style,
					display: 'block',
					background: 'grey',
					margin: '0px 150px',
					borderRadius: '100%',
					width: '20px',
					width: '30px',
					height: '30px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}
				onClick={onClick}
			/>
		);
	}

	var settings = {
		centerMode: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 700,

		responsive: [
			{
				breakpoint: 1024,
				settings: {
					centerMode: false,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					centerMode: false,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					centerMode: false,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		],
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />
	};

	return (
		<React.Fragment>
			<LazyLoad height={200}>
				<div className="wrapper" style={{ margin: 'auto' }}>
					<TopNavbar />

					<section id="section1">
						<S1div>
							<div className="tdiv">
								<div className="ptdiv">
									<H1> Farming The Future</H1>
									<P1>
										We provide smart agricultural intellingence & technology to farmers & government
										institutions so that they gain a competitive advantage in the future of farming
									</P1>
									<KnowMore />
								</div>
								<div className="picdiv">
									<img src={farm} className="farmpic" alt="farmpic" />
								</div>
							</div>
						</S1div>
					</section>

					<section id="section2">
						<Container fluid>
							<S2div>
								<div className="socialIcons">
									<ul className="footer-icons">
										<li>
											<a href="https://twitter.com/daybestpro" target="_blank">
												<i class="fab fa-twitter" />
											</a>
										</li>
										<li>
											<a href="https://www.facebook.com/daybestpro" target="_blank">
												<i class="fab fa-facebook" />
											</a>
										</li>
										<li>
											<a href="https://www.linkedin.com/company/daybestpro/" target="_blank">
												<i class="fab fa-linkedin" />
											</a>
										</li>
									</ul>
								</div>
								<div className="psdiv">
									<div className="servicediv">
										<div className="csd">
											<img src={truck} alt="m" height="40px" />
											<P2> Agriculture</P2>
											<P1>
												{' '}
												The Agricultural section has been further Categorised into - Kisaan
												Station
											</P1>
										</div>
									</div>
									<div className="servicediv">
										<div className="csd">
											<img src={medikit} alt="m" height="40px" />
											<P2> MediTech</P2>
											<P1>
												The Drone Technology used to assist Medicine Delivery, Organ Delivering,
												Blood Banking etc
											</P1>
										</div>
									</div>
									<div className="servicediv">
										<div className="csd">
											<img src={defence} alt="m" height="40px" />
											<P2> Defence </P2>
											<P1>Survellience for Military Purposes and Border Security</P1>
										</div>
									</div>
									<div className="tcsd">
										<H2> Best Services From Us </H2>
									</div>
								</div>
							</S2div>
						</Container>
					</section>

					<div className="section10">
						<div className="section11-content">
							<div className="s11-heading">
								<h2>Feature Product </h2>
							</div>
							<Slider {...settings}>
								<div className="slider_container2">
									<div className="stenp2">
										<div className="s10img">
											<img height="250px" width="400px" src={sd1} />
										</div>
										<div className="blurtext2">
											<H1>Krishakti</H1>
											<P1 className="btp">
												Technology is a boon & a miracle happens when Smart Precision Nozzle
												meets with state of art avionics, packed with superpower batteries,
												Daybest Aerospace is presenting M-Series & X-Series of spraying drones.
												Tank Capacity- 7 Liter, Flight Time- 30 Minutes, Coverage- 20 acres per
												day. So Daybest is presenting Powerful flying machine, Easy to assemble,
												Easy to fly with futuristic design & structure.
											</P1>
										</div>
									</div>
								</div>

								<div className="slider_container2">
									<div className="stenp2">
										<div className="s10img">
											<img height="250px" width="400px" src={hanuyan} />
										</div>
										<div className="blurtext2">
											<H1>Hanuyaan</H1>
											<P1 className="btp">
												The HANUYAAN can fly longer and load more payload. The frame of HANUYAAN
												is 6kg, and the max take-off weight is about 23kg, the HANUYAAN can fly
												about 1.5 hours with 4 Kg, 2.5 hours with a 2kg payload, and fly 3 hours
												with no payload. The suggested max payload is 5kg. The cruising speed of
												the HANUYAAN can reach 26m/s. The HANUYAAN can take off and land
												vertically in a very small area.
											</P1>
										</div>
									</div>
								</div>
								<div className="slider_container2">
									<div className="stenp2">
										<div className="s10img">
											<img height="250px" width="400px" src={sudharshan} />
										</div>
										<div className="blurtext2">
											<H1>Sudarshan</H1>
											<P1 className="btp">
												Sudarshan is a versatile Heavy payload lift capable, Long endurance
												Engine-powered Helicopter UAV. Capable of fully Autonomous GPS waypoint
												navigation, Auto Takeoff and Auto Landing Helicopter UAV. As a Vertical
												Takeoff and Landing vehicle, this can be launched in very constrained
												spaces and no need for long paved runways.Max Endurance 3 Hour 20
												Minutes (Depends on Payload), Ground Speed 60 Kmph, Range Operation 100
												Km, Rotor Dimension 2.2 meters.
											</P1>
										</div>
									</div>
								</div>
							</Slider>
						</div>
					</div>

					<section id="section4">
						<contaniner fluid>
							<S4div>
								<div className="p4">
									<div className="p4d">
										<Row className="s4u">
											<Col lg="6" md="6" sm="12" className="s41" xs={{ order: 'last' }}>
												<div className="p4text">
													<H2>About Daybest</H2>
													<P1>
														Daybest Research Pvt Ltd. is a professional manufacturer of VTOL
														Fixed wing UAV for industrial application . With a team of over
														10 year experience in R&D of UAV and drone products, we have
														independent R&D ability and reliable quality, reasonable prices
														and advanced designs.
													</P1>
													<a href="#">
														<P1>Read More ...</P1>
													</a>
												</div>
											</Col>
											<Col lg="6" md="6" sm="12" xs={{ order: 'last' }}>
												<img src={grppic} alt="gp" className="s4grppic" height="300px" />
											</Col>
										</Row>
										<Row className="s4l">
											<div className="whydabest">
												{' '}
												<H2>Why Daybest ?</H2>
											</div>
											<div className="picon">
												<div className="featicon">
													<img src={s1} height="80px" alt="ic" />
													<H2 className="s4it">Equipenatal Rent</H2>
												</div>
												<div className="featicon">
													<img src={s2} height="80px" alt="ic" />
													<H2 className="s4it">Crop Advisory</H2>
												</div>
												<div className="featicon">
													<img src={s10} height="80px" alt="ic" />
													<H2 className="s4it">Crop Monitoring</H2>
												</div>
												<div className="featicon">
													<img src={s4} height="80px" alt="ic" />
													<H2 className="s4it">Agri Input</H2>
												</div>
												<div className="featicon">
													<img src={s5} height="80px" alt="ic" />
													<H2 className="s4it">Crop Marketing</H2>
												</div>
												<div className="featicon">
													<img src={s6} height="80px" alt="ic" />
													<H2 className="s4it">Manpower Booking</H2>
												</div>
												<div className="featicon">
													<img src={s7} height="80px" alt="ic" />
													<H2 className="s4it">Agri Path</H2>
												</div>
												<div className="featicon">
													<img src={s8} height="80px" alt="ic" />
													<H2 className="s4it">Irrigation Automation</H2>
												</div>
												<div className="featicon">
													<img src={s9} height="80px" alt="ic" />
													<H2 className="s4it">Storage Transportation</H2>
												</div>
											</div>
										</Row>
									</div>
								</div>
							</S4div>
						</contaniner>
					</section>

					<section id="section5">
						<S5div>
							<H1> New Innovations</H1>
							<div className="s5pd">
								<div className="pdroneimage">
									<div className="drnimg">
										<img src={drnimg1} alt="drnimg" height="200px" />
									</div>
									<div className="num num1"> 01</div>
									<div className="blurtext">
										{' '}
										Indrayaan (Electrical Amphibious Aircraft)- India is a land of water and pond,
										it will be a drastic change in infrastructure if an efficient amphibious
										aircraft could be developed for air mobility.
									</div>
								</div>
								<div className="pdroneimage">
									<div className="drnimg">
										<img src={drnimg2} alt="drnimg" height="200px" />
									</div>
									<div className="num num2"> 02</div>
									<div className="blurtext">
										{' '}
										At Daybest we are trying to develop six-seater electrical amphibious aircraft.
									</div>
								</div>
								<div className="pdroneimage">
									<div className="drnimg">
										<img src={drnimg3} alt="drnimg" height="200px" />
									</div>
									<div className="num num3"> 03</div>
									<div className="blurtext">
										{' '}
										For Applications like Air Ambulance, Cargo, Air Charter and other aerial
										applications, Indrayaan will change the economy of sea and air travel.
									</div>
								</div>
							</div>
						</S5div>
					</section>

					<secton id="section6">
						<container fluid>
							<S6div>
								<Row>
									<Col lg="6" md="6" sm="12" className="s6t">
										<H2> Our Partners</H2>
										<P1>Several selected clients, who already believe in our service.</P1>
									</Col>
									<Col>
										<div className="ourpartner">
											<img src={c1} alt="c" />
											<img src={c2} alt="c" />
											<img src={c3} alt="c" />

											<img src={c4} alt="c" />
											<img src={c5} alt="c" />
											<img src={c6} alt="c" />
											<img src={c7} alt="c" />
											<img src={c8} alt="c" />
											{/* <img src={c9} alt="c" /> */}
											<img src={c10} alt="c" />
											<img src={c11} alt="c" />
										</div>
									</Col>
								</Row>
							</S6div>
						</container>
					</secton>
					<section id="section7">
						<div className="s7border">
							<S7div>
								<div className="ps7">
									<Col lg="6" md="6" sm="12">
										<div className="ps7t">
											<H2>Subsrcribe Daybest</H2>
											<P1>I will update good news and promotion service not spam</P1>
										</div>
									</Col>

									<Col lg="6" md="6" sm="12" className="greendiv">
										<div className="enteremail">
											<div className="input">
												<div>
													<input
														type="text"
														placeholder="enter your email here"
														className="contactInput"
													/>
												</div>
												<div>
													<KnowMore />
												</div>
											</div>
										</div>
									</Col>
								</div>
							</S7div>
						</div>
					</section>

					<footer class="footer-bs">
						<div class="row">
							<div class="col-md-3 footer-brand animated fadeInLeft">
								<img src={logo} height="50px" alt="50px" />
							</div>
							<div class="col-md-5 footer-nav animated fadeInUp">
								<div class="col-md-6">
									<ul class="address">
										<li>
											3rd Floor, MDVR Hanuma Lake Front, Kammasandra Road, Electronic City,
											Bengaluru-560100
										</li>
									</ul>
								</div>

								<div class="col-md-6">
									<h4>Company</h4>
									<ul class="pages">
										<li>
											<Link to="/">
												<a href="#">About Us</a>
											</Link>
										</li>
										<li>
											<Link to="/">
												{' '}
												<a href="#">Carrier </a>
											</Link>
										</li>
										<li>
											<Link to="/">
												{' '}
												<a href="#">Privacy Policy</a>
											</Link>
										</li>
										<li>
											<Link to="/">
												<a href="#">TERMS & CONDITIONS</a>
											</Link>
										</li>
									</ul>
								</div>
							</div>

							<div class="col-md-4 footer-nav animated fadeInUp">
								<h4>Contact Us</h4>

								{/* <div className="ft">91-82187-5227</div>
							<div className="ft">contact@daybest.in</div> */}
								<ul class="pages">
									<li>
										<Link to="#">
											<a href="#">91-82187-5227</a>
										</Link>
									</li>
									<li>
										<Link to="#">
											{' '}
											<a href="#">contact@daybest.in </a>
										</Link>
									</li>
									{/* <li>
									<Link to="/privacypolicy">
										{' '}
										<a href="#">Become Invester</a>
									</Link>
								</li>
								<li>
									<Link to="/terms&conditions">
										<a href="#">TERMS & CONDITIONS</a>
									</Link>
								</li> */}
								</ul>

								<div>
									<ul className="footer-icons">
										<li>
											<a href="https://twitter.com/daybestpro" target="_blank">
												<i class="fab fa-twitter" />
											</a>
										</li>
										<li>
											<a href="https://www.facebook.com/daybestpro" target="_blank">
												<i class="fab fa-facebook" />
											</a>
										</li>
										<li>
											<a href="https://www.linkedin.com/company/daybestpro/" target="_blank">
												<i class="fab fa-linkedin" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</footer>
				</div>
			</LazyLoad>
		</React.Fragment>
	);
};

export default LandingPage;
