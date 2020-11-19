import React, { Component } from 'react';
import './Home.css';
import Upload from './component/Upload';
import Youtube from './Youtube';
import Footer from './Footer';

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className='arrange'>
        <p>Find All Top Related videos: Pussfuck ;</p>
        </div>

        < Upload />
        <Youtube />
        <Footer />
      </div>
    );
  }
}

export default HomePage;