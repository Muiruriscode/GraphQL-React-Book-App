import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import authorMutation from '../Queries/authorMutation'

const addAuthorMutation = gql`
  ${authorMutation}
`

const AddAuthor = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState(18)

  const [addAuthor, { data }] = useMutation(addAuthorMutation)

  const handleSubmit = (e) => {
    e.preventDefault()

    addAuthor({
      variables: { name, age },

      refetchQueries: [addAuthor],
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit} id='authorForm'>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div>
          <label htmlFor='age'>age</label>
          <input
            type='number'
            name='age'
            id='age'
            onChange={(e) => setAge(e.target.value)}
            value={age}
          />
        </div>
        <button type='submit' className='button-submit'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddAuthor
