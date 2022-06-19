import { gql, useQuery, useMutation } from '@apollo/client'
import { useState } from 'react'
import { addAuthor, bookMutation } from '../Queries'
import ErrorComponent from './Error'
import Loading from './Loading'
import { getBooks } from '../Queries'

const getBooksQuery = gql`
  ${getBooks}
`

const addAuthorQuery = gql`
  ${addAuthor}
`

const addBookMutation = gql`
  ${bookMutation}
`

const AddBook = () => {
  const [authorId, setAuthorId] = useState(undefined)
  const [name, setName] = useState('')
  const [genre, setGenre] = useState('')

  const { error, loading, data } = useQuery(addAuthorQuery)

  const [addBook, { data: mData, loading: mLoading, error: mError }] =
    useMutation(addBookMutation)

  if (loading) {
    return <Loading info={'author'} />
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }

  if (mLoading) {
    return <Loading info={'Add'} />
  }

  if (mError) {
    return console.log(mError.message)
  }

  const { Authors } = data
  console.log(mData)

  const displayAuthors = () => {
    return Authors.map((item) => {
      return (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      )
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('name' + name, 'ath' + authorId, '\n' + genre)

    addBook({
      variables: { name, genre, authorId },

      refetchQueries: [getBooksQuery],
    })
  }

  return (
    <div>
      <form id='detailsForm' onSubmit={handleSubmit}>
        <div>
          <label>Book Name:</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='formElement'
          ></input>
        </div>
        <div>
          <label>Genre:</label>
          <input
            type='text'
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className='formElement'
          ></input>
        </div>
        <div>
          <label>Author:</label>
          <select
            type='text'
            className='formElement'
            onChange={(e) => setAuthorId(e.target.value)}
          >
            <option>Select Author</option>;{displayAuthors()}
          </select>
        </div>
        <button type='submit' className='button-submit'>Add book</button>
      </form>
    </div>
  )
}

export default AddBook
