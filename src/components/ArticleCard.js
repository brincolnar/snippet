import React, { Component } from "react";

class ArticleCard extends Component {
  render() {
    return (
      <a href="" style={{ margin: "2rem", width: "100%" }}>
        <div style={{ border: "1px solid gray" }} className="mt-2 flex">
          <img
            style={{ width: "150px", height: "200px", maxHeight: "100%" }}
            src={this.props.img}
            alt=""
          />
          <div className="ml-3 mt-2">
            <h2 className=" font-bold text-xl">{this.props.title}</h2> <br />
            <p>{this.props.summary}</p>
            <img
              style={{ borderRadius: "100%", width: "50px", height: "50px" }}
              src={this.props.profile}
              alt=""
            />
          </div>
          <div className="ml-auto flex flex-col justify-center">
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

export default ArticleCard;
