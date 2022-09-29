import Navbar from "./Navbar";
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Passion from "./Passion";
import Portfolio from "./Portfolio";
function Homepage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Introduction />
        <AboutMe />
        <Passion />
        <Portfolio />
      </main>
      <footer>
        <ContactMe />
      </footer>
    </>
  );
}

export default Homepage;
