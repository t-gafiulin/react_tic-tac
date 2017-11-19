import React, { Component } from 'react';
import {Link } from 'react-router-dom';


class Menu extends Component {
  render() {
    return <div className='nav-block'>
        <Link to="/1vs1"><nav>1 vs 1</nav></Link>
        <Link to="/vscomputer"><nav>1 vs Computer</nav></Link>
      </div>;
  }
}

export default Menu;