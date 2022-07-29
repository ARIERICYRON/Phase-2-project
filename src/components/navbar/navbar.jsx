import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

// array of data
const navmenudata = [
  {
    menu: 'Home',
    link: '/',

  },
  {
    menu: 'Contact',
    link: '/contact',

  },
  {
    menu: 'About us',
    link: '/about',

  },

  {
    menu: 'Services',
    link: '/services',

  },

  {
    menu: 'gallery',
    link: '/gallery',

  },
];

const Navmenu = () => (
  <nav>
    {navmenudata.map((d) => (

      <NavLink activeClassName="active" exact to={d.link}>

        {d.menu}

      </NavLink>

    ))}

  </nav>

);

function navbar() {
  return (
    <div className="navigation">

      <Navmenu />

    </div>
  );
}

export default navbar;
