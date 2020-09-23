import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from 'components/main/about/About';
import Resume from 'components/main/resume/Resume';

const MainRouter = () => (
	<Switch>
		<Route 
			exact path={['/', '/about']}
			component={About} />
		<Route 
			exact path="/resume"
			component={Resume} />
	</Switch>
);

export default MainRouter;
