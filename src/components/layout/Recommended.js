import React, { Component } from "react";
import RecommendedArticleCard from "../RecommendedArticleCard";
import black from "../../assets/black.png";
import profile1 from "../../assets/profile1.jpg";
import profile2 from "../../assets/profile2.jpg";
import profile3 from "../../assets/profile3.jpg";
import { Consumer } from "../../context";

class Recommended extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { recommended } = value;
          return (
            <div>
              <div className="mt-8 flex justify-center items-center">
                <i
                  style={{ fontSize: "2.3em" }}
                  className="p-2 text-indigo-800 fa fa-bullseye"
                ></i>
                <h1 className="p-2 text-3xl">Picked for you</h1>
              </div>
              <div
                style={{ width: "90%", margin: "auto" }}
                className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4"
              >
                {recommended.map((recommendedArticle) => (
                  <RecommendedArticleCard
                    article={recommendedArticle}
                    title={recommendedArticle.title}
                    img={recommendedArticle.img}
                    summary={recommendedArticle.summary}
                    profile={recommendedArticle.profile}
                    addedToLibrary={recommendedArticle.addedToLibrary}
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

export default Recommended;
