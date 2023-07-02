import logo from "./logo.svg";
import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="weather-app-wrapper">
          <Search />
        </div>
      </header>
      <footer>
        This project was coded by Yevheniia Konotopets and is
        <a
          href="https://github.com/YevheniiaKonotopets/weather-app-react"
          target="_blank"
        >
          open-source on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
