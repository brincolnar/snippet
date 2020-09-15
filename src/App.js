import React from "react";
import Header from "./components/layout/Header";
import Popular from "./components/layout/Popular";
import Recommended from "./components/layout/Recommended";

function App() {
  return (
    <div className="App">
      <Header />
      <Popular />
      <hr className="mt-6 " />
      <Recommended />
    </div>
  );
}

export default App;
