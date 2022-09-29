import Navbar from "./Navbar";
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Passion from "./Passion";
import Portfolio from "./Portfolio";
import Footpage from "./footpage";

function Homepage() {
  return (
    <>
      <header className=" sticky top-0">
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
        <Footpage />
      </footer>
    </>
  );
}

export default Homepage;
