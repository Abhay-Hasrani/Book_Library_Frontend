import { Button, Modal } from "react-bootstrap";
import "./AddBookModal.css";
import { useDispatch } from "react-redux";
import { postBook } from "../../../store/BooksReducer";
const AddBookModal = (props) => {
  const dispatch = useDispatch()

  const addBookFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const book = {};
    for (const [name, value] of formData.entries()) book[name] = value;
    try {

      if(!book.imageUrl) book.imageUrl = "http://bit.ly/2tMBBTd"
      dispatch(postBook(book))
      alert("Book Added Successfully")
      props.toggleAddBookModal()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal
      show={props.showAddBookModal}
      onHide={props.toggleAddBookModal}
      backdrop="static"
      centered
    >
      <Modal.Body>
        <form className="form" onSubmit={addBookFormSubmit}>
          <span className="signup">Add a Book</span>
          <input
            type="text"
            placeholder="Title"
            className="form--input"
            name="title"
            required
            defaultValue={"Harry Potter"}
          />
          <input
            type="text"
            placeholder="Author"
            className="form--input"
            name="author"
            required
            defaultValue={"J. K. Rowling"}
          />
          <input
            type="date"
            placeholder="Launched"
            className="form--input"
            name="launched"
            required
          />
          <input
            type="number"
            placeholder="Rating"
            className="form--input"
            min="1"
            max="5"
            name="rating"
            defaultValue={5}
            required
          />
          <input
            type="url"
            placeholder="Book Cover Url"
            className="form--input"
            name="imageUrl"
          />

          <textarea
            type="largetext"
            placeholder="Description"
            className="form--input input--textarea"
            name="description"
            defaultValue={"Journey to hogwarts."}
            required
          ></textarea>

          <div className="button-box">
            <Button
              variant="secondary me-3 w-50"
              onClick={props.toggleAddBookModal}
            >
              Cancel
            </Button>
            <button className="form--submit">Add Book</button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddBookModal;
