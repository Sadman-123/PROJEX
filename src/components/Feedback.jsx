import React from 'react';
import b3 from '../pic/b3.jpg'
import b2 from '../pic/b2.jpg'
import b1 from '../pic/b1.jpg'
const Feedback = () => {
  return (
    <div>
      <div className="client">
        <h1 id="client">From Our Beloved Clients with 💖</h1>
      </div>
      <div className="userbox">
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <p className="card-text mt-3">So far So good</p>
            <div className="d-flex">
              <img
                id="userimg1"
                src={b3}
                alt="User Avatar"
                className="user-avatar rounded-circle custom-user-avatar"
              />
              <div className="user-details ml-3">
                <h4 className="card-title" id="username1">Suzzane Storm</h4>
                <p className="card-subtitle text-muted">UI/UX Designer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <p className="card-text mt-3">They Provide Really Great Apps</p>
            <div className="d-flex">
              <img
                id="userimg2"
                src={b2}
                alt="User Avatar"
                className="user-avatar rounded-circle custom-user-avatar"
              />
              <div className="user-details ml-3">
                <h4 className="card-title" id="username2">Jack kallis</h4>
                <p className="card-subtitle text-muted">SEO Engineer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <p className="card-text mt-3">I Just Love their Apps</p>
            <div className="d-flex">
              <img
                id="userimg3"
                src={b1}
                alt="User Avatar"
                className="user-avatar rounded-circle custom-user-avatar"
              />
              <div className="user-details ml-3">
                <h4 className="card-title" id="username3">Brad Pritt</h4>
                <p className="card-subtitle text-muted">Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
