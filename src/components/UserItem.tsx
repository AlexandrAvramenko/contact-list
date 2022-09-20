import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useActions } from '../hooks/useActions';
import { IUser } from '../types/userTypes'

interface UserItemProps {
    user: IUser
}

const UserItem: React.FC<UserItemProps> = ({user}) => {
    const { removeUser } = useActions()

    const handlerRemoveUser = (id: number) => {
        removeUser(id)
    }

  return (
    <Card.Body key={user.id} className='d-flex justify-content-between align-items-center'>
        <div>
            <Card.Title>
                <Link to={`/users/${user.id}`}>{user.first_name} {user.last_name}</Link>
            </Card.Title>
            <Card.Subtitle className="mb-1 text-muted">{user.birth_date}</Card.Subtitle>
            <Card.Subtitle>{user.gender}</Card.Subtitle>
        </div>
        <Button onClick={() => handlerRemoveUser(user.id)} variant="danger">Remove</Button>
    </Card.Body>
    );
}

export default UserItem;
