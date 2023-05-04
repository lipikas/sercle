import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/themeContext";
import Button from "./Button";
import room from "../img/room.png";
// import {brief} from "../utils/icons"

function Header() {
	const theme = useTheme();
	return (
		<HeaderStyled theme={theme}>
			<div className="main-header">
				<div className="image-con">
					<img src={room} alt="" />
					<div className="content-header">
						<div className="content-h-header">
							{/* <h2>Hi</h2> */}
							<h1>
								Traveling with a Group? <span></span>
							</h1>
							{/* <p className="profession">Software Engineer</p> */}
							<p className="description">
								We’re not another Expedia, Kayak or any other booking platform.
								We’re TravelBetter, a platform to help groups navigate
								accommodations and stress less during booking process.
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
				</div>
			</div>
		</HeaderStyled>
	);
}

// color: ${props => props.theme.colorPurple};
const HeaderStyled = styled.header`
	position: relative;
	overflow: hidden;
	height: 100vh;
	padding: 25rem 18rem;
	display: grid;
	grid-template-columns: repeat(1, 1fr);

	.image-con {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		img {
			position: absolute;
			width: 1200px;
			z-index: 2;
		}
		.content-header {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			position: relative;
			margin-top: 3rem;
			margin-left: 10rem;
			margin-right: 10rem;
			z-index: 5;
		}
		h1 {
			font-size: 3rem;
		}
		.description {
			margin-top: 1rem;
			margin-bottom: 2rem;
			line-height: 2rem;
			font-size: 1.25rem;
		}
	}
`;

export default Header;
