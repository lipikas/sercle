import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";
import { SectionLayout } from "../../styles/Layout";

function Hiring3() {
	const theme = useTheme();
	return (
		<Hiring3Styled theme={theme}>
			<div className="about-content">
				<a
					href="https://docs.google.com/document/d/1GqeB-lC-iRjGPjdD5dG4qVtL0wL4gWKbb1UegBguB2c/edit?usp=sharing"
					target="_blank"
					rel="noreferrer"
				>
					Apply
				</a>
			</div>
		</Hiring3Styled>
	);
}

const Hiring3Styled = styled(SectionLayout)`
	position: relative;
	padding-top: 0.5rem;
	overflow-y: hidden;
	background-color: white;
	media screen and (max-width: 1150px) {
		padding-bottom: 2rem;
	}

	@media screen and (max-width: 850px) {
		.about-content {
			margin-bottom: 15px;
		}
	}

	.about-content {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		position: relative;

		a {
			margin-top: 2.5rem;

			font-size: 22px;
			text-align: center;
			color: black;
			text-decoration: none;
		}
	}
`;

export default Hiring3;
