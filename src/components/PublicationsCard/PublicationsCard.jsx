import React from 'react'
import "./PublicationsCard.css"
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

const PublicationsCard = ({book}) => {
  console.log(book.Translators);
  return (
   <div className="publications-card">
    <div className="book-card-image"><img src={book.Image} alt={book.Title} /></div>
    <div className="book-card-title">{book.Title}</div>
    <div className="book-card-author">By {book.Author.Name}</div>
    <div className="book-card-translators"> Translated by {   
       book.Translators.length === 2
      ? `${book.Translators[0]} & ${book.Translators[1]}`
      : book.Translators.join(', ')
  }</div>
    {/* <div className="book-card-summary">{book.About}</div> */}
    <div className="purchase-link">
      <Link to={book.Link} target='_blank'>
        <Button text="Buy on Amazon" color="var(--color-primary)"/>
      </Link>
    </div>
   </div>
  )
}

export default PublicationsCard