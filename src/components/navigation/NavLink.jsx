import React from 'react';
import styled from 'styled-components';
import { CaptionBold } from 'components/core/Type';

const Link = styled.a`
	margin-left: 1.2rem;
`;

const NavLink = ({ children }) => (
	<Link href=".">
		<CaptionBold>{children}</CaptionBold>
	</Link>
);

export default NavLink;
