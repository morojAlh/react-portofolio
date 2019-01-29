import React, { Component } from "react";
const Home = () => {
  return (
    <section className="section header-bg-img h-100vh clippath_none" id="home">
      <div className="bg-overlay" />
      <div className="header-table">
        <div className="header-table-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="text-center header-content mx-auto">
                  <h4 className="text-white first-title mb-4">Hi </h4>
                  <h1 className="header-name text-white text-capitalize mb-0">
                    I'M
                    <span className="simple-text-rotate font-weight-bold">
                      ...
                    </span>
                  </h1>
                  <p className="text-white mx-auto header-desc mt-4">....</p>
                  <div className="mt-4 pt-2">
                    <a className="btn btn-outline-custom btn-round">
                      Download Cv
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
