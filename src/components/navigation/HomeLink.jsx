import React from 'react';
import styled from 'styled-components';
import { CaptionBold } from 'components/core/Type';

const HomeContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const HomeIcon = styled.div`
	height: 2rem;
	width: 2rem;
	border-radius: 100%;
	background-color: gray;
`;

const HomeType = styled(CaptionBold)`
	margin-left: .5rem;
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
