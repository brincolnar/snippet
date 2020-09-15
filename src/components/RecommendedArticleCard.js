import React, { Component } from "react";

class RecommendedArticleCard extends Component {
  render() {
    return (
      <a href="#">
        <div
          style={{
            border: "1px solid gray",
            margin: "2rem",
            width: "100%",
            minHeight: "450px",
          }}
          className="mt-2"
        >
          <img
            style={{ width: "100%", maxHeight: "150px" }}
            src={this.props.img}
            alt=""
          />{" "}
          <br />
          <div className="ml-3 mt-2">
            <h2 className=" font-bold text-xl">{this.props.title}</h2> <br />
            <p>{this.props.summary}</p>
            <img
              className="mt-4"
              style={{ borderRadius: "100%", width: "50px", height: "50px" }}
              src={this.props.profile}
              alt=""
            />
          </div>
          <div className="ml-auto flex justify-center">
            <a className="p-3" href="">
              <i style={{ fontSize: "1.5em" }} className="fa fa-eye"></i>
            </a>
            <a className="p-3" href="">
              <i
                style={{ fontSize: "1.5em" }}
                className="fa fa-plus-circle"
              ></i>
            </a>
          </div>
        </div>
      </a>
    );
  }
}

export default RecommendedArticleCard;
