import React, { Component } from "react";
import RecommendedArticleCard from "../RecommendedArticleCard";
import black from "../../assets/black.png";
import profile1 from "../../assets/profile1.jpg";
import profile2 from "../../assets/profile2.jpg";
import profile3 from "../../assets/profile3.jpg";

class Recommended extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popular: [
        {
          img: black,
          title: "Recommended Article 1",
          summary:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsum veritatis ullam, aperiam quia dolorum incidunt cum exercitationem aut asperiores!",
          profile: profile1,
        },
        {
          img: black,
          title: "Recommended Article 2",
          summary:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos, provident natus vel eius ipsa consequuntur velit.",
          profile: profile2,
        },
        {
          img: black,
          title: "Recommended Article 3",
          summary:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sunt, iste provident, iure tenetur recusandae minus aliquid alias enim, repellendus officiis autem doloribus.",
          profile: profile3,
        },
        {
          img: black,
          title: "Recommended Article 1",
          summary:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsum veritatis ullam, aperiam quia dolorum incidunt cum exercitationem aut asperiores!",
          profile: profile1,
        },
        {
          img: black,
          title: "Recommended Article 2",
          summary:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos, provident natus vel eius ipsa consequuntur velit.",
          profile: profile2,
        },
        {
          img: black,
          title: "Recommended Article 3",
          summary:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sunt, iste provident, iure tenetur recusandae minus aliquid alias enim, repellendus officiis autem doloribus.",
          profile: profile3,
        },
      ],
    };
  }

  render() {
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
          {this.state.popular.map((recommendedArticle) => (
            <RecommendedArticleCard
              title={recommendedArticle.title}
              img={recommendedArticle.img}
              summary={recommendedArticle.summary}
              profile={recommendedArticle.profile}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Recommended;
