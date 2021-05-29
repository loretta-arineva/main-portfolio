import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './Header';
import '../../assets/scss/main.scss';
import HeaderNav from '../components/HeaderComponents/HeaderNav/RightNav/HeaderNav';
import ProgressBar from '../components/HeaderComponents/HeaderNav/ProgressBar/ProgressBar';
import Hero from './Hero';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Header />
      <HeaderNav/>
      <ProgressBar />
      <Hero />
      <Switch>
        <Route path="/about">
          {/* <About /> */}
        </Route>
        <Route path="/topics">
          {/* <Topics /> */}
        </Route>
        <Route path="/">
          {/* <Home /> */}
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
