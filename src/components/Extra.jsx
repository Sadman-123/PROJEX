import React from 'react';
import lambo from '../pic/lambo.png'
import tesla from '../pic/Tesla_logo.png'
import ali from '../pic/AliExpress-Logo.wine.png'
import drz from '../pic/daraz1.png'
const Extra = () => {
  return (
    <div>
      <div className="wesrv">
        <h1 id="wesrv">Our Loyal Clients</h1>
      </div>
      <div className="ourserve">
        <div className="serv">
          <img src={lambo} alt="" />
        </div>
        <div className="serv">
          <img src={tesla} alt="" />
        </div>
        <div className="serv">
          <img src={ali} alt="" />
        </div>
        <div className="serv">
          <img src={drz} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Extra;
