
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './components/header/Header';
import Home from './home/home';
import MovieList from './components/movielist/movielist';
import Movie from './components/movieDetail/movie';



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
 <Routes>

    <Route index element={<Home></Home>}></Route>
    <Route path="movie/:id" element={<Movie />}></Route>
    <Route path="movies/:type" element={<MovieList />}></Route>
    <Route path="/*" element={<h1>error </h1>}></Route>
  </Routes>
</Router>

    </div>
  );
}

export default App;
