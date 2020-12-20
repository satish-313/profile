import React from 'react';

// components
import Navbar from './components/Navbar';
import SideContent from './components/SideContent';
import RightContent from './components/RightContent';
import Footer from './components/Footer';

const App = () => {
  return (
    <main>
      <Navbar />
      <div className="section">
        <SideContent/>
        <RightContent/>
      </div>
    </main>
  )
};

export default App;