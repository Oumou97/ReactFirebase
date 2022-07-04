import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './components/Login';
import { Col, Container, Row } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route 
                path='/home' 
                element={
                  <ProtectedRoute>
                    <Home /> 
                  </ProtectedRoute>
                } 
              />
              <Route path='/' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
