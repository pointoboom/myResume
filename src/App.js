import "./App.css";
import Navbar from "./component/Navbar";
import Introduction from "./component/Introduction";
import AboutMe from "./component/AboutMe";
import ContactMe from "./component/ContactMe";
import Passion from "./component/Passion";
function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Introduction />
        <AboutMe />
        <Passion />
      </main>
      <footer>
        <ContactMe />
      </footer>
    </div>
  );
}

export default App;
