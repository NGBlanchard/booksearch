import React from 'react';
import BookItem from './BookItem';

const Results = (props) => {
  const renderedList = props.booklist.map((book) => {
    return (
      <BookItem
        key={book.id}
        title={book.volumeInfo.title} 
        author={book.volumeInfo.authors}
        publisher={book.volumeInfo.publisher}
        image={book.volumeInfo.imageLinks.thumbnail}
        price={book.saleInfo.country}
        description={book.volumeInfo.description}
      />
    )
  });

  return (
    <div className="ui relaxed divided list">
      {renderedList}
    </div>
  );
};

export default Results;