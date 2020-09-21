import React, { Component } from "react";

import black from "./assets/black.png";
import profile1 from "./assets/profile1.jpg";
import profile2 from "./assets/profile2.jpg";
import profile3 from "./assets/profile3.jpg";
import { act } from "react-dom/test-utils";

const Context = React.createContext();

const updateAllContent = (allContent, action) => {
  const updatedAllContent = [];

  allContent.forEach((article) => {
    if (article.id == action.payload.id) {
      let copyOfArticle = Object.assign({}, article); // copy of article
      console.log("copied object: ");
      console.log(article);

      copyOfArticle.addedToLibrary = true;

      console.log("changed object: ");
      console.log(copyOfArticle);

      updatedAllContent.push(copyOfArticle);
    } else {
      updatedAllContent.push(article);
    }
  });
  console.log(updatedAllContent);
  return updatedAllContent;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_LIBRARY":
      return {
        ...state,
        allContent: updateAllContent(state.allContent, action),
        popular: updateAllContent(state.popular, action),
        recommended: updateAllContent(state.recommended, action),
        library: state.library.concat(action.payload),
      };
      break;

    case "REMOVE_FROM_LIBRARY":
      return {
        ...state,
        library: state.library.filter(
          (article) => article.id != action.payload
        ),
      };
      break;

    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    allContent: [
      {
        id: 1,
        img: black,
        title: "Article 1",
        summary:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, quasi!",
        profile: profile1,
        addedToLibrary: false,
      },
      {
        id: 2,
        img: black,
        title: "Article 2",
        summary:
          "ipsum dolor sit amet consectetur adipisicing elit. Voluptate, soluta.",
        profile: profile2,
        addedToLibrary: false,
      },
      {
        id: 3,
        img: black,
        title: "Article 3",
        summary:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas maxime suscipit aliquam?",
        profile: profile3,
        addedToLibrary: false,
      },
      {
        id: 4,
        img: black,
        title: "Article 4",
        summary:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas maxime suscipit aliquam?",
        profile: profile3,
        addedToLibrary: false,
      },
      {
        id: 5,
        img: black,
        title: "Article 5",
        summary:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas maxime suscipit aliquam?",
        profile: profile3,
        addedToLibrary: false,
      },
      {
        id: 6,
        img: black,
        title: "Article 6",
        summary:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas maxime suscipit aliquam?",
        profile: profile3,
        addedToLibrary: false,
      },
    ],
    popular: [
      {
        id: 1,
        img: black,
        title: "Article 1",
        summary:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, quasi!",
        profile: profile1,
        addedToLibrary: false,
      },
      {
        id: 2,
        img: black,
        title: "Article 2",
        summary:
          "ipsum dolor sit amet consectetur adipisicing elit. Voluptate, soluta.",
        profile: profile2,
        addedToLibrary: false,
      },
      {
        id: 3,
        img: black,
        title: "Article 3",
        summary:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas maxime suscipit aliquam?",
        profile: profile3,
        addedToLibrary: false,
      },
      {
        id: 4,
        img: black,
        title: "Article 4",
        summary:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas maxime suscipit aliquam?",
        profile: profile3,
        addedToLibrary: false,
      },
    ],
    recommended: [
      {
        id: 1,
        img: black,
        title: "Article 1",
        summary:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, quasi!",
        profile: profile1,
        addedToLibrary: false,
      },
      {
        id: 2,
        img: black,
        title: "Article 2",
        summary:
          "ipsum dolor sit amet consectetur adipisicing elit. Voluptate, soluta.",
        profile: profile2,
        addedToLibrary: false,
      },
      {
        id: 3,
        img: black,
        title: "Article 3",
        summary:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas maxime suscipit aliquam?",
        profile: profile3,
        addedToLibrary: false,
      },
    ],
    library: [],
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
