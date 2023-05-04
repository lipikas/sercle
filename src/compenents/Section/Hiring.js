import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";
import { SectionLayout } from "../../styles/Layout";

function Hiring() {
	const theme = useTheme();
	return (
		<HiringStyled theme={theme} id="jobs">
			<div className="about-content">
				<p className="p-title">#We’reHiring</p>
				<p className="p-content">
					We are currently accepting applicants for our Intern and Associate
					Program in Mobile Development and Marketing. Applications are on a
					rolling basis, apply before spots fill up. Start date is the{" "}
					<b>3rd week of April</b>, but we also have offerings for this summer.
				</p>
			</div>
		</HiringStyled>
	);
}

const HiringStyled = styled(SectionLayout)`
	position: relative;
	padding-top: 4rem;
	overflow-y: hidden;
	background-color: white;

	@media screen and (max-width: 850px) {
		.about-content {
			margin-bottom: 15px;
		}
	}

	.about-content {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		position: relative;

		.p-title {
			z-index: 5;
			font-size: clamp(1.7rem, 3vh, 2.5rem);
			text-align: center;
		}
		p {
			font-size: clamp(0.6rem, 2.2vh, 0.95rem);
			margin-top: 2.5rem;
			line-height: 2.5rem;
			letter-spacing: 2px;
			text-align: center;
			color: black;
		}
	}
`;

export default Hiring;
