import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
	margin-left: 2rem;
	font-size: 1.4rem;
`;

const NavLink = ({ children }) => (
	<Link href=".">
		{children}
	</Link>
);

export default NavLink;
