import React from 'react'
import publications from '../../../assets/docs/Publications/Publications';
import Navbar from '../../../components/Navbar/Navbar';
import { Footer } from 'antd/es/layout/layout';

const publicationsPage = () => {
      const { bookId } = useParams();
  console.log(bookId);
  const book = publications.find((p) => p.id === bookId);

  if (!book) {
    return <div>Book not found</div>;
  }
  return (
    <>
    <Navbar scrollVal={0}/>
    <section className="publication-container">
        <div className="book-wrapper">
            <div className="publication-image"></div>
        </div>
    </section>
    <Footer />
    </>
  )
}

export default publicationsPage