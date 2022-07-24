import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { useAppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";

const BookList = () => {
    const [books, setBooks] = useState([]);

    const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

    const navigate = useNavigate();

    const favoritesChecker = (id) => {
      const isFavorite = favorites.some((book) => book.id === id);
       return isFavorite;
     };

  useEffect(() => {
    axios
      .get("https://example-data.draftbit.com/books?_limit=50")
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className="bookList">
      {books.map((book) => (
        <div key={book.id} className="book">
          <div>
            <h4>{book.title}</h4>
          </div>
          <div className="book_img">
            <img
              src={book.image_url}
              alt="#"
                onClick={() => navigate(`/books/${book.id}`)}
            />
          </div>
          <div>
            {favoritesChecker(book.id) ? (
              <button
                className="remove"
                onClick={() => removeFromFavorites(book.id)}
              >
                Remove from Favorites
              </button>
            ) : (
              <button className="add" onClick={() => addToFavorites(book)}>
                Add to Favorites
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
