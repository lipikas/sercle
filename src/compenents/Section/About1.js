import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";
import { SectionLayout } from "../../styles/Layout";

import beach_img from "../../img/beach_img.png";

function About1() {
	const theme = useTheme();
	return (
		<About1Styled theme={theme}>
			<div className="about-content">
				<div className="about-img">
					<img src={beach_img} alt="" />
				</div>
				<div className="about-info">
					{/* <Title name={"Complicated Booking Process"} /> */}
					<p className="p-header"> Complicated Booking Process</p>
					<p>
						On average, travelers visit 38 websites before completing any type
						of booking. If each traveler spends a couple minutes per site, it
						can easily add up to multiple hours.
					</p>
				</div>
			</div>
		</About1Styled>
	);
}

const About1Styled = styled(SectionLayout)`
	position: relative;
	overflow-y: hidden;
	background-color: white;

	@media screen and (max-width: 850px) {
		.about-content {
			display: flex !important;
			flex-direction: column !important;

			.about-info {
				order: 0;
			}
			.about-img {
				order: 1;
			}
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
		grid-template-columns: repeat(2, 1fr);
		position: relative;

		.about-img {
			padding: 2rem;
			border-radius: 5px;
			width: 80%;
			img {
				width: 100%;
				object-fit: cover;
			}
		}
		.about-info {
			display: flex;
			flex-direction: column;
			color: black;

			.p-header {
				font-size: clamp(1rem, 3vh, 2rem);
			}
			p {
				font-size: clamp(0.6rem, 2.2vh, 0.95rem);
				margin-top: 2.5rem;
				line-height: 2.5rem;
				letter-spacing: 2px;
			}
		}
	}
`;

export default About1;
