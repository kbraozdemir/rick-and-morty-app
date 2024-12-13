import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import Home from "./components/Home";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>

        <Home />
    
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/about" element={<h1>About Page</h1>} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
