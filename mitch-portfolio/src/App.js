import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import About from './components/About';
import SpaceStation from './components/SpaceStation';
import Languages from './components/Languages';
import ToLearn from './components/ToLearn';
import PrevExperience from './components/PrevExperience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <Carousel />
        <About />
        <SpaceStation />
        <div id="languages-block">
            <div className="flex-container">
              <Languages />
              <ToLearn />
            </div>
        </div>
        
        <PrevExperience />
        <Footer />
    </div>
  );
}

export default App;
