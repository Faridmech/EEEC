import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <div className="image">
        <img  src="https://eeec.az/wp-content/uploads/2019/12/edited22-scaled.jpg" />
      </div>
      <nav className="navbar">
        <div>
          {" "}
          <h1> Journal</h1>
        </div>
        <div>
          <h2> EEEC</h2>
        </div>
        <ul>
          <li>
            {" "}
            <a href="#">Home</a>
          </li>
          <li>
            {" "}
            <a href="#">Editorial board</a>
          </li>
          <li>
            {" "}
            <a href="#">For authors</a>
          </li>
          <li>
            {" "}
            <a href="#">Contact</a>
          </li>
          <li>
            {" "}
            <a href="#">Archive</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
