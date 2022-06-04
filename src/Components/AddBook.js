import { gql, useQuery } from "@apollo/client";
import { addAuthor } from "../Queries";
import ErrorComponent from "./Error";
import Loading from "./Loading";

const addAuthorQuery = gql`
  ${addAuthor}
`;

const AddBook = () => {
  const { error, loading, data } = useQuery(addAuthorQuery);
  if (loading) {
    return <Loading info={"author"} />;
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }

  const { Authors } = data;

  const displayAuthors = () => {
    return Authors.map((item) => {
      return (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      );
    });
  };

  return (
    <div>
      <form id="detailsForm">
        <div>
          <label>Book Name:</label>
          <input type="text" className="formElement"></input>
        </div>
        <div>
          <label>Genre:</label>
          <input type="text" className="formElement"></input>
        </div>
        <div>
          <label>Author:</label>
          <select type="text" className="formElement">
            <option>Select Author</option>;{displayAuthors()}
          </select>
        </div>
        <button>Add book</button>
      </form>
    </div>
  );
};

export default AddBook;
