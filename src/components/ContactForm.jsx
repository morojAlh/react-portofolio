import React, { Component } from "react";
import Input from "./common/Input";
class Contact extends Component {
  constructor() {
    super();
    this.state = {
      data: {}
    };
  }
  handleSubmit = () => {};
  renderInput = (name, label, type = "text") => {
    const { data } = this.state;

    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
      />
    );
  };

  render() {
    return (
      <section className="section  bg-light" id="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="text-center">
                <h2>
                  <span className="font-weight-bold">Say Hi</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="form-kerri">
                <form onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      {this.renderInput("name", "Your Name*")}
                    </div>
                    <div className="col-lg-6">
                      {this.renderInput("email", "Your Email*")}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      {this.renderInput("subject", "Your Subject..")}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      {this.renderInput("comments", "Your message...")}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <button className="btn btn-primary"> Submit </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
