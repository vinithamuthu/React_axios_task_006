import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Recipes from "./Components/Recipes";
import Edit from "./Components/Edit";
import Create from "./Components/Create";

const App = () => {
  const [id, setId] = useState(0);
  return (
    <div className="container-md pt-2">
      <BrowserRouter>
        <div className="pb-5">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes setId={setId} />} />
          <Route path="/edit/:id" element={<Edit id={id} />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
