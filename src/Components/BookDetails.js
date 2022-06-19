import { gql, useQuery } from '@apollo/client'
import { getBookDetails } from '../Queries'
import ErrorComponent from './Error'
import Loading from './Loading'

const getBookDetailsQuery = gql`
  ${getBookDetails}
`

const BookDetails = ({ id }) => {
  const { error, loading, data } = useQuery(getBookDetailsQuery, {
    variables: { id },
  })

  if (loading) {
    return (
      <div>
        <h2 className='header'>Book Details</h2>
        <Loading info={'book details'} />
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <h2 className='header'>Book Details</h2>
        <ErrorComponent error={error} />
      </div>
    )
  }

  const { Book } = data
  return (
    <div>
      <h2 className='header'>Book Details</h2>
      {Book && (
        <div>
          <h3>
            <em>Name: {Book.name}</em>
          </h3>
          <p>
            <strong>Genre: </strong>
            {Book.genre}
          </p>
          <p>
            <strong>Author: </strong>
            {Book.author.name}
          </p>
          <h4>Books by Author:</h4>
          <ol>
            {Book.author.books.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  )
}

export default BookDetails
