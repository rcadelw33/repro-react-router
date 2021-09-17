import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="about">About</Link>
      </nav>
    </div>
  );
}

function About() {
  return <h1>About</h1>;
}

function MyRoute(props) {
  console.log("MyRoute");
  return <Route {...props} />;
}

function App() {
  return (
    <Router>
      <div>
        <h1>Welcome</h1>
        <Routes>
          <MyRoute path="/" element={<Home />} />
          <MyRoute path="about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
