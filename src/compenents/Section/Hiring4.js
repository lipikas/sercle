import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";
import { SectionLayout } from "../../styles/Layout";

function Hiring4() {
	const theme = useTheme();
	return (
		<Hiring4Styled theme={theme} id="features">
			<div className="about-content">
				<p className="p-title">Why Join Our Program?</p>
				<div className="section">
					<div className="about-info">
						<p className="p-header"> Cutting-Edge Projects</p>
					</div>
					<div className="about-info">
						<p className="p-header"> Flexible Hours</p>
					</div>
					<div className="about-info">
						<p className="p-header"> Startup Experience</p>
					</div>
				</div>
			</div>
		</Hiring4Styled>
	);
}

const Hiring4Styled = styled(SectionLayout)`
	position: relative;
	@media screen and (max-width: 1600px) {
		padding: 5.5rem 12rem;
	}

	overflow-y: hidden;
	background-color: #dcdffc;

	@media screen and (max-width: 850px) {
		padding: 5rem 1rem;
		.section {
			display: flex !important;
			flex-direction: column !important;

			.about-img {
				padding: 1.5rem 1rem 0rem 1rem !important;
				// padding: 1rem !important;
				border-radius: 0 !important;
				width: 100% !important;
			}
		}
	}

	.about-content {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		position: relative;

		.p-title {
			z-index: 5;
			color: black;
			font-size: 1.3rem;
			// clamp(1.3rem, 3vh, 1.4rem);
			text-align: center;
		}

		.section {
			display: grid;
			grid-template-columns: repeat(3, 0.85fr);
			position: relative;
			margin-top: 2.5rem;
			gap: 0.3rem;
		}
		.about-info {
			display: flex;
			flex-direction: column;
			color: black;
			text-align: center;

			.p-header {
				font-size: clamp(0.95rem, 2vh, 1.2rem);
				// clamp(0.95rem, 2.5vh, 1.2rem);
				text-align: center;
			}
			p {
				margin-top: 0.5rem;
				line-height: 2.5rem;
				letter-spacing: 2px;
				text-align: center;
			}
		}
	}
`;

export default Hiring4;
