import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import PathToWork from './components/sections/PathToWork';
import BottomCTA from './components/sections/BottomCTA';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <PathToWork />
      <BottomCTA />
    </div>
  );
}

export default App;