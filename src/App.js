// import SearchAppBar from "./Components/Header";
import React from "react";
// import "./App.css";
import { MenuAppBar } from "./Components/Header";
import { HomeIndex } from "./Components/HomePage";
import { SortOrder } from "./Components/SortOrder/SortOrder";

function App() {
  return (
    <>
      <MenuAppBar />
      <SortOrder />
      <HomeIndex />
    </>
  );
}

export default App;
