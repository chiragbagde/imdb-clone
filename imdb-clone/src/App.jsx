import React from "react";

import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

import { BrowserRouter as Router,
          Routes, Route, Link } from "react-router-dom";

import CreateMovie from "./Components/Movies/Create.component";
import EditMovie from "./Components/Movies/Edit.component";
import MovieList from "./Components/Movies/List.component";
import Actors from "./Components/Actors/Actors";
import Producers from "./Components/Producers/Producers";
import ActorForm from "./Components/Actors/Form";
import ProducerForm from "./Components/Producers/Form";
import MainPage from "./Components/MainPage";

const App = () => {
  
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/"}>
                  IMDB  Ranking
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-movie"}
                   className="nav-link" >
                    Create Movie
                  </Link>
                </Nav>

              <Nav>
                <Link to={"/movie-list"}
                  className="nav-link">
                Movie List
                </Link>
                <Link to={"/actors"}
                  className="nav-link">
                Actors
                </Link>
                <Link to={"/producers"}
                  className="nav-link">
                Producers
                </Link>
              </Nav>
            </Nav>
            </Container>
          </Navbar>
        </header>

          <Container>
              <Row>
                <Col md={12}>
                  <Routes>
                    <Route exact path="/" 
                      element={<MainPage />} />
                    <Route path="/create-movie" 
                      element={<CreateMovie />} />
                    <Route path="/edit-movie/:id" 
                     element={<EditMovie />} />
                    <Route path="/movie-list" 
                     element={<MovieList />} />
                      <Route path="/actors" 
                     element={<Actors />} />
                      <Route path="/edit-actor/:id" 
                     element={<ActorForm />} />
                     <Route path="/producers" 
                     element={<Producers />} />
                      <Route path="/edit-producer/:id" 
                     element={<ProducerForm />} />
                  </Routes>
                </Col>
              </Row>
          </Container>
      </div>
    </Router>
  );
};

export default App;