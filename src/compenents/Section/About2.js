import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";
import { SectionLayout } from "../../styles/Layout";
import booking_img from "../../img/booking_2_img.webp";

function About2() {
	const theme = useTheme();
	return (
		<About2Styled theme={theme}>
			<div className="about-content">
				<div className="about-info">
					{/* <Title name={"Complicated Booking Process"} /> */}
					<p className="p-header"> Group Booking is a Hassle</p>
					<p>
						For group, the process is even more convoluted. With group booking,
						there’s so much to consider such as budget, individual preferences
						and more. It’s much more difficult to compare and search stays as a
						group compared to traveling by yourself.
					</p>
				</div>
				<div className="about-img">
					<img src={booking_img} alt="" />
				</div>
			</div>
		</About2Styled>
	);
}

const About2Styled = styled(SectionLayout)`
	position: relative;
	padding-top: 2rem;
	overflow-y: hidden;
	background-color: white;

	@media screen and (max-width: 850px) {
		.about-content {
			display: flex !important;
			flex-direction: column !important;

			.about-img {
				padding: 1.5rem 1rem 0rem 1rem !important;
				// padding: 1rem !important;
				border-radius: 0 !important;
				width: 100% !important;
			}
			.about-info {
				.p-header {
					// font-size: clamp(1rem, 3vh, 2rem);
					text-align: none !important;
					letter-spacing: 3px;
				}
			}
		}
	}
	.about-content {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		position: relative;

		.about-img {
			padding-top: 4rem;
			padding-left: 8rem;
			border-radius: 5px;
			width: 80%;
			// justify-content: center;
			img {
				// align-items: center;
				width: 80%;
				object-fit: cover;
			}
		}
		.about-info {
			display: flex;
			flex-direction: column;
			color: black;

			p {
				font-size: clamp(0.6rem, 2.2vh, 0.95rem);
				margin-top: 2.5rem;
				line-height: 2.5rem;
				letter-spacing: 2px;
				text-align: justify;
			}
			.p-header {
				font-size: clamp(1rem, 3vh, 2rem);
			}
		}
	}
`;

export default About2;
