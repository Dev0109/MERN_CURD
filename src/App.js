import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import CreateStudent from './components/create-student-component';
import EditStudent from './components/edit-student-component';
import StudentList from './components/student-list-component';

const App = () => {
  return (
    <div>
        <header>
          <Navbar bg='dark' variant='dark'>
            <Container>
              <Navbar.Brand>
                <Link to={'/create-student'} className='nav-link'>
                  React MERN Stack App
                </Link>
              </Navbar.Brand>
              <Nav className='justify-content-end'>
                <Nav>
                  <Link to={'/create-student'} className="nav-link">
                    Create Student
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/Edit-student'} className="nav-link">
                    Edit Student
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/student-list'} className="nav-link">
                    Student List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <Container>
          <Row>
            <Col md={12}>
              <div className='wrapper'>
                <Routes>
                  <Route exact path='/' element={<CreateStudent />} />
                  <Route path='/create-student' element={<CreateStudent />} />
                  <Route path='/edit-student' element={<EditStudent />} />
                  <Route path='student-list' element={<StudentList />} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;