import React from 'react';
import {} from 'react-icons/fa';

// components
import Navbar from './components/Navbar';
import SideContent from './components/SideContent';
import RightContent from './components/RightContent';

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