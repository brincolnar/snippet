import React, { Component } from "react";
import { Consumer } from "../context";
import { Link } from "react-router-dom";

class RecommendedArticleCard extends Component {
  addToLibrary = (e, article, dispatch) => {
    e.preventDefault();

    if (article.addedToLibrary) return;
    dispatch({ type: "ADD_TO_LIBRARY", payload: article });
  };

  render() {
    const { article, page, addedToLibrary } = this.props;
    const id = article.id;
    let iconClass = "fa fa-plus-circle";

    if (page === "library") iconClass = "fa fa-trash";
    if (addedToLibrary) iconClass = "fa fa-check";

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;

          return (
            <a href="">
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
                  <h2 className=" font-bold text-xl">{this.props.title}</h2>{" "}
                  <br />
                  <p>{this.props.summary}</p>
                  <img
                    className="mt-4"
                    style={{
                      borderRadius: "100%",
                      width: "50px",
                      height: "50px",
                    }}
                    src={this.props.profile}
                    alt=""
                  />
                </div>
                <div className="ml-auto flex justify-center">
                  <Link className="p-3" to={`/article/${id}`}>
                    <i style={{ fontSize: "1.5em" }} className="fa fa-eye"></i>
                  </Link>
                  <a
                    className="p-3"
                    href="#"
                    onClick={(e) => this.addToLibrary(e, article, dispatch)}
                  >
                    <i style={{ fontSize: "1.5em" }} className={iconClass}></i>
                  </a>
                </div>
              </div>
            </a>
          );
        }}
      </Consumer>
    );
  }
}

export default RecommendedArticleCard;
