import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Banner from './components/banner/banner';
import Content from './components/content/content';
import Statecontain from './components/services/services';
import Gallery from './components/gallery/gallery';

const Home = () => (
  <div className="site">
    <title>Home Page</title>
    <Banner />
    <Content types="Home" />

  </div>

);

const Contact = () => (
  <div className="contactForm">
    <form >
      <input 
        type='text' 
        name='name' 
        placeholder='Enter your name' />

      <input 
        type='email' 
        name='email' 
        placeholder='Enter your email' />

      <textarea 
        name='message' 
        placeholder='Messaage'></textarea>

      <button type='submit'>Submit</button>
</form>

  </div>
);

const About = () => (
  <div className="content-container">
  <div className="row">
      <div className="left-panel box">
          <h5>Assistant videographer</h5>
      </div>
      <div className="middle-panel box">
          <h5>Photographer and video editor</h5>
      </div>
      <div className="right-panel box">
          <h5>Social media Strategist</h5>
      </div>
 </div>
</div>
);

const services = () => (
  <div className="state">
    <title>State Function</title>
    <Statecontain />
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
        <Route exact path="/gallery" component={Gallery} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
