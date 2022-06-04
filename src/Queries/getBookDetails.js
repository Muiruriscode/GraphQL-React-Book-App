export const getBookDetails = `
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
`;
