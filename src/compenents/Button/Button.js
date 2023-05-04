import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";

//PROPS
function Button({ name, color, icon, bg, bFw, bRad, bPad }) {
	const theme = useTheme();
	return (
		<ButtonStyled
			style={{
				color: color,
				borderRadius: bRad,
				padding: bPad,
				fontWeight: bFw,
			}}
			theme={theme}
		>
			<a
				href="https://forms.gle/KJMZU8SW8pTiK1jB9"
				target="_blank"
				rel="noreferrer"
			>
				{name}
			</a>
			{icon}
			<div className={"blob"}></div>
		</ButtonStyled>
	);
}

const ButtonStyled = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	outline: none;
	border: none;
	cursor: pointer;
	font-family: inherit;
	font-size: 0.85rem;
	font-family: "Inter", sans-serif;
	letter-spacing: 1.5px;
	position: relative;
	background-color: white;
	overflow: hidden;
	i {
		margin-left: 0.6rem;
	}
	a {
		text-decoration: none;
		color: black;
	}
`;

export default Button;
