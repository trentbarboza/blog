import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AccountPage from './Pages/AccountPage';
import BlogPage from './Pages/BlogPage';
import Dashboard from './Pages/Dashboard';
import LoginPage from './Pages/LoginPage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import BlogPage1 from './Pages/BlogPageExample';

function App() {
  return (
    <BrowserRouter>
      <Nav defaultActiveKey="/" as="ul">
        <Nav.Item as="li">
          <Nav.Link as={Link} to="/">Blog</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link as={Link} to='Dashboard'>Dashboard</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link as={Link} to='Account'>Account</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link as={Link} to='Login'>Login</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link as={Link} to='BlogPage1'>BlogPageExample</Nav.Link>
        </Nav.Item>
      </Nav>

      <Routes>
        <Route path='/' element={<BlogPage />} />
        <Route path='Account' element={<AccountPage />} />
        <Route path='Dashboard' element={<Dashboard />} />
        <Route path='Login' element={<LoginPage />} />
        <Route path='BlogPage1' element={<BlogPage1 />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
