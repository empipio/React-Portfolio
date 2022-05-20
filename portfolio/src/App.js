//import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/footer";
import Page from "./components/page";

function App() {
  return (
    <main>
      <Header />
      <div>
        <Page />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}

export default App;
