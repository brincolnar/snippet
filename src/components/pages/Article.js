import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { Consumer } from "../../context";

export default class Article extends Component {
  getData = (id, allContent) => {
    // get the article that belongs to the given id
    console.log(allContent);
    id = parseInt(id);
    const article = allContent.filter((article) => article.id === id);
    return article[0];
  };

  render() {
    const { params } = this.props.match;
    const { id } = params;
    return (
      <Consumer>
        {(value) => {
          const article = this.getData(id, value.allContent);
          return (
            <div className="text-center">
              <br />
              <h1 style={{ fontSize: "2em", fontWeight: "bold" }}>
                {article.title}
              </h1>
              <br />
              <img
                style={{ width: "100vw", height: "39vh" }}
                src={article.img}
                alt=""
              />
              <p style={{ width: "80%", margin: "3rem auto" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                minima soluta, nihil alias odio ut? Ea, ab. Corrupti officiis
                quae rem molestias dolorum magnam blanditiis eos commodi cum
                amet pariatur, explicabo repudiandae assumenda quaerat
                voluptatibus omnis culpa excepturi. Atque similique totam,
                facere eius quis voluptatibus in ex nemo nulla, consectetur ea
                odio sunt dolor quisquam culpa eum voluptas illo rem voluptate
                natus accusamus necessitatibus alias! Voluptatem est, omnis
                sapiente, magni aliquid ratione maxime odit fugit odio quis,
                maiores alias temporibus quas aspernatur quasi? Optio officiis
                culpa temporibus enim doloribus non eaque tenetur? Dolor porro
                at suscipit aut! Atque, pariatur quo!
              </p>
              <div className="flex justify-center items-center">
                by:{"   "}
                <img
                  src={article.profile}
                  style={{
                    marginLeft: "1rem",
                    borderRadius: "100%",
                    width: "50px",
                    height: "50px",
                  }}
                  alt=""
                />
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
