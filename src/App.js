import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes />
    </Router>
  );
}

export default App;
