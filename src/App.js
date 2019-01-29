import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutSection from "./components/About";
import PortfolioSection from "./components/Portfolio";
import PostSection from "./components/Post";
import ContactForm from "./components/ContactForm";
import GoogleApiWrapper from "./components/Location";
class App extends Component {
  constructor() {
    super();
    this.state = {
      activeNav: "home"
    };
  }

  onNavClick = activeNav => {
    this.setState({ activeNav });
  };

  render() {
    return (
      <div>
        <Navbar
          onNavClick={this.onNavClick}
          active={this.state.activeNav}
          navs={["Home", "About Me", "Portfolio", "Blog", "Contact"]}
          navsRef={["Home", "About Me", "Portfolio", "Blog", "Contact"]}
        />

        <Home />
        <AboutSection />
        <PortfolioSection />
        <PostSection />
        <ContactForm />
        <GoogleApiWrapper />
        <footer class="footer bg-light">
          <div class="container">
            <div class="text-center text-white footer-alt">
              <p class="text-muted mb-0">
                &copy; Copyright | Ghadeer 2019 All Right Reserved
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
