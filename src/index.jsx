import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from 'components/navigation/Navigation';
import Video from 'components/Video';
import Letter from 'components/Letter';
import Resume from 'components/Resume';
import Portfolio from 'components/Portfolio';
import Contact from 'components/Contact';

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <Video />
    <Letter />
    <Resume />
    <Portfolio />
    <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);
