export const bookMutation = `
mutation ($name: String!, $genre: String!, $authorId: ID!) {
  addBook(name: $name, genre: $genre, authorId: $authorId) {
    name
  }
}
`;
