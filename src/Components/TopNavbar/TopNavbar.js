import React from 'react';
import style from './TopNavbar.module.css';
import { Link, NavLink } from 'react-router-dom';
// import muddalogo1 from '../../../assets/images/headerLogo.png';
import { SigninButton } from '../Utils/button';

//images
import logo from '../../LandingPage/images/logo.svg';
import logo2 from '../../LandingPage/images/logo2.svg';

import './Topnavbar.css';

function TopNavbar({ props }) {
	console.log(props);

	return (
		<nav className={`navbar navbar-light   navbar-expand-lg  p-0 mb-1`}>
			<Link className={`navbar-brand  ${style.p0}`} to="/">
				<div className="plogo">
					<img className="logoimg" src={logo2} height="40px" alt="" />
					<p1 className="logotext">daybest</p1>
				</div>
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon">
					{/* <i className="fa fa-navicon" style={{ color: 'black' }} /> */}
				</span>
			</button>

			<div className="collapse navbar-collapse pt-1" id="navbarSupportedContent">
				<ul className={`headerUl navbar-nav ml-auto mr-sm-5 ${style.navItemheader}`}>
					<li className={` ${style.headerI}  nav-item mr-sm-5`}>
						<NavLink className="nav-link " activeClassName="active" to="/user/home">
							<span className={` ${style.text}`}>About</span>
						</NavLink>
					</li>
					<li className={` ${style.headerI}  nav-item mr-sm-5`}>
						<NavLink className="nav-link" activeClassName="active" to="/user/trending">
							{/* <img src={TrendingNavbar} alt="" width="20px" className=" ml-2" /> */}
							{/* <i className="fa fa-home d-block ml-2" aria-hidden="true" /> */}

							<span className={` ${style.text}`}>Product</span>
						</NavLink>
					</li>
					<li className={` ${style.headerI}  nav-item mr-sm-5`}>
						<NavLink className="nav-link" activeClassName="active" to="/user/groups">
							<span className={` ${style.text}`}>Service</span>
						</NavLink>
					</li>
					<li className={` ${style.headerI}  nav-item mr-sm-5`}>
						<NavLink className="nav-link " activeClassName="active" to="/user/notification">
							<span className={` ${style.text}`}>Contact</span>
						</NavLink>
					</li>

					<li className={` ${style.headerI}  nav-item mr-sm-5`}>
						<NavLink className="nav-link " activeClassName="active" to="/user/profile">
							{/* <i className="fa fa-user d-block ml-2" aria-hidden="true" /> */}
							{/* <i className="fa-solid fa-right-from-bracket d-block ml-2" aria-hidden="true" /> */}

							{/* <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" /> */}

							<span>
								<SigninButton name="Sign In" />
							</span>
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>

		// <nav class="navbar navbar-expand-lg navbar-light bg-light">
		// 	<a class="navbar-brand" href="#">
		// 		Navbar
		// 	</a>
		// 	<button
		// 		class="navbar-toggler"
		// 		type="button"
		// 		data-toggle="collapse"
		// 		data-target="#navbarSupportedContent"
		// 		aria-controls="navbarSupportedContent"
		// 		aria-expanded="false"
		// 		aria-label="Toggle navigation"
		// 	>
		// 		<span class="navbar-toggler-icon" />
		// 	</button>

		// 	<div class="collapse navbar-collapse" id="navbarSupportedContent">
		// 		<ul class="navbar-nav mr-auto">
		// 			<li class="nav-item active">
		// 				<a class="nav-link" href="#">
		// 					Home <span class="sr-only">(current)</span>
		// 				</a>
		// 			</li>
		// 			<li class="nav-item">
		// 				<a class="nav-link" href="#">
		// 					Link
		// 				</a>
		// 			</li>
		// 			<li class="nav-item dropdown">
		// 				<a
		// 					class="nav-link dropdown-toggle"
		// 					href="#"
		// 					id="navbarDropdown"
		// 					role="button"
		// 					data-toggle="dropdown"
		// 					aria-haspopup="true"
		// 					aria-expanded="false"
		// 				>
		// 					Dropdown
		// 				</a>
		// 				<div class="dropdown-menu" aria-labelledby="navbarDropdown">
		// 					<a class="dropdown-item" href="#">
		// 						Action
		// 					</a>
		// 					<a class="dropdown-item" href="#">
		// 						Another action
		// 					</a>
		// 					<div class="dropdown-divider" />
		// 					<a class="dropdown-item" href="#">
		// 						Something else here
		// 					</a>
		// 				</div>
		// 			</li>
		// 			<li class="nav-item">
		// 				<a class="nav-link disabled" href="#">
		// 					Disabled
		// 				</a>
		// 			</li>
		// 		</ul>
		// 		<form class="form-inline my-2 my-lg-0">
		// 			<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
		// 			<button class="btn btn-outline-success my-2 my-sm-0" type="submit">
		// 				Search
		// 			</button>
		// 		</form>
		// 	</div>
		// </nav>
	);
}

export default TopNavbar;
