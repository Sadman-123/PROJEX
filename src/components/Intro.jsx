import React from 'react';
import pg from '../pic/Your paragraph text.gif'
const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="info">
        <h1 id="titleintro">Welcome to PROJEX</h1>
        <br />
        <p id="paraintro">
          PROJEX delivers cutting-edge software solutions tailored to your
          unique needs. From web development to mobile apps and desktop
          applications, our expert team brings your vision to life. Elevate your
          business with PROJEX, where innovation meets technology.
        </p>
        <div className="okk">
          <button
            className="btn btn-primary"
            onClick={() => alert('Downloading for Windows 😇')}
          >
            Download <i className="fa-brands fa-windows"></i>
          </button>
          <br />
        </div>
        <br />
        <div className="okk2">
          <button
            className="btn btn-warning"
            onClick={() => alert('Downloading for Mac')}
          >
            Download <i className="fa-brands fa-apple"></i>
          </button>
        </div>
      </div>
      <div className="complogo">
        <img
          src={pg}
          alt=""
          height="100px"
          width="100px"
        />
      </div>
    </div>
  );
};

export default Intro;
