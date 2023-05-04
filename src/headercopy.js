import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/themeContext";
import Button from "./Button";
import room from "../img/room.png";
import line from "../img/line.png";
// import {brief} from "../utils/icons"

function Header() {
	const theme = useTheme();
	return (
		<HeaderStyled theme={theme}>
			<div className="left-header">
				<div className="left-h-header">
					{/* <h2>Hi</h2> */}
					<h1>
						Traveling with a Group? <span></span>
					</h1>
					{/* <p className="profession">Software Engineer</p> */}
					<p className="description">
						We’re not another Expedia, Kayak or any other booking platform.
						We’re Sercle, a platform to help groups navigate accommodations and
						stress less during booking process.
					</p>
					<div className="btn-con">
						<Button
							name={"Join Our WaitList"}
							bg={theme.colorPrimary}
							color={theme.colorWhite}
							bFw={"600"}
							bRad={"30px"}
							bPad={theme.bPad1}
							icon={""}
						/>
					</div>
				</div>
			</div>
			<div className="right-header"></div>
			<div className="image-con">
				<img src={room} alt="" />
			</div>
			<div className="image-overlay"></div>
			<img src={line} alt="" className="image-line" />
		</HeaderStyled>
	);
}

// color: ${props => props.theme.colorPurple};
const HeaderStyled = styled.header`
	position: relative;
	overflow: hidden;
	height: 100vh;
	padding: 1rem 18rem;
	display: grid;
	grid-template-columns: repeat(2, 1fr);

	.left-header {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		position: relative;
		z-index: 5;
	}
	h1 {
		font-size: 3rem;
	}
	.description {
		margin-top: 1rem;
		margin-bottom: 2rem;
		line-height: 2rem;
	}
	.image-con {
		position: absolute;
		left: 150px;
		top: 280px;
		z-index: 2;
		@media screen and (max-width: 1060px) {
			display: none;
		}
		img {
			width: 1000px;
		}
	}
	.image-overlay {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background: ${(props) => props.theme.colorBg};
		z-index: 3;
		opacity: 0.3;
		@media screen and (max-width: 1060px) {
			display: none;
		}
	}
	.image-line {
		position: absolute;
		right: 0;
		top: -15%;
		width: 105%;
		z-index: 1;
		opacity: 0.5 @media screen and (max-width: 1060px) {
			display: none;
		}
	}
`;

export default Header;
