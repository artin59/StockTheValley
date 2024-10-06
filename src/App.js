import React from 'react';
import './App.css';

import artin from './Images/artin.jpg';
import rye from './Images/rye.jpg';
import mahir from './Images/mahir.jpg';
import ishaan from './Images/ishaan.jpg';
import lara from './Images/lara.jpg';

function App() {
  return (
   <> <div className="our-title">
    <h1 style={{"text-align": "center"}}>Title</h1> </div>

          <div className="grid-container first-row">
              <div className="grid-item">
                  <div className="content">
                      <a href="https://www.linkedin.com/in/artin-kiany/" target="_blank" rel="noopener noreferrer">
                          <h2>Artin</h2>
                          <img src={artin} />
                      </a>
                  </div>
              </div>
              <div className="grid-item">
                  <div className="content">
                      <a href="https://www.linkedin.com/in/rye-wang-73b766242/" target="_blank" rel="noopener noreferrer">
                          <h2>Rye</h2>
                          <img src={rye} alt="Rye" />
                      </a>
                  </div>
              </div>
              <div className="grid-item">
                  <div className="content">
                      <a href="https://www.linkedin.com/in/mahir-tanzil-rahman/" target="_blank" rel="noopener noreferrer">
                          <h2>Mahir</h2>
                          <img src={mahir} alt="Mahir" />
                      </a>
                  </div>
              </div>
          </div>

          {/* Second row with 4 columns in a separate grid container */}
          <div className="grid-container second-row">
              <div className="grid-item"></div> {/* Empty space in the first column */}
              <div className="grid-item">
                  <div className="content">
                      <a href="https://www.linkedin.com/in/ishaan-das-basak/" target="_blank" rel="noopener noreferrer">
                          <h2>Ishaan</h2>
                          <img src={ishaan} alt="Ishaan" />
                      </a>
                  </div>
              </div>
              <div className="grid-item">
                  <div className="content">
                      <a href="https://www.linkedin.com/in/lara-koshal-233a232b4/" target="_blank" rel="noopener noreferrer">
                          <h2>Lara</h2>
                          <img src={lara} alt="Lara" />
                      </a>
                  </div>
              </div>
              <div className="grid-item"></div> {/* Empty space in the fourth column */}
          </div>
      </>
  );
}

export default App;
