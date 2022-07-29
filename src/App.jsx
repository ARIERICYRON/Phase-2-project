import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Banner from './components/banner/banner';
import Content from './components/content/content';
import Statecontain from './components/services/services';
import Toggles from './components/gallery/gallery';

const Home = () => (
  <div className="site">
    <title>Home Page</title>
    <Banner />
    <Content types="Home" />

  </div>

);

const Contact = () => (
  <div className="contact">
    <h1>CONTACT US </h1>
  </div>
);

const About = () => (
  <div className="about">
    <h1 style={{ height: '50px' }}>ABOUT US</h1>
  </div>
);

const services = () => (
  <div className="state">
    <title>State Function</title>
    <Statecontain />
  </div>
);

const Gallery = () => (
  <div className="toggle">
    <title>Task Page</title>
    <Toggles />
  </div>
);

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={services} />
        <Route exact path="/toggle" component={Gallery} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
