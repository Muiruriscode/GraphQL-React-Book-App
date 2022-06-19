const authorMutation = `
mutation ($name: String!, $age: Int!) {
  addAuthor(name: $name, age: $age) {
    name
  }
}
`

export default authorMutation
