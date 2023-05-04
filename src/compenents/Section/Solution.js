import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";
import { SectionLayout } from "../../styles/Layout";

function Solution() {
	const theme = useTheme();
	return (
		<SolutionStyled theme={theme} id="features">
			<div className="about-content">
				<p className="p-title">Our Solution</p>
				<div className="section">
					<div className="about-info">
						<p className="p-header"> Convenience</p>
						<p>
							We assist in comparing hotel prices, amenities, and features and
							stress less during booking process.
						</p>
					</div>
					<div className="about-info">
						<p className="p-header"> Personalization</p>
						<p>
							We offer curated Accommodations that are customized to group’s
							preferences and needs.
						</p>
					</div>
					<div className="about-info">
						<p className="p-header"> Comparison</p>
						<p>
							Our platform is one-stop shop for accommodations and travel
							comparisons.
						</p>
					</div>
				</div>
			</div>
		</SolutionStyled>
	);
}

const SolutionStyled = styled(SectionLayout)`
	position: relative;
	padding-top: 4rem;
	overflow-y: hidden;
	background-color: white;

	@media screen and (max-width: 850px) {
		.about-content {
			margin-bottom: 15px;
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
			font-size: clamp(1.7rem, 3vh, 2.5rem);
			text-align: center;
		}

		.section {
			display: grid;
			grid-template-columns: repeat(3, 0.85fr);
			position: relative;
			margin-top: 4rem;
			gap: 30px;
		}
		.about-info {
			display: flex;
			flex-direction: column;
			color: black;
			text-align: center;

			.p-header {
				font-size: clamp(1rem, 3vh, 2rem);
			}
			p {
				font-size: clamp(0.6rem, 2.2vh, 0.95rem);
				margin-top: 2.5rem;
				line-height: 2.5rem;
				letter-spacing: 2px;
				text-align: center;
			}
		}
	}
`;

export default Solution;
