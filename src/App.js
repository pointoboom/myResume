import "./App.css";
import Navbar from "./component/Navbar";
import Introduction from "./component/Introduction";
import AboutMe from "./component/AboutMe";
import ContactMe from "./component/ContactMe";
function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Introduction />
        <AboutMe />
      </main>
      <footer>
        <ContactMe />
      </footer>
    </div>
  );
}

export default App;
