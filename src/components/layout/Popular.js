import React from "react";
import ArticleCard from "../ArticleCard";
import black from "../../assets/black.png";
import profile1 from "../../assets/profile1.jpg";
import profile2 from "../../assets/profile2.jpg";
import profile3 from "../../assets/profile3.jpg";

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popular: [
        {
          img: black,
          title: "Article 1",
          summary:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, quasi!",
          profile: profile1,
        },
        {
          img: black,
          title: "Article 2",
          summary:
            "ipsum dolor sit amet consectetur adipisicing elit. Voluptate, soluta.",
          profile: profile2,
        },
        {
          img: black,
          title: "Article 3",
          summary:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas maxime suscipit aliquam?",
          profile: profile3,
        },
      ],
    };
  }

  render() {
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
          {this.state.popular.map((popularArticle) => (
            <ArticleCard
              title={popularArticle.title}
              img={popularArticle.img}
              summary={popularArticle.summary}
              profile={popularArticle.profile}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Popular;
