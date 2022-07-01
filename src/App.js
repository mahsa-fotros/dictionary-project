import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="dictionary" />
        </main>
        <footer className="text-center">
          <small>
            This project was coded by Mahsa Fotros and is{" "}
            <a
              href="https://github.com/mahsa-fotros/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Open-Sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://mahsa-react-dictionary.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
