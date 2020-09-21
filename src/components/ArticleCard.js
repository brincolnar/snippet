import React, { Component } from "react";
import { Consumer } from "../context";
import { Link } from "react-router-dom";

class ArticleCard extends Component {
  state = {
    addedToLibrary: false,
  };

  addToLibrary = (e, page, article, dispatch) => {
    e.preventDefault();

    if (article.addedToLibrary) return;

    if (page === "library") {
      this.removeFromLibrary(article.id, dispatch);
      this.setState({ addedToLibrary: false });
      return;
    }

    dispatch({ type: "ADD_TO_LIBRARY", payload: article });
    this.setState({ addedToLibrary: true });
  };

  removeFromLibrary = (id, dispatch) => {
    dispatch({ type: "REMOVE_FROM_LIBRARY", payload: id });
  };

  render() {
    const { article, page, addedToLibrary } = this.props;
    const id = article.id;
    let iconClass = "fa fa-plus-circle";

    if (page === "library") iconClass = "fa fa-trash";

    if (addedToLibrary) iconClass = "fa fa-check"; // impossible in the library page

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <a href="" style={{ margin: "2rem", width: "100%" }}>
              <div style={{ border: "1px solid gray" }} className="mt-2 flex">
                <img
                  style={{ width: "150px", height: "200px", maxHeight: "100%" }}
                  src={this.props.img}
                  alt=""
                />
                <div className="ml-3 mt-2">
                  <h2 className=" font-bold text-xl">{this.props.title}</h2>{" "}
                  <br />
                  <p>{this.props.summary}</p>
                  <img
                    style={{
                      borderRadius: "100%",
                      width: "50px",
                      height: "50px",
                    }}
                    src={this.props.profile}
                    alt=""
                  />
                </div>
                <div className="ml-auto flex flex-col justify-center">
                  <Link className="p-3" to={`/article/${id}`}>
                    <i style={{ fontSize: "1.5em" }} className="fa fa-eye"></i>
                  </Link>
                  <a
                    className="p-3"
                    href="#"
                    onClick={(e) =>
                      this.addToLibrary(e, page, article, dispatch)
                    }
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

export default ArticleCard;
