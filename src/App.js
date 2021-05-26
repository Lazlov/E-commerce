import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Cart } from "./components/Cart";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
    </Router>
  );
}

export default App;
