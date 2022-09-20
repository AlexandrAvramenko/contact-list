import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { IUser } from '../types/userTypes'
import { useActions } from '../hooks/useActions';


interface UserProfileProps {
    user: IUser
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
    let navigate = useNavigate()
    const { removeUser } = useActions()

    const handlerRemoveUser = (id: number) => {
        removeUser(id)
        navigate('../profile')
    }

  return (
    <Card.Body className='d-flex justify-content-between align-items-center'>
        <div className='p-4'>
            <dl className="row">
                <dt className="col-sm-3">1.First name:</dt>
                <dd className="col-sm-9">{user.first_name}</dd>
                <dt className="col-sm-3">2.Last name:</dt>
                <dd className="col-sm-9">{user.last_name}</dd>
                <dt className="col-sm-3">3.Birth date:</dt>
                <dd className="col-sm-9">{user.birth_date}</dd>
                <dt className="col-sm-3">4.Gender:</dt>
                <dd className="col-sm-9">{user.gender}</dd>
                <dt className="col-sm-3">5.Job:</dt>
                <dd className="col-sm-9">{user.job}</dd>
                <dt className="col-sm-3">6.Biography:</dt>
                <dd className="col-sm-9">{user.biography}</dd>
                <dt className="col-sm-3">7.User status:</dt>
                <dd className="col-sm-9">{user.is_active ? 'active' : 'not active'}</dd>
            </dl>
            <div>
                <Link className="btn btn-primary" to={`/users/${user.id}/update`} style={{marginRight: '.5rem'}}>Edit</Link>
                <Button variant="danger" onClick={() => handlerRemoveUser(user.id)}>Remove</Button>
            </div>
        </div>
    </Card.Body>
    );
}

export default UserProfile;
