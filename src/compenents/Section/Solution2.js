import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";
import { SectionLayout } from "../../styles/Layout";
import friends from "../../img/friends_img.avif";

function Solution2() {
	const theme = useTheme();
	return (
		<Solution2Styled theme={theme} id="about">
			<div className="about-content">
				<p className="p-title">GroupTravel Simplified.</p>
				<div className="section">
					<div className="about-img">
						<img src={friends} alt="" />
					</div>
					<div className="about-info">
						{/* <Title name={"Complicated Booking Process"} /> */}
						<p>
							We’re not another Expedia, Kayak or any other booking platform.
							We’re Sercle, a platform to help groups navigate accommodations.
						</p>
					</div>
				</div>
			</div>
		</Solution2Styled>
	);
}

const Solution2Styled = styled(SectionLayout)`
	position: relative;
	padding-top: 0rem;
	overflow-y: hidden;
	background-color: white;

	@media screen and (max-width: 850px) {
		.p-title {
			margin: 1rem 0rem !important;
		}
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
			font-size: clamp(2rem, 4vh, 4rem);
			text-align: center;
			margin: 5rem 0rem;
		}

		.section {
			display: grid;
			grid-template-columns: repeat(2, 0.85fr);
			position: relative;
			gap: 30px;
			margin-top: 5rem;
		}
		.about-img {
			padding: 1.5 rem;
			padding-left: 0rem;
			border-radius: 5px;
			width: 80%;
			// justify-content: center;
			img {
				// align-items: center;

				width: 100%;
				object-fit: cover;
			}
		}
		.about-info {
			display: flex;
			flex-direction: column;
			color: black;
			text-align: center;
			p {
				font-size: clamp(0.6rem, 2.2vh, 0.95rem);
				margin-top: 2.5rem;
				line-height: 2.5rem;
				letter-spacing: 2px;
			}
		}
	}
`;

export default Solution2;
