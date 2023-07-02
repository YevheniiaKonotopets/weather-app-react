import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="weather-app-wrapper">
          <Search />

          <div className="footnote">
            <hr />
            This project was coded by Yevheniia Konotopets and is {}
            <a
              href="https://github.com/YevheniiaKonotopets/weather-app-react"
              target="_blank"
              rel="noreferrer"
            >
              open-source on GitHub
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
