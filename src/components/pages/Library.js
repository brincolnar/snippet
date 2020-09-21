import React from "react";
import ArticleCard from "../ArticleCard";
import { Consumer } from "../../context";

class Library extends React.Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { library } = value;
          return (
            <div style={{ width: "90%", margin: "auto" }}>
              <div className="mt-8 flex justify-center items-center">
                <i
                  style={{ fontSize: "2.3em" }}
                  className="p-2 text-indigo-800 fa fa-book"
                ></i>
                <h1 className="p-2 text-3xl">Library</h1>
              </div>
              <div className="flex flex-col items-center">
                {library.map((savedArticle) => (
                  <ArticleCard
                    page="library"
                    article={savedArticle}
                    title={savedArticle.title}
                    img={savedArticle.img}
                    summary={savedArticle.summary}
                    profile={savedArticle.profile}
                  />
                ))}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Library;
