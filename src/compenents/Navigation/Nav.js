import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";
import tb_logo from "../../img/tb_logo.png";

function Nav() {
	const theme = useTheme();
	return (
		<NavStyled className="nav" theme={theme}>
			<div className="header">
				<div className="logo">
					<img src={tb_logo} alt="" />
					<p>Sercle</p>
				</div>
				<div className="list">
					<ul className="nav-items">
						<li className="nav-item">
							<a href="/">Home</a>
						</li>
						<li className="nav-item">
							<a href="#about">About Us</a>
						</li>
					</ul>
				</div>
			</div>
		</NavStyled>
	);
}

const NavStyled = styled.nav`
	position: absolute;
	top: 0;
	z-index: 2;
	width: 100%;
	background: #fff;
	transition: 0.2s;

	@media screen and (max-width: 850px) {
		.list{
			padding-top: 16px;
		}
	
	}
	// @media screen and (max-width: 850px) and (min-width: 480px) {
	// 	.nav .header .list
	// 			padding-left: 0px;
	// 	}
	// }

	@media screen and (max-width: 850px){
        width: 100%;
        border-radius: 0;
        bottom: 0;
        height: 8vh;
        top: 0;
        left: 0;

		.list{
			padding-right: 0px !important;
			overflow: hidden;
			.nav-item {
				overflow: hidden;
				margin:0rem;
			}
		}
       
    }

	.header {
		margin: 0px auto;
		padding: 0 40px;
		display: flex;
		align-items: center;
		
		justify-content: space-between;
		height: 50px;
	}
	.logo {
		width: 180px;
		height: 100%;
		display: flex;
		align-items: center;

		img {
			height: 100%;
			padding: 10px 0;
			object-fit: contain;
		}
		p {
			color: black;
			padding-left: 1rem;
			letter-spacing: 2px;
			font-size: 15px;
			
		}
	}

	.list {
		display: flex;
		align-items: center;
        padding-right: 80px;

		.nav-items {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
        li{
            margin: 0 1rem;
            a{
                font-size: 13px;
                padding: .6rem .3rem;
                position: relative;
                text-decoration: none;
                color: black;
                transition: all .4s ease-in-out;
                &::after{
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0%;
                    height: 2px;
                    background-color: ${(props) => props.theme.colorPrimary};
                    transition: all .4s ease-in-out;
                }
                &:hover:after{
                    width: 100%;
                }
            }
	}
	//gets rid of the scroll option that shows up in the nav bar
	li.nav-item {
        overflow: hidden;
        white-space: nowrap;
    }
`;

export default Nav;
