import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import UserList from '../components/UserList'

const Users: React.FC = () => {

  return (
    <Container>
        <Card>
            <Card.Header className='d-flex justify-content-between align-items-center'>All users
                <Link className="btn btn-primary" to={`/users/create`} >Add new user</Link>
            </Card.Header>
            <UserList />
        </Card>
        <ToastContainer position="top-center" autoClose={1000}/>
    </Container>
    );
}

export default Users;
