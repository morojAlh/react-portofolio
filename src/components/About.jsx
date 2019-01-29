import React, { Component } from "react";
const AboutSection = () => {
  return (
    <section class="section" id="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="mt-3">
              <img
                src="https://via.placeholder.com/1110x778"
                alt=""
                class="img-fluid mx-auto d-block img-thumbnail"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="mt-3">
              <h2>
                <span class="font-weight-bold">About</span> Me
              </h2>
              <h4 class="mt-4">
                Hi!
                <span class="text-custom font-weight-bold">I'M ....</span>
              </h4>
              <p class="text-muted mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi non quis exercitationem culpa nesciunt nihil aut
                nostrum explicabo reprehenderit optio amet ab temporibus
                asperiores quasi cupiditate. Voluptatum ducimus voluptates
                voluptas?
              </p>
              <div>
                <ul class="mb-0 about-social list-inline mt-4">
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="mdi mdi-linkedin" />
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="mdi mdi-github-face" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
