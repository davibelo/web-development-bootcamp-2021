//jshint esversion:6
import React from "react";

import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Note title="Example 1" content="note content here" />
      <Note title="Example 2" content="note content here" />
      <Footer />
    </div>
  );
}
export default App;