//import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/aboutMe";
import Footer from "./components/footer";
import Nav from "./components/navigation";

function App() {
  return (
    <main>
      <Header />
      <div>
        <Nav />
      </div>
      <div>
        <AboutMe />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}

export default App;
