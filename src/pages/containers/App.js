import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './Header';
import '../../assets/scss/main.scss';
import HeaderNav from '../components/HeaderComponents/HeaderNav/RightNav/HeaderNav';
import ProgressBar from '../components/HeaderComponents/HeaderNav/ProgressBar/ProgressBar';
import Hero from './Hero';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
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
  );
}

export default App;
