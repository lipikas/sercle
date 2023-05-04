import React from "react";
import { useTheme } from "./context/themeContext";
import styled from "styled-components";
import Header from "./compenents/Header/Header";
// import Navigation from "./compenents/Navigation/Navigation";
import Nav from "./compenents/Navigation/Nav";
import About1 from "./compenents/Section/About1";
import About2 from "./compenents/Section/About2";
import Solution from "./compenents/Section/Solution";
import Solution2 from "./compenents/Section/Solution2";
import Footer from "./compenents/Footer/Footer";
import Hiring from "./compenents/Section/Hiring";
import Hiring3 from "./compenents/Section/Hiring3";
import Hiring4 from "./compenents/Section/Hiring4";

// import { useLocation } from "react-router";

function App() {
	const theme = useTheme();
	console.log(theme);
	// const { pathname, search } = useLocation();

	// const analytics = useCallback(() => {
	// 	trackPathForAnalytics({
	// 		path: pathname,
	// 		search: search,
	// 		title: pathname.split("/")[1],
	// 	});
	// }, [pathname, search]);

	// useEffect(() => {
	// 	analytics();
	// }, [analytics]);
	return (
		<AppStyled theme={theme}>
			{/* <Navigation toggle={toggle} /> */}
			<Nav />
			<Header />
			<About1 />
			<About2 />
			<Solution />
			<Solution2 />
			<Hiring />
			<Hiring4 />
			{/* <Hiring2 /> */}
			<Hiring3 />
			<Footer />
		</AppStyled>
	);
}

const AppStyled = styled.div`
	min-height: 100vh;
	background-color: ${(props) => props.theme.colorBg};
	color: ${(props) => props.theme.colorWhite};
	position: relative;
`;
export default App;
