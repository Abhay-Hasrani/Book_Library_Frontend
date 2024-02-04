import { Button, Modal } from "react-bootstrap";
import "./AddBookModal.css";
const AddBookModal = (props) => {
  return (
    <Modal
      show={props.showAddBookModal}
      onHide={props.toggleAddBookModal}
      backdrop="static"
      centered
    >
      <Modal.Body>
        <form class="form">
          <span class="signup">Add a Book</span>
          <input type="text" placeholder="Title" class="form--input" />
          <input type="text" placeholder="Author" class="form--input" />
          <input type="date" placeholder="Launched" class="form--input" />
          <input
            type="number"
            placeholder="Rating"
            class="form--input"
            min="1"
            max="5"
          />
          <input type="url" placeholder="Book Cover Url" class="form--input" />

          <textarea
            type="largetext"
            placeholder="Description"
            class="form--input input--textarea"
          ></textarea>

          <div className="button-box">
            <Button
              variant="secondary me-3 w-50"
              onClick={props.toggleAddBookModal}
            >
              Cancel
            </Button>
            <button class="form--submit">Add Book</button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddBookModal;
