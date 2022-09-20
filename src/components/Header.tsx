import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg" className='mb-3'>
        <Container>
            <Navbar.Brand href="/">Contact List</Navbar.Brand>
        </Container>
    </Navbar>
  )
}

export default Header
