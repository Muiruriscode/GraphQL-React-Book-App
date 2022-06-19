import { gql, useQuery } from '@apollo/client'
import { useState } from 'react'
import { getBooks } from '../Queries'
import BookDetails from './BookDetails'
import AddAuthor from './AddAuthor'
import AddBook from './AddBook'
import ErrorComponent from './Error'
import Loading from './Loading'

const getBooksQuery = gql`
  ${getBooks}
`

const BookList = () => {
  const [bookId, setBookId] = useState('')

  const { loading, error, data } = useQuery(getBooksQuery)

  if (loading) {
    return <Loading info={'books'} />
  }
  if (error) {
    return <ErrorComponent error={error} />
  }

  return (
    <section className='container'>
      <div className='bookList'>
        <div>
          <h2 className='header'>Books List</h2>
          <ul className='list-group'>
            {data.Books.map((item) => (
              <li
                key={item.id}
                className='list-item'
                onClick={(e) => setBookId(item.id)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='bookDetails'>{<BookDetails id={bookId} />}</div>
      <div className='addSection'>
        <AddBook />
        <AddAuthor />
      </div>
    </section>
  )
}

export default BookList
