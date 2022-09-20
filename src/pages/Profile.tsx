import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks'
import { PageParams, UserState } from '../types/userTypes'
import { useActions } from '../hooks/useActions';
import UserProfile from '../components/UserProfile';


const Profile: React.FC = () => {
    let params = useParams<PageParams>();
    const id = Number(params.id)
    const { user, error } = useAppSelector((state: UserState) => state)
    const { getUser } = useActions()

    useEffect(() => {
        getUser(id)
    },[])

    if (error) {
        return <h4 className='text-center py-4'>{error}</h4>
    }

    return (
        <Container>
            <Card>
                <Card.Header>User profile</Card.Header>
                <UserProfile user={user}/>
            </Card>
    </Container>
    );
  }

  export default Profile;