import styled from 'styled-components';

export const S1div = styled.div`
	& .tdiv {
		${'' /* background-color: blue; */} width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	& .ptdiv {
		width: 40%;
		height: 300px;
		display: flex;

		justify-content: space-around;
		flex-direction: column;
	}

	& .picdiv {
		display: flex;
		align-items: left;
		${'' /* background-color: green; */};
	}

	& .farmpic {
		height: 550px;
	}
	@media (max-width: 900px) {
		margin-top: 15%;
		& .farmpic {
			display: none;
			height: 250px;
		}
		& .tdiv {
			flex-direction: column;
			margin-top: 40px;
		}
		& .ptdiv {
			width: 70%;
		}
	}
`;
export const S2div = styled.div`
	background: linear-gradient(180deg, #fafafa 50%, #fff 50%);
	padding: 40px 0px;
	height: 550px;
	${'' /* position: relative;
	bottom: 170px; */} position: relative;
	margin-top: -200px;
	z-index: -1;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	& .psdiv {
		display: flex;
		flex-direction: row;
		${'' /* background-color: brown; */} align-items: center;
	}

	& .servicediv {
		${'' /* background: yellow; */} box-shadow: 3.34353px 3.34353px 16.7176px rgba(196, 196, 196, 0.35);
		border-radius: 49.317px;
		width: 200px;
		height: 250px;
		diplay: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		text-align: center;
		margin: 0px 30px;
	}

	& .csd {
		padding: 20px;
		padding-top: 30px;
	}

	& .socialIcons {
		position: absolute;
		${'' /* right: 450px;
		bottom: 140px; */} top:10px;
		left: 60px;
	}
	@media (max-width: 900px) {
		margin-top: 10%;
		bottom: 0px;
		margin-top: 130px;
		.psdiv {
			flex-direction: column;
			margin-top: 100px;
		}
		.socialIcons {
			top: -30%;
			left: 15%;
		}
		.servicediv {
			margin-top: 20px;
			margin-bottom: 30px;
		}
	}
`;

export const S4div = styled.div`
	${'' /* background-color: #f0f0f0; */} & .s4u {
		position: relative;
		left: 10%;
		top: 50px;
		margin-bottom: 100px;
	}

	.s4l {
	}
	& .p4text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: left;
	}
	.p4 {
		padding: 0px 80px;
		background-color: #f0f0f0;
		background: #f0f0f0;
		box-shadow: 8px 8px 38px #d1d0d0;
		border-radius: 99px;
		padding: 50px;
	}
	.featicon {
		${'' /* background-color: red; */} max-width: 100px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		margin: 20px 40px;
		height: 150px;
		width: 150px;
	}
	.s4it {
		font-size: 15px !important;
		line-height: 20px !important;
	}
	.picon {
		${'' /* background-color: yellow; */} display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: left;
		min-height: 300px;
		flex-wrap: wrap;
	}
	.whydabest {
		margin-bottom: 30px;
		margin-left: 10%;
	}
	@media (max-width: 900px) {
		margin-top: 300px !important;
		bottom: 0px;
		margin-top: 130px;
	}
`;

export const S5div = styled.div`
	.num {
		font-size: 50px;
		font-weight: 800;
		color: brown;
		position: absolute;
		top: -40px;
		right: -40px;
	}
	.blurtext {
		position: relative;
		bottom: 100px;
		right: -280px;
		max-width: 400px;
		font-size: 15px;

		background: rgba(255, 255, 255, 0.5);

		backdrop-filter: blur(10px);
		padding: 20px;
		border-radius: 11px;
		border: 2px solid white;
		text-align: left;
	}
	.pdroneimage {
		max-width: 320px;
		position: relative;
	}
	.s5pd {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: left;
		padding-left: 140px;
		margin-top: 100px;
	}
`;

export const S6div = styled.div`
	.s6t {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: left;
		padding-left: 60px;
		margin-right: 100px;
		max-width: 350px;
	}
`;
export const S7div = styled.div`
	margin-top: 100px;
	background: #fafafa;

	border-radius: 75px;

	padding: 30px;
	min-height: 250px;
	margin: 50px 100px;
	.greendiv {
		background-color: #063100;
		border-radius: 75px;
	}

	.ps7t {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: left;
		width: 100%;
		min-height: 200px;
	}

	${'' /* .green {
		background-color: green;
		width: 50%;
		height: 100%;
		min-height: 300px;
	} */};
	.contactInput {
		width: 150px;
		background: #ffffff;
		border: 1px solid #ffffff;
		box-sizing: border-box;
		/* Shadow_1 */

		${'' /* box-shadow: 10px 20px 50px rgba(0, 0, 0, 0.15); */} border-radius: 60px;
	}
	.enteremail {
		height: 200px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.input {
		display: flex;
		flex-direction: row;
		background-color: red;
		justify-content: left;
		align-items: center;
		background: #ffffff;

		box-sizing: border-box;
		width: 300px;
		height: 50px;
		/* Shadow_1 */

		box-shadow: 10px 20px 50px rgba(0, 0, 0, 0.15);
		border-radius: 60px;
	}
`;

export const Wrapper7 = styled.div`
	margin: 0px 35px;
	& .div7 {
		color: white !important;

		padding: 40px 0px;
		max-width: 300px;
	}

	@media (max-width: 751px) {
		margin: 0px 0px;
		& .div7 {
			padding: 20px 0px;
		}

		& .row7 {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}
`;

export const Wrapper11 = styled.div`
	padding: 35px 0px;
	max-height: 350px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media (max-width: 751px) {
		flex-direction: column-reverse;
		max-height: 1000px;
		padding-bottom: 0px;
		& .img11 {
			margin-bottom: 0px !important;
		}
	}

	& .s2textDiv {
		margin-left: 50px;
		margin-right: 50px;
		padding: 40px 0px;

		@media (max-width: 751px) {
			margin-left: 0px;
			margin-right: 0px;
			text-align: center;
			padding: 20px 20px;
		}
	}
	& .s2textDiv2 {
		margin-left: 50px;
		margin-right: 50px;
		padding: 40px 0px;

		@media (max-width: 751px) {
			margin-left: 0px;
			margin-right: 0px;
			text-align: left;
			padding: 20px 20px;
		}
	}

	& .Cols2textDiv {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const Wrapper8 = styled.div`
	backgroundcolor: blue;

	display: flex;
	align-items: center;
	flex-direction: column;

	justify-content: center;

	& .header8 {
		text-align: center;
	}

	& .col8 {
		max-width: 400px;
		margin-left: 50px;
	}

	& .col82 {
		margin-left: 100px;
	}

	& .col8i {
		min-width: 400px;
	}
	& .row8 {
		display: flex;
		align-items: center;
		padding: 20px;
	}
	& .img2 {
		height: 600px;
		position: relative;
		bottom: 150px;
	}

	@media (max-width: 1040px) {
		& .img2 {
			height: 500px;
			bottom: 50px;
		}
		& .col8 {
			max-width: 500px;
			width: 100% !important;
			margin-left: 0px;
		}

		& .row8 {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;
			padding: 0px;
		}

		& .col82 {
			margin-left: 0px;
		}
	}

	@media (max-width: 500px) {
		& .img2 {
			height: 300px;
		}
		& .row8 {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;
		}
		& .col8 {
			max-width: 300px;
		}
	}
`;

export const PreBookButton = styled.button`
	background-color: #425c56;
	border-color: #425c56;
	padding: 5px 15px;
	color: white;
	border: none;
	border-radius: 5px;

	&: hover {
		background-color: #35683e !important;
		border-color: #35683e;
	}

	&:focus {
		outline: none;
		box-shadow: none;
		shadow: none;
	}
`;

export const H1 = styled.p`
	font-style: normal;
	font-weight: 800;
	font-size: 36px;
	line-height: 46px;
	/* or 128% */

	/* primary */

	color: #385036;

	@media (max-width: 500px) {
		font-size: 20px;
		line-height: 26px;
	}
`;

export const H2 = styled.p`
	font-style: normal;
	font-weight: 600;
	font-size: 25px;
	line-height: 30px;
	/* or 128% */

	/* primary */

	color: #385036;

	@media (max-width: 500px) {
		font-size: 15px;
		line-height: 26px;
	}
`;

export const P1 = styled.p`
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 26px;
	/* or 162% */

	/* primary */

	color: #000;
	@media (max-width: 500px) {
		font-size: 12px;
		line-height: 20px;
	}
`;

export const P2 = styled.p`
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	line-height: 36px;
	/* or 162% */

	/* primary */

	color: #425c56;
	@media (max-width: 500px) {
		font-size: 12px;
		line-height: 20px;
	}

	margin-bottom: 15px;
`;
