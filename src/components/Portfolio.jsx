import React, { Component } from "react";
import projects from "../data/projects";

class PortfolioSection extends Component {
  constructor() {
    super();
    // this.state = {};
    this.myRef = React.createRef(); // Create a ref object
  }
  renderProjects = () => {
    return projects.map(project => {
      return (
        <div className="col-lg-4 work_item webdesign wordpress">
          <a href="images/works/1.jpg" className="img-zoom">
            <div className="work_box">
              <div className="work_img">
                <img
                  src={project.img}
                  className="img-fluid mx-auto d-block rounded"
                  alt="work-img"
                />
              </div>
              <div className="work_detail">
                <p className="mb-2">{project.category}</p>
                <h4 className="mb-0">{project.title}</h4>
              </div>
            </div>
          </a>
        </div>
      );
    });
  };
  render() {
    return (
      <section className="section bg-light text-center" id="work">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="text-center">
                <h2>
                  My <span className="font-weight-bold">Work</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row mt-5 ">
            <ul
              className="col list-unstyled list-inline mb-0 text-uppercase work_menu"
              id="menu-filter"
            >
              <li className="list-inline-item">
                <a className="active" data-filter="*">
                  All
                </a>
              </li>
              <li className="list-inline-item">
                <a className="" data-filter=".seo">
                  Design
                </a>
              </li>
              <li className="list-inline-item">
                <a className="" data-filter=".webdesign">
                  Web Apps
                </a>
              </li>
              <li className="list-inline-item">
                <a className="" data-filter=".WORK">
                  Mockup
                </a>
              </li>
              <li className="list-inline-item">
                <a className="" data-filter=".wordpress">
                  Games
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="row mt-4 work-filter">{this.renderProjects()}</div>
        </div>
      </section>
    );
  }
}

export default PortfolioSection;
