import "./App.css";
import Contact from "./components/contact";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="Title">
<Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    <h1>Quickk Mail</h1>
    <div className="App">
      <Contact />
    </div>
    </div>
  );
}

export default App;
