import React from "react";Add commentMore actions
import './../styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";

const App = () => {
  
  return (
    <div>
        {/* Do not remove the main div */}
        <Router>
          <Routes>
            <Route path="/" element={<ItemList />} />
            <Route path="/items/:id" element={<ItemDetail />} />
          </Routes>
        </Router>
    </div>
  )
}
