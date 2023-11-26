<<<<<<<< HEAD:starter/src/components/Library/Shelf.js
import Book from '../SharedComponents/Book';
========
import React from 'react'
import Book from '../Book';
>>>>>>>> ignore-last-changes:starter/src/components/Library/Shelves.js

const Shelves = ({shelfNamesImmutable, nameOfTheShelf, books, updateBook, getBook}) => {
 
  return (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{nameOfTheShelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {
          books.filter(book => book.shelf === shelfNamesImmutable)
          .map(book => 
            <Book 
              key={book.id}
              id = {book.id}
              shelf={book.shelf}
              title = {book.title}
              authors = {book.authors}
              url={
                book.imageLinks 
                ? book.imageLinks.thumbnail 
                : book.imageLinks.smallThumbnail
                }
              book = {book}
              updateBook={updateBook}
              getBook = {getBook}
            />  
        )}
          </ol>
        </div>
    </div>
  )
}

export default Shelves
