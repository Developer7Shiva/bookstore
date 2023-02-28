import { Component } from "react";
import React, { useEffect, useState } from "react";
import ProductService from "../../../Services/ProductService"

function AddBookComponent() {

    const initialState = {
        bookName: "",
        bookIsbn: "",
        bookAuthorName: "",
        bookCategory: "",
        bookPrice: "",
        bookQuantity: "",
        bookpubYear: ""
    };

    //define state for Book using useState Hook
    const [book, setBook] = useState(initialState);

    function handleChange(event) {
        setBook({ ...book, [event.target.name]: event.target.value })
    }
    function handleSubmit(event) {
            event.preventDetault();
            console.log(event.target.value);
    }

    return (
        <div>
            <br /><br />
            <div className="container" style={{ maxWidth: "400px", marginLeft: "550px", alignItems:"center" }}>
                <br /><br />
                <div className="row">
                    <br /><br />
                    <div className="form-group">
                        <form>
                            <div className="form-group">
                                <h3 className="text-center">Add Books</h3><br />
                                <label className="form-label" >Book Name</label>
                                <input type="text"
                                    name="bookName"
                                    className="form-control"
                                    value={book.bookName}
                                    onChange={handleChange}
                                    required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Book ISBN</label>
                                <input type="text"
                                    name="bookIsbn"
                                    className="form-control"
                                    value={book.bookIsbn}
                                    onChange={handleChange}
                                    required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Book Price</label>
                                <input type="text"
                                    name="bookPrice"
                                    className="form-control"
                                    value={book.bookPrice}
                                    onChange={handleChange}
                                    required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Book Category</label>
                                <input type="text"
                                    name="bookCategory"
                                    className="form-control"
                                    value={book.bookCategory}
                                    onChange={handleChange}
                                    required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Book Quantity</label>
                                <input type="text"
                                    name="bookQuantity"
                                    className="form-control"
                                    value={book.bookQuantity}
                                    onChange={handleChange}
                                    required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Book Author name</label>
                                <input type="text"
                                    name="bookAuthorName"
                                    className="form-control"
                                    value={book.bookAuthorName}
                                    onChange={handleChange}
                                    required />
                            </div>
                            {/* <div className="form-group">
                                <label className="form-label">Book published year</label>
                                <input type="text"
                                    name="bookPubYear"
                                    className="form-control"
                                    value={book.bookpubYear}
                                    onChange={handleChange}
                                    required />
                            </div> */}
                            <div className="btn-group mt-3 ">
                                <button onSubmit={handleSubmit}
                                    className="btn btn-primary">Submit</button> 
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    style={{ marginLeft: "130px", textColor: "white"}}>
                                        <a href='/products'>

                                    Cancel
                                        </a>
                                </button>

                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default AddBookComponent;