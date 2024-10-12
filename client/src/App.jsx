import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Donate from "./components/Donate";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Community from "./components/Community";
import Blog from "./components/Blog";
import Store from "./components/Store";
import JoinUs from "./components/JoinUs";
import "./styles.css";
import NotFound from "./components/NotFound";

const App = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 2000);

  return (
    <Router>
      {loading && <Loader />}
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/joinus" element={<JoinUs />} />
          <Route path="/store" element={<Store />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
