import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "./App.css";

import AddBooks from "./components/AddBooks";
import Book from "./components/Book";
import BooksList from "./components/BooksList";
import UpdateBook from "./components/UpdateBook";
import LoansList from "./components/LoansList";
import LoanUpdatePage from "./components/LoanUpdatePage";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/books" className="navbar-brand">
          Test
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/homepage"} className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/books"} className="nav-link">
              Books
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/Loans"} className="nav-link">
              Loans
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/books"]} component={BooksList} />
          <Route exact path= "/loans" component={LoansList} />
          <Route exact path="/books/update/:id" component={UpdateBook} />
          <Route exact path="/loans/update/:id" component={LoanUpdatePage} />
          <Route exact path="/add" component={AddBooks} />
          <Route path="/books/:id" component={Book} />
          <Route path="/homepage" component={Homepage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
