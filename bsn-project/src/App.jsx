import HomePage from "./routes/homePage/homePage";
import Navbar from "./components/navbar/Navbar";
import ListPage from "./routes/listPage/listPage";
import "./layout.scss"
// import ListPage from "./routes/listPage/listPage";

function App() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      {/* <div className="content">
        <HomePage/>
      </div> */}
      <div className="content">
        <ListPage/>
      </div>
    </div>
  );
}

export default App;