/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
/* eslint-disable prefer-const */
/* eslint-disable object-curly-newline */
/* eslint-disable react/button-has-type */
/* eslint-disable eqeqeq */
/* eslint-disable no-const-assign */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/prop-types */
import React from 'react';

const BooksCard = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  let { title, shortDescription, thumbnailUrl } = props.data;
  const favorite = props.favorite;
  const read = props.read;
  return (
    <li className="card">
      <img src={thumbnailUrl} alt="Book cover" />
      <div className="cardBody">
        <h2>{title}</h2>
        <p>{shortDescription}</p>
      </div>
      <div className="cardFooter">
        <button onClick={favorite}>Favorite</button>
        <button onClick={read}>Read</button>
      </div>
    </li>
  );
};

export default BooksCard;
