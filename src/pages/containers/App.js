import React, { Suspense, useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import '../../assets/scss/main.scss';
import HeaderNav from '../components/HeaderComponents/HeaderNav/RightNav/HeaderNav';
import ProgressBar from '../components/HeaderComponents/HeaderNav/ProgressBar/ProgressBar';

const Header = React.lazy(() => import('./Header'));
const Footer = React.lazy(() => import('./Footer'));
const Hero = React.lazy(() => import('./Hero'));
const About = React.lazy(() => import('./About'));
const Contact = React.lazy(() => import('./Contact'));

function App() {
  // Scroll bar
  const [scroll, setScroll] = useState(0);

  useEffect(() => {

    let progressBarHandler = () => {

      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScroll(scroll);
    }

    window.addEventListener("scroll", progressBarHandler);

    return () => window.removeEventListener("scroll", progressBarHandler);
  });

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Router>
        <Header />
        <HeaderNav />
        <ProgressBar scroll={scroll} />
        <Switch>
          <Route path="/" exact>
            <Hero />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/">
          </Route>

        </Switch>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
