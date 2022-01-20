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
import s3 from './images/s3.png';
import s4 from './images/s4.svg';
import s5 from './images/s5.svg';
import s6 from './images/s6.png';
import s11 from './images/s11.svg';
import s7 from './images/s7.svg';
import s8 from './images/s8.svg';
import s10 from './images/s10.svg';

import s81 from './images/s81.svg';
import s8m from './images/s8b.png';
import s8b from './images/s8b.svg';
import logo from './images/logo.svg';
import logo2 from './images/logo2.svg';
import cart from './images/cart.svg';
import farm from './images/farm.svg';
import medikit from './images/medikit.svg';
import grppic from './images/grppic.svg';
import design from './images/design.svg';
import drnimg1 from './images/drnimg1.svg';
import drnimg2 from './images/drnimg2.svg';
import drnimg3 from './images/drnimg3.svg';
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
import v2 from './video/v3.mp4';
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
											The Agricultural section has been further Categorised into - Kisaan Station
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
											Technology is a boon & a miracle happens when Smart Precision Nozzle meets
											with state of art avionics, packed with superpower batteries, Daybest
											Aerospace is presenting M-Series & X-Series of spraying drones. Tank
											Capacity- 7 Liter, Flight Time- 30 Minutes, Coverage- 20 acres per day. So
											Daybest is presenting Powerful flying machine, Easy to assemble, Easy to fly
											with futuristic design & structure.
										</P1>
									</div>
								</div>
							</div>

							{/* <div className="slider_container2">
								<div className="stenp2">
									<div className="s10img">
										<img height="250px" src={matang} />
									</div>
									<div className="blurtext2">
										<P1 className="btp">
											This multi-purpose flight platform can be configured as offensive,
											defensive, surveillance, transport mode Onboard EO /IR Opto-electronics
											sensor shoots capable of Day and night surveillance and reconnaissance
											operation. All up weight 8 Kg (Without Payload), Rotor Diameter 3000mm,
											Stall Speed 1300 rpm/minute, Cruise Speed 14m/s, Range 8 Km, Endurance 35
											Minutes with 8 Kg Payload, 25 Minutes with 12 Kg Payload.
										</P1>
									</div>
								</div>
							</div> */}

							<div className="slider_container2">
								<div className="stenp2">
									<div className="s10img">
										<img height="250px" width="400px" src={hanuyan} />
									</div>
									<div className="blurtext2">
										<H1>Hanuyaan</H1>
										<P1 className="btp">
											The HANUYAAN can fly longer and load more payload. The frame of HANUYAAN is
											6kg, and the max take-off weight is about 23kg, the HANUYAAN can fly about
											1.5 hours with 4 Kg, 2.5 hours with a 2kg payload, and fly 3 hours with no
											payload. The suggested max payload is 5kg. The cruising speed of the
											HANUYAAN can reach 26m/s. The HANUYAAN can take off and land vertically in a
											very small area.
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
											Takeoff and Landing vehicle, this can be launched in very constrained spaces
											and no need for long paved runways.Max Endurance 3 Hour 20 Minutes (Depends
											on Payload), Ground Speed 60 Kmph, Range Operation 100 Km, Rotor Dimension
											2.2 meters.
										</P1>
									</div>
								</div>
							</div>
						</Slider>
					</div>
				</div>
				{/* <section id="section3">
					<contaniner fluid>
						<S2div>
							<Row>
								<Col md="6" className="Cols2textDiv" xs={{ order: 'last' }} sm={{ order: 'first' }}>
									<img src={s3} alt="o" className="img" />
								</Col>
								<Col lg="6" md="6" sm="12" className="Cols2textDiv">
									<div className="s2textDiv">
										<H1>Let Us Take Care Of Our Caretaker!</H1>
										<P1>
											Airoco is an innovative natural product design that equally effectively
											cleans the air you breathe without affecting the environment. Inspired by
											the English countryside, Airoco uses aesthetic materials to connect you with
											nature. The wish list hides a host of features and strives to keep your air
											clean.
										</P1>
									</div>
								</Col>
							</Row>
						</S2div>
					</contaniner>
				</section> */}

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
													Fixed wing UAV for industrial application . With a team of over 10
													year experience in R&D of UAV and drone products, we have
													independent R&D ability and reliable quality, reasonable prices and
													advanced designs.
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
									Indrayaan (Electrical Amphibious Aircraft)- India is a land of water and pond, it
									will be a drastic change in infrastructure if an efficient amphibious aircraft could
									be developed for air mobility.
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

				{/*
				<section id="section6">
					<contaniner fluid>
						<S2div>
							<Row>
								<Col lg="6" md="6" sm="12" className="Cols2textDiv" xs={{ order: 'last' }}>
									<div className="s2textDiv2">
										<P2>Beautiful Plant Varieties</P2>
										<P1>
											We understand your need, therefore we provide beautiful plant varieties for
											your AIROCO. Check out our various collections!
										</P1>
										<P2>Fascinating Colour Variant</P2>
										<P1>
											There is more than 5 colour variant for your AIROCO! Choose the Best for
											You! Check out our various collections!
										</P1>
										<P2>Choose Your Desired From Our Collections!</P2>
										<P1>
											In every walk with nature, one receives far more than he seeks.” So choose
											the best for you. Choose AIROCO!
										</P1>
										<PreBookButton timer="t" />
									</div>
								</Col>

								<Col md="6" className="Cols2textDiv">
									<img src={s6} alt="o" className="img" />
								</Col>
							</Row>
						</S2div>
					</contaniner>
				</section>

				<section id="section7">
					<Container fluid>
						<Wrapper7>
							<Row>
								<Col md={4} className="row7">
									<div className="div7">
										<img src={s71} hight="70px" width="70px" className="iconImg" alt="0" />
										<P2 style={{ color: 'white' }}> 100% Natural</P2>
										<P1 style={{ color: 'white' }}>
											We use 90% less plastic than any other air purifier. We believe in making
											green products.
										</P1>
									</div>
								</Col>
								<Col md={4} className="row7">
									<div className="div7">
										<img src={s73} hight="70px" width="70px" className="iconImg" alt="0" />
										<P2 style={{ color: 'white' }}> Low maintenance </P2>
										<P1 style={{ color: 'white' }}>
											Almost zero maintenance cost, with no filter replacement and nominal energy
											consumption, makes it a sustainable product
										</P1>
									</div>
								</Col>
								<Col md={4} className="row7">
									<div className="div7">
										<img src={s73} hight="70px" width="70px" className="iconImg" alt="0" />
										<P2 style={{ color: 'white' }}> Aesthetic Design </P2>
										<P1 style={{ color: 'white' }}>
											Airoco design is aesthetically sober and plain, with a range of colors. So
											it can be used in your desired place whether it is an office or home.
										</P1>
									</div>
								</Col>
							</Row>
						</Wrapper7>
					</Container>
				</section> */}
				{/* <section id="section8">
					<contaniner fluid>
						<Wrapper8>
							<div className="header8">
								<H1> Benefits of Airoco </H1>
								<P2>We believe in providing real benefits to our customers. </P2>
							</div>
							<Row className="row8">
								<Col md={12} lg={3} className="col8">
									<div>
										<P2>Reduce Pollution</P2>
										<P1>
											It reduces PM 2.5, PM 10 & TVOCs. It also removes harmful gases & provides
											you very clean & fresh environment! !
										</P1>
									</div>
									<div>
										<P2>Reduces Allergy & Dizziness</P2>
										<P1>
											It helps you from allergies that are caused by poor ventilation, cooking,
											pets or some other unwanted particles.
										</P1>
									</div>
									<div>
										<P2>Reduces Stress</P2>
										<P1>
											The green colour is a symbol of productivity. It increases your cognitive
											response as well as helps you reduce your stress.
										</P1>
									</div>
								</Col>
								<Col md={12} lg={3} className="col8i">
									<img src={s8m} alt="0" className="img2" />
								</Col>

								<Col md={12} lg={3} className="col8 col82">
									<div>
										<P2>Increases Productivity</P2>
										<P1>
											A UK study found bringing plants into the workplace increased productivity
											by 15% & reduces your stress.
										</P1>
									</div>
									<div>
										<P2>Increases Oxygen Content</P2>
										<P1>
											A house plant can increase oxygen level by 200 cc/min. And 8 indoor plants
											collectively provide enough oxygen for a person in a day.
										</P1>
									</div>
									<div>
										<P2>Better Sleep</P2>
										<P1>
											Plants & carbon granules don’t allow CO2 to accumulate indoors & provide you
											with better & peaceful sleep.
										</P1>
									</div>
								</Col>
							</Row>
						</Wrapper8>
					</contaniner>
				</section> */}

				{/* <section className="section9">
					<div className="section9-content">
						<h2>Bring nature home!</h2>
						<p> We believe in providing real benefits to our customers.</p>
					</div>

					<div className="section9-button">
						<PreBookButton timer="t" />
					</div>
				</section> */}

				<div className="section10">
					<div className="section10-content">
						<div className="s10-heading">
							<h2>What our happy client say </h2>
						</div>
						<Slider {...settings}>
							<div className="slider_container">
								<div className="stenp">
									<div className="s10img">
										<img height="200px" src={c3} />
									</div>
									<div className="s10content">
										<H2>ICMR </H2>
										<P1>
											“ ICMR appreciates the efforts Daybest Research Ltd have put into the ICMR’s
											Drone Response and outreach for North East (i-Drone)” Over the time of last
											few years, Daybest has worked continuously on its technological upgradations
											and the results are visible in the feedback given by some of our associates.
										</P1>
									</div>
								</div>
							</div>

							<div className="slider_container">
								<div className="stenp">
									<div className="s10img">
										<img height="200px" src={c3} />
									</div>
									<div className="s10content">
										<H2>ICMR</H2>
										<P1>
											“ ICMR appreciates the efforts Daybest Research Ltd have put into the ICMR’s
											Drone Response and outreach for North East (i-Drone)” Over the time of last
											few years, Daybest has worked continuously on its technological upgradations
											and the results are visible in the feedback given by some of our associates.
										</P1>
									</div>
								</div>
							</div>

							<div className="slider_container">
								<div className="stenp">
									<div className="s10img">
										<img height="200px" src={c3} />
									</div>
									<div className="s10content">
										<H2>ICMR</H2>
										<P1>
											“ ICMR appreciates the efforts Daybest Research Ltd have put into the ICMR’s
											Drone Response and outreach for North East (i-Drone)” Over the time of last
											few years, Daybest has worked continuously on its technological upgradations
											and the results are visible in the feedback given by some of our associates.
										</P1>
									</div>
								</div>
							</div>
						</Slider>
					</div>
				</div>

				{/* <section id="section11">
					<contaniner fluid>
						<Wrapper11>
							<Row>
								<Col md="6" className="Cols2textDiv" xs={{ order: 'last' }} sm={{ order: 'first' }}>
									<img src={s11} alt="o" className="img img11" style={{ marginBottom: '49px' }} />
								</Col>
								<Col lg="6" md="6" sm="12" className="Cols2textDiv">
									<div className="s2textDiv">
										<H1 style={{ color: 'white' }}>
											Choose your desired AIROCO from our collections!{' '}
										</H1>
										<P1 style={{ color: 'white' }}>
											“In every walk with nature, one receives far more than he seeks.” So choose
											the best for you. Choose AIROCO!
										</P1>

										<PreBookButton2 />
									</div>
								</Col>
							</Row>
						</Wrapper11>
					</contaniner>
				</section> */}

				{/** Aniket started */}

				<footer class="footer-bs">
					<div class="row">
						<div class="col-md-3 footer-brand animated fadeInLeft">
							<img src={logo} />
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
											<a href="#">Become Invester</a>
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
		</React.Fragment>
	);
};

export default LandingPage;
