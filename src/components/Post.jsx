import React, { Component } from "react";
import posts from "../data/posts";

class PostSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderPosts = () => {
    return posts.map(post => {
      return (
        <div className="col-lg-4 mt-3">
          <div className="rounded bg-white p-2">
            <div className="img_blog">
              <img
                src={post.img}
                alt=""
                className="img-fluid rounded mx-auto d-block"
              />
            </div>
            <div className="content_blog pt-3 pb-3">
              <div>
                <h5 className="font-weight-bold mb-0">
                  <a href="#" className="text-dark">
                    {post.title}
                  </a>
                </h5>
              </div>
              <div className="mt-3">
                <p className="h6 text-muted date_blog mb-0">
                  {post.date}{" "}
                  <a href="#" className="text-custom font-weight-bold">
                    by {post.author}
                  </a>
                </p>
                <p className="mt-3 desc_blog text-muted"> {post.summary}</p>
                <p className="h6 mb-0">
                  <a href="#" className="text-muted font-weight-bold">
                    Read More...
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <section className="section" id="blog">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="text-center">
                <h2>
                  My <span className="font-weight-bold">Posts</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row mt-5">{this.renderPosts()}</div>
        </div>
      </section>
    );
  }
}

export default PostSection;
