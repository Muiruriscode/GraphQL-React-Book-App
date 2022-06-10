import "./App.css";
import BookList from "./Components/BookList";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import AddBook from "./Components/AddBook";
import Nav from "./Components/Nav";

function App() {
  const client = new ApolloClient({
    uri: "/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <main className="App">
        <Nav />
        <BookList />
        <AddBook />
      </main>
    </ApolloProvider>
  );
}

export default App;
