import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";

function Footer() {
	const theme = useTheme();
	return (
		<FooterStyled theme={theme}>
			{/* <div className="empty" id="waiting">
				{" "}
			</div>
			<div className="waiting-list" id="waitlist">
				<div className="content">
					<p className="p-email"> Join Our Waiting List </p>
				</div>

				<div className="btn-con">
					<p className="p-email"> Button </p>
				</div>
			</div> */}

			<div className="footer">
				<p className="p-title">Sercle</p>
				{/* <p>Contact Us at business.travelbetter@gmail.com</p> */}
				{/* <p>Contact Us @ travelbetter@gmail.com</p> */}
				{/* <p>Copyrights</p> */}
			</div>
		</FooterStyled>
	);
}

const FooterStyled = styled.footer`
	position: relative;
	color: black;
	overflow-y: hidden;
	background-color: white;
	padding-bottom: 2rem;

	// .empty {
	// 	margin-top: 5rem;
	// }

	// .waiting-list {
	// 	background-color: #f2f1f0;
	// 	display: grid;
	// 	grid-template-columns: repeat(2, 1fr);
	// 	padding: 3rem;

	// 	.content {
	// 		margin-left: 5rem;
	// 		left: 0;
	// 		width: 80%;
	// 	}

	// 	.btn-con {
	// 		right: 0;
	// 		padding: 1.5 rem;
	// 	}
	// 	.p-email {
	// 		font-size: clamp(0.5rem, 2vh, 1.2rem);
	// 	}
	// }

	.footer {
		margin-top: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1.5 rem;
	}
	.p-title {
		font-size: clamp(0.6rem, 2.2vh, 1rem);
	}
	p {
		font-size: clamp(0.5rem, 2vh, 0.9rem);
		margin-top: 0.2rem;
		line-height: 2.1rem;
		letter-spacing: 2px;
		text-align: center;
	}
`;

export default Footer;
