import React from "react";
import ArticleCard from "../ArticleCard";
import black from "../../assets/black.png";
import profile1 from "../../assets/profile1.jpg";
import profile2 from "../../assets/profile2.jpg";
import profile3 from "../../assets/profile3.jpg";
import { Consumer } from "../../context";

class Popular extends React.Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { popular } = value;
          return (
            <div style={{ width: "90%", margin: "auto" }}>
              <div className="mt-8 flex justify-center items-center">
                <i
                  style={{ fontSize: "2.3em" }}
                  className="p-2 text-indigo-800 fa fa-star"
                ></i>
                <h1 className="p-2 text-3xl">Trending</h1>
              </div>
              <div className="flex flex-col items-center">
                {popular.map((popularArticle) => (
                  <ArticleCard
                    article={popularArticle}
                    title={popularArticle.title}
                    img={popularArticle.img}
                    summary={popularArticle.summary}
                    profile={popularArticle.profile}
                    addedToLibrary={popularArticle.addedToLibrary}
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

export default Popular;
