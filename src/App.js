import Header from "./components/Header";
import MoviesCards from "./components/MoviesCards";
import { Route, Routes } from "react-router-dom";
import AddMovie from "./components/AddMovie";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<MoviesCards />} />
        <Route path="/addmovie" element={<AddMovie />} />
        <Route path="/Detail" element={<Detail />} />
      </Routes>
      </div>
  );
}

export default App;
