import React from 'react';

function Footer() {
  return (
    <>
      <div className="darkfoot" id="darkfoot">
        <footer className="text-center text-white" style={{ backgroundColor: '#0f0f0f' }}>
          <div className="container pt-4">
            <section className="mb-4">
              <a
                className="btn btn-link btn-floating btn-lg text-white m-1"
                href="https://www.facebook.com/Sadman26fb/"
                role="button"
                data-mdb-ripple-color="white"
              ><i className="fab fa-facebook-f"></i></a>
              <a
                className="btn btn-link btn-floating btn-lg text-white m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              ><i className="fa-brands fa-x-twitter"></i></a>
              <a
                className="btn btn-link btn-floating btn-lg text-white m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              ><i className="fab fa-google"></i></a>

              <a
                className="btn btn-link btn-floating btn-lg text-white m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              ><i className="fab fa-linkedin"></i></a>
              <a
                className="btn btn-link btn-floating btn-lg text-white m-1"
                href="https://github.com/Sadman26"
                role="button"
                data-mdb-ripple-color="dark"
              ><i className="fab fa-github"></i></a>
            </section>
          </div>
          <div className="text-center text-light p-10" style={{ backgroundColor: '#0f0f0f' }}>
            Created By Shadman Sakib
          </div>
        </footer>
      </div>
      <div className="whitefoot" id="whitefoot">
        <footer className="text-center text-white" style={{ backgroundColor: '#ffffff' }}>
          <div className="container pt-4">
            <section className="mb-4">
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://www.facebook.com/Sadman26fb/"
                role="button"
                data-mdb-ripple-color="white"
              ><i className="fab fa-facebook-f"></i></a>
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              ><i className="fa-brands fa-x-twitter"></i></a>
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              ><i className="fab fa-google"></i></a>
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              ><i className="fab fa-linkedin"></i></a>
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://github.com/Sadman26"
                role="button"
                data-mdb-ripple-color="dark"
              ><i className="fab fa-github"></i></a>
            </section>
          </div>
          <div className="text-center text-dark p-10" style={{ backgroundColor: '#ffffff' }}>
            ©️ Created By Shadman Sakib
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
