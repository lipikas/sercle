import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";

function Navigation({ toggle }) {
	const theme = useTheme();
	return (
		<NavigationStyled toggle={toggle} theme={theme}>
			<div className="header">
				<div className="logo">
					<h3>TravelBetter</h3>
				</div>
				<div className="list">
					<ul className="nav-items">
						<li>
							<a href="/">Home</a>
						</li>
						<li className="nav-item">
							<a href="#features">Features</a>
						</li>
						<li className="nav-item">
							<a href="#waitlist">Waitlist</a>
						</li>
					</ul>
				</div>
			</div>
		</NavigationStyled>
	);
}

const NavigationStyled = styled.nav`
	@media screen and (max-width: 850px) {
		width: 100%;
		border-radius: 0;
		bottom: 0;
		height: 10vh;
		top: auto;
		left: 0;
		transform: ${(props) =>
			props.toggle ? "translateY(100%)" : "translateY(0)"};
	}
	.header {
		// position: fixed;
		background-color: #9370db;
		// min-height: 10vh;
		padding: 2rem 20rem;
		display: inline-block;
		// display: grid;
		// grid-template-columns: 20rem 25rem;
		// gap: 10px;
		// justify-content: space-around;
		height: 110px;
		width: 100%;
		text-align: left;

		margin: 0;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;

		top: 0rem;
		left: 0rem;
		right: 3rem;
		z-index: 1;
	}

	.list {
		// grid-column: 2 / 2;
		// grid-row: 1 / 1;
		float: right;
		// background-color: grey;
		transition: all 0.3s ease-in-out;

		display: flex;
		align-items: center;
		justify-content: center;
		filter: blur(${(props) => (props.toggle ? "20px" : "0")});
		opacity: ${(props) => (props.toggle ? "0" : "1")};
		border-radius: ${(props) => (props.toggle ? "10px" : "0")};
		z-index: 12;
	}

	.nav-items {
		transform: translateX(-50%)
			translateY(${(props) => (props.toggle ? "-100%" : 0)})
			scaleX(${(props) => (props.toggle ? "0" : "1")});
		display: flex;
		align-items: center;
		justify-content: space-between;
		z-index: 12;
		li {
			margin: 0 1rem;
			a {
				padding: 0.6rem 0.3rem;
				position: relative;
				text-decoration: none;
				transition: all 0.4s ease-in-out;
				color: ${(props) => props.theme.colorWhite};
				&::after {
					content: "";
					position: absolute;
					bottom: 0;
					left: 0;
					width: 0%;
					height: 2px;
					background-color: ${(props) => props.theme.colorPrimary};
					transition: all 0.4s ease-in-out;
				}
				&:hover:after {
					width: 100%;
				}
			}
			a:hover {
				opacity: 0.8;
			}
		}
	}
	.logo {
		// grid-column: 1 / 1;
		// grid-row: 1 / 1;
		float: left;
		left: 20%;
		top: 0;
		z-index: 15;
	}
`;

export default Navigation;
