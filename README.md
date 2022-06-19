# GraphQl React App

The app gets data about books, author and genre. The app uses GraphQL to access data from the database. Once data is available Apollo-client the use of GraphQL in react apps.

## Frameworks and technologies

- React
- Apollo Client
- GraphQL

## Feature

- [] Get access to all the books in the database.
- [] Get Book details
- [] Add an Author
- [] Add a book to the database.

![App Design](https://github.com/Muiruriscode/GraphQL-React-Book-App/blob/main/public/web-image.png)

## GraphQl

### Installation

```bash
npm install @apollo/client graphql
```

### Import dependencies

```js
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client'
```

### Initialize queries

```js
1
const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache(),
})
```

## Queries

GraphQl uses the following queries to access data from the server.The gql library enables graphQL queries.

To access the data use Apollo client's useQuery hook and gql to input your query

```js
import { getBooks } from '../Queries'
const getBooksQuery = gql`
  ${getBooks}
`
```

To add data to the database use the use mutation hook from apollo client

```js
import { bookMutation } from '../Queries'
const [addBook, { data: mData, loading: mLoading, error: mError }] =
  useMutation(addBookMutation)

addBook({
  variables: { name, genre, authorId },

  refetchQueries: [getBooksQuery],
})
```

### Get list of books

Gets all the books that are available in the database.

```js

query {
  Books {
    name
    genre
    id
  }
}

```

### Get Book details

Gets all the book details for the book including genre the author and other books by the author

```js

query ($id: ID) {
  Book(id: $id) {
    name
    genre
    id
    author {
      id
      name
    books{
    id
    name
      }
    }
  }
}

```

### Add A book to the database

```js

mutation ($name: String!, $genre: String!, $authorId: ID!) {
  addBook(name: $name, genre: $genre, authorId: $authorId) {
    name
  }
}

```

### Get all the authors

```js

query {
  Authors {
    id
    name
    age
  }
}

```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

```

```

```

```
