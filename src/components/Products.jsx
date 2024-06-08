import React from 'react';
import s1 from '../pic/s1.png'
import s4 from '../pic/s4.png'
import s2 from '../pic/s2.png'
const Products = () => {
  return (
    <div>
      <div className="ourprod">
        <h1 id="ourprod">What We Provide</h1>
      </div>
      <div className="projcont">
        <div className="card" style={{ width: '18rem' }}>
          <img src={s1} className="card-img-top" alt="..." height="100px" />
          <div className="card-body">
            <h5 className="card-title">Personal Diary</h5>
            <p className="card-text">
              This App is build by Flask,Firebase.It can create,read,update,delete Notes
            </p>
            <a href="#" className="btn btn-primary" id="btn1">$ 30.66</a>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img src={s4} className="card-img-top" alt="..." height="100px" />
          <div className="card-body">
            <h5 className="card-title">Petshop Management</h5>
            <p className="card-text">
              This App is Build with c#.It is very useful for petshop
            </p>
            <a href="#" className="btn btn-primary" id="btn2">$ 20.66</a>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img src={s2} className="card-img-top" alt="..." height="100px" />
          <div className="card-body">
            <h5 className="card-title">LetsChat App</h5>
            <p className="card-text">
              This App is a clone of Whatsapp which aims to complete all the works that a social media app does
            </p>
            <a href="#" className="btn btn-danger" id="btn3">Stock out</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
