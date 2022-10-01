import './App.css';
import {Routes, Route} from 'react-router-dom';
import BookList from './components/BookList';
import BookInfo from "./components/BookInfo";
import Favorites from "./components/Favorites";
import Footer from './components/Footer';
import NavBar from "./components/NavBar";
import Search from './components/Search';


function App() {
  return (
   
      <div className="App">
        <NavBar />
        <Search/>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/books/:id" element={<BookInfo />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <Footer />
      </div>
    
  );
}

export default App;
