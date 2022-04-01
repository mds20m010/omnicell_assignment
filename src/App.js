import "./styles.css";
import Navbar from "./Components/Navbar/Navbar";
import Post from "./Components/Post/Post";
import LeftMenu from "./Components/LeftMenu/LeftMenu";
export default function App() {
  return (
    <div className="App">
      <div className="HomePage">
        <div className="NavBar">
          <Navbar />
        </div>
        <div className="Content">
          <div className="Posts">
            <Post />
          </div>
          <div className="LeftMenu">
            <LeftMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
