import React, { useState, useEffect } from "react";
import BookDataService from "../services/BookService";

const Book = props => {
  
    const initialBookState = {
        id: null,
        judul: "",
        penulis: "",
        penerbit: "",
        tanggal_rilis: "",
    };
  const [currentBook, setCurrentBook] = useState(initialBookState);
  const [message, setMessage] = useState("");

  const getBook = id => {
    BookDataService.get(id)
      .then(response => {
        setCurrentBook(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getBook(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentBook({ ...currentBook, [name]: value });
  };



  const updateBook = () => {
    BookDataService.update(currentBook.id, currentBook)
      .then(response => {
        console.log(response.data);
        setMessage("The Book was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteBook = () => {
    BookDataService.remove(currentBook.id)
      .then(response => {
        console.log(response.data);
        props.history.push("/books");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentBook ? (
        <div className="edit-form">
          <h4>Book</h4>
          <form>
            <div className="form-group">
              <label htmlFor="judul">judul</label>
              <input
                type="text"
                className="form-control"
                id="judul"
                name="judul"
                value={currentBook.judul}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="penulis">penulis</label>
              <input
                type="text"
                className="form-control"
                id="penulis"
                name="penulis"
                value={currentBook.penulis}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="penerbit">penerbit</label>
              <input
                type="text"
                className="form-control"
                id="penerbit"
                name="penerbit"
                value={currentBook.penerbit}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="tanggal_rilis">tanggal_rilis</label>
              <input
                type="date"
                className="form-control"
                id="tanggal_rilis"
                name="tanggal_rilis"
                value={currentBook.tanggal_rilis}
                onChange={handleInputChange}
              />
            </div>

          </form>


          <button className="badge badge-danger mr-2" onClick={deleteBook}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateBook}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Book...</p>
        </div>
      )}
    </div>
  );
};

export default Book;
