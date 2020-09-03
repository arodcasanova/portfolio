import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from 'components/navigation/Navigation';
import Video from 'components/Video';
import Letter from 'components/Letter';
import Resume from 'components/Resume';
import References from 'components/References';
import Portfolio from 'components/Portfolio';
import Credits from 'components/Credits';

const Main = () => (
	<main>
		<Video />
	    <Letter />
	    <Resume />
	    <References />
	    <Portfolio />
	    <Credits />
	</main>
);

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);
