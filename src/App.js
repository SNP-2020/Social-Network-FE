import React from 'react';
import './App.css';
import { Row, Col } from 'react-bootstrap'
import Profile from './components/Profile';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Row>
        <Col xs={{ span: 6, offset: 3 }} >
          <Profile />
        </Col>
      </Row>
    </div>
  );
}

export default App;
