import React from "react";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import Library from "./components/pages/Library";
import Article from "./components/pages/Article";
import Category from "./components/pages/Category";
import { Provider } from "./context";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Provider>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/library" component={Library} />
            <Route path="/article/:id" component={Article} />
            <Route path="/category/:category" component={Category} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
