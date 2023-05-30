import React, { useState } from "react";
import BookDataService from "../services/BookService";

const AddBooks = () => {
    const initialBookState = {
      id: null,
      judul: "",
      penulis: "",
      penerbit: "",
      tanggal_rilis: "",
    };
    const [book, setBook] = useState(initialBookState);
    const [submitted, setSubmitted] = useState(false);
  
    const handleInputChange = event => {
      const { name, value } = event.target;
      setBook({ ...book, [name]: value });
    };
  
    const saveBook = () => {
      var data = {
        judul: book.judul,
        penulis: book.penulis,
        penerbit: book.penerbit,
        tanggal_rilis: book.tanggal_rilis
      };
  
      BookDataService.create(data)
        .then(response => {
          setBook({
            id: response.data.id,
            judul: response.data.judul,
            penulis: response.data.penulis,
            penerbit: response.data.penerbit,
            tanggal_rilis: response.data.tanggal_rilis
          });
          setSubmitted(true);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    };
  
    const newBook = () => {
      setBook(initialBookState);
      setSubmitted(true);
    };
  
    return (
      <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={newBook}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="judul">Judul</label>
              <input
                type="text"
                className="form-control"
                id="judul"
                required
                value={book.judul}
                onChange={handleInputChange}
                name="judul"
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="penulis">penulis</label>
              <input
                type="text"
                className="form-control"
                id="penulis"
                required
                value={book.penulis}
                onChange={handleInputChange}
                name="penulis"
              />
            </div>

            <div className="form-group">
              <label htmlFor="penerbit">penerbit</label>
              <input
                type="text"
                className="form-control"
                id="penerbit"
                required
                value={book.penerbit}
                onChange={handleInputChange}
                name="penerbit"
              />
            </div>

            <div className="form-group">
              <label htmlFor="tanggal_rilis">Tanggal Rilis</label>
              <input
                type="date"
                className="form-control"
                id="tanggal_rilis"
                required
                value={book.tanggal_rilis}
                onChange={handleInputChange}
                name="tanggal_rilis"
              />
            </div>
  
            <button onClick={saveBook} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  };

export default AddBooks