/* eslint-disable no-trailing-spaces */
/* eslint-disable arrow-body-style */
/* eslint-disable padded-blocks */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom';
import BookList from 'BookList';
import 'assets/style.scss';

const App = () => { 
  return (
    <div>
      <BookList />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
