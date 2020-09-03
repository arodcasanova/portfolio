import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const HomeIcon = styled.div`
	height: 3rem;
	width: 3rem;
	border-radius: 100%;
	background-color: gray;
`;

const HomeType = styled.h3`
	margin-left: 1rem;
	font-size: 1.4rem;
`;

const HomeLink = () => (
	<a href=".">
		<HomeContainer>
			<HomeIcon />
			<HomeType>Adrian Rodriguez</HomeType>
		</HomeContainer>
	</a>
);

export default HomeLink;
