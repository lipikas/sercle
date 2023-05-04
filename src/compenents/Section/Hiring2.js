import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";
import { SectionLayout } from "../../styles/Layout";

function Hiring2() {
	const theme = useTheme();
	return (
		<Hiring2Styled theme={theme}>
			{/* <div classNam */}
			{/* <p className="p-title">Why Join Our Program?</p> */}
			<div className="about-content">
				<div className="about-info">
					<p className="p-header">Cutting-Edge Projects</p>
				</div>
				<div className="about-info">
					<p className="p-header"> Flexible Hours</p>
				</div>
				<div className="about-info">
					<p className="p-header">
						{" "}
						Startup experience for those interested in seeing if startups fit
						you!{" "}
					</p>
				</div>
			</div>
		</Hiring2Styled>
	);
}

const Hiring2Styled = styled(SectionLayout)`
	position: relative;
	overflow-y: hidden;
	background-color: #fdfaf7;

	@media screen and (max-width: 1150px) {
		padding-top: 2rem;
	}
	@media screen and (max-width: 1600px) {
		padding: 1.5rem 5rem;
	}
	@media screen and (max-width: 850px) {
		padding: 1rem 1rem;
		.about-content {
			display: flex !important;
			flex-direction: column !important;
			// gap: 20px;
		}
	}

	.about-content {
		display: grid;
		grid-template-columns: repeat(3, 0.85fr);
		position: relative;
		margin-top: 0rem;
		gap: 2rem;

		.about-info {
			display: flex;
			flex-direction: column;
			color: black;
			text-align: center;

			.p-header {
				font-size: clamp(0.9rem, 2.2vh, 0.95rem);
				text-align: center;
				margin-bottom: 0rem;
				font-weight: bold;
			}
			.p-title2 {
				color: black;
				padding-top: 8rem;
				padding-bottom: 2rem;
				z-index: 5;
				font-size: clamp(1.7rem, 3vh, 2.5rem);
				text-align: left;
			}
			p {
				font-size: clamp(0.7rem, 2vh, 0.85rem);
				margin-top: 2.5rem;
				margin-bottom: 2rem;
				line-height: 2.5rem;
				letter-spacing: 2px;
			}
		}
	}
`;

export default Hiring2;
