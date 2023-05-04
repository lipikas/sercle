import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";
import Button from "../Button/Button";
import room from "../../img/room.png";
// import {brief} from "../utils/icons"

function Header() {
	const theme = useTheme();
	return (
		<HeaderStyled theme={theme} style={{ backgroundImage: `url(${room})` }}>
			{/* <div className="logo">
				<h3>TravelBetter</h3>
			</div> */}
			<div className="content">
				<div className="intro">
					<p className="head head-1">TravelBetter</p>
					<p className="head head-2">
						With Convenience, Coordination, and Personalization
					</p>
					<p className="head head-3">All in One Place</p>
				</div>
				<div className="btn-con">
					<Button
						name={"Join Our WaitList"}
						bg={theme.colorPrimary}
						bFw={"600"}
						bRad={"30px"}
						bPad={theme.bPad1}
						icon={""}
					/>
				</div>
			</div>
		</HeaderStyled>
	);
}

// color: ${props => props.theme.colorPurple};
const HeaderStyled = styled.header`
	position: relative;
	background-position: center;
	background-size: cover;
	background-color: #f1f3f4;
	background-repeat: no-repeat;
	box-shadow: none !important;
	text-shadow: none;
	border: 0px;
	overflow: hidden;
	height: 43rem;
	padding: 6rem 0 6rem 0;

	@media screen and (max-width: 850px) {
		// height: 40rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0;
	}

	.content {
		display: flex;
		position: relative;
		padding: 5rem 0rem;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		text-align: center;
		color: black;

		.intro {
			margin: 2rem 0;
			font-weight: 100;
		}
		.head.head-1 {
			font-size: clamp(1.4rem, 4vh, 2rem);
			letter-spacing: 8px;
			font-style: normal;
		}
		.head.head-2 {
			margin: 3.5rem 0;
			font-size: clamp(0.95rem, 2.75vh, 1.75rem);
			letter-spacing: 0.4rem;
		}
		.head.head-3 {
			margin: 1rem 0;
			font-size: clamp(0.95rem, 2.8vh, 1.55rem);
			letter-spacing: 0.2rem;
		}
	}
	.btm-con {
		padding: 20px 0;
		overflow: hidden;
	}
`;

export default Header;
