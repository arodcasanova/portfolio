import React from 'react';
import styled from 'styled-components';
import NavLink from 'components/navigation/NavLink';
import HomeLink from 'components/navigation/HomeLink';

const NavContainer = styled.nav`
	position: relative;
	z-index: 2;
	display: flex;
	justify-content: center;
	box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.25);
`;

const NavGrid = styled.div`
	display: grid;
	grid-template-columns: auto 1fr auto;
	align-items: center;
	padding: 1rem 2rem;
	width: 100%;
	max-width: 50rem;
	@media (max-width: 700px) {
		grid-template-columns: auto;
		grid-template-rows: auto 1rem auto;
	}
`;

const SectionLinksContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const SectionLinks = () => (
	<SectionLinksContainer>
		<NavLink>About</NavLink>
		<NavLink>Work</NavLink>
		<NavLink>Resume</NavLink>
	</SectionLinksContainer>
);

const Navigation = () => (
	<NavContainer>
		<NavGrid>
			<HomeLink />
			<div aria-hidden="true" />
			<SectionLinks />
		</NavGrid>
	</NavContainer>
);

export default Navigation;
