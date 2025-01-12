import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Search from "./components/Search";
import PlayingVideo from "./components/PlayingVideo";
import { useAuth } from "./context/AuthProvider";
import { Route, Routes } from "react-router-dom";
import Loading from "./loader/Loader";
function App() {
  const { loading } = useAuth();
  return (
    <div>
      {loading && <Loading />}
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/search/:searchQuery" element={<Search />} />
        <Route path="/video/:id" element={<PlayingVideo />} />
      </Routes>
    </div>
  );
}

export default App;
