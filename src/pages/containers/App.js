import React, { Suspense } from 'react';

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
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Router>
        <Header />
        <HeaderNav />
        <ProgressBar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Hero />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
