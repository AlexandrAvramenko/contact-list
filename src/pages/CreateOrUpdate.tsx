import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PageParams } from '../types/userTypes'
import UserForm from '../components/UserForm';


const UpdateUser: React.FC = () => {
    let params = useParams<PageParams>();
    const id = Number(params.id)

    return (
        <Container>
            <Card>
                <Card.Header>{id ? "User update" : "Add a new user"}</Card.Header>
                <UserForm/>
            </Card>
            <ToastContainer position="top-center" autoClose={1000}/>
        </Container>
    );
  }

  export default UpdateUser;