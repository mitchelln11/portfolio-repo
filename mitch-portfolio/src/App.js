import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Languages from './components/Languages';
import ToLearn from './components/ToLearn';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <About />
        <div className="languages-block">
            <div className="flex-container">
              <Languages />
              <ToLearn />
            </div>
        </div>
        <Footer />
    </div>
  );
}

export default App;
