import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const timeremainings = new Date(2021, 8, 18, 12, 33, 30);
const timeremaining = timeremainings.getTime();
const SigninButton = () => {
	return (
		<React.Fragment>
			<Link to="/preorder">
				<SigninButton1> Sign In </SigninButton1>{' '}
			</Link>
			{/* {timer == 't' ? null : <CountdownTimer countdownTimestampMs={timeremaining} />}{' '} */}
		</React.Fragment>
	);
};

const KnowMore = () => {
	return (
		<React.Fragment>
			<Link to="/preorder">
				<KnowMore1> Know More </KnowMore1>{' '}
			</Link>
			{/* {timer == 't' ? null : <CountdownTimer countdownTimestampMs={timeremaining} />}{' '} */}
		</React.Fragment>
	);
};

const SigninButton1 = styled.button`
	background-color: #385036;

	padding: 5px 15px;
	color: white;
	border: none;

	box-shadow: 4px 4px 5px rgba(56, 80, 54, 0.25);
	border-radius: 40px;
	width: 100px;

	&: hover {
		background-color: #269b2d !important;
	}

	&:focus {
		outline: none;
		box-shadow: none;
		shadow: none;
	}
`;

const KnowMore1 = styled.button`
	background-color: #385036;
	font-size: 15px;
	padding: 5px 15px;
	color: white;
	border: none;

	box-shadow: 4px 4px 5px rgba(56, 80, 54, 0.25);
	border-radius: 40px;
	height: 40px;
	width: 150px;

	&: hover {
		background-color: #269b2d !important;
	}

	&:focus {
		outline: none;
		box-shadow: none;
		shadow: none;
	}
`;

export { SigninButton, KnowMore };
