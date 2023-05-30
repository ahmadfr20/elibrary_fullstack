import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container">
      <h1>Welcome to the Library Management System</h1>
      <p>This is a simple library management system built with React and Express.</p>
      <p>Choose an option below:</p>
      <div className="row">
        <div className="col">
          <Link to="/books" className="btn btn-primary">
            Manage Books
          </Link>
        </div>
        <div className="col">
          <Link to="/loans" className="btn btn-primary">
            Manage Loans
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
