import HomePage from "./routes/homePage/homePage";
import Navbar from "./components/navbar/Navbar";
import ListPage from "./routes/listPage/listPage";
import "./layout.scss";
import React from 'react'

function App() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      {/* <div className="home">
        <HomePage/>
      </div> */}
      <div className="list">
        <ListPage/>
      </div>
    </div>
  );
}

export default App;