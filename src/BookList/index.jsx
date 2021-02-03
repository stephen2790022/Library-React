/* eslint-disable no-undef */
/* eslint-disable arrow-spacing */
/* eslint-disable react/button-has-type */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-param-reassign */
/* eslint-disable no-sequences */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable keyword-spacing */
/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable padded-blocks */
/* eslint-disable prefer-const */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-indent */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-lonely-if */
/* eslint-disable no-else-return */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unreachable */
/* eslint-disable import/no-unresolved */
/* eslint-disable linebreak-style */
import React from 'react';
import BooksCard from 'BooksCard';


const BookList = () => {
  const [searchValue, setSearchValue] = React.useState();
  const [books, setBooks] = React.useState();
  const [saveBooks, setSaveBooks] = React.useState();
  let favoritList = [];
  let readList = [];

  const fetchBooks = () => {
    fetch('https://gist.githubusercontent.com/MathisDYKDan/76bc73ec77481ccb82677cc7c0d8b524/raw/a23c99027b9bfc1bfdb22e22ddcb4301a5f870ee/books.json')
      .then((response) => response.json())
      .then((data) => {
        setSaveBooks(data.books[0]);
        setBooks(data.books[0]);
      });
  };
  React.useEffect(() => {
    fetchBooks();
  }, []);

  const searchSpace = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    let searchResult = [];
    saveBooks.filter((book) => {
      if (book.title.toLowerCase().includes(searchValue)) {
        searchResult.push(book);
        return setBooks(searchResult);
      } else {
        if (!searchValue) {
          return setBooks(saveBooks)
        }
      }
    });
  };
  const handleFavorit = (index) => {
    if (!books[index].isFav) {
      books[index].isFav = true;
      favoritList.push(books[index])
      console.log(books[index])
    } else {
      books[index].isFav = false;
      console.log(books[index])
    }
  };
  const wish = (index) => {
    if (!books[index].read) {
      books[index].read = true;
      readList.push(books[index])
      console.log(books[index])
    } else {
      books[index].read = false;
      console.log(books[index])
    }
  };
  const handleFavoritBook = () => {
    setBooks(favoritList);
  }
  const handleRead = () => {
    setBooks(readList);
  }
  const home = () => {
    setBooks(saveBooks)
  }
  console.log(books)
  return (
    <div>
      <div>
        <button onClick={() =>handleFavoritBook()}>Favorite Books</button>
        <button onClick={() =>handleRead()}>Read list</button>
        <button onClick={() =>home()}>Home</button>
        <input type="text" placeholder="Find a Book" onChange={(e) => searchSpace(e)} />
      </div>
      <ul className="bookList">
        <h1>All Books</h1>
        {books && books.map((book, index) => (
          <BooksCard
            data={book}
            favorite={() => handleFavorit(index)}
            read={() => wish(index)}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
};
export default BookList;
