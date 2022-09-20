import { useEffect } from 'react';
import { useAppSelector } from '../hooks/hooks'
import { IUser, UserState } from '../types/userTypes'
import { useActions } from '../hooks/useActions';
import UserItem from './UserItem'


const UserList: React.FC = () => {
    const { users, error } = useAppSelector((state: UserState) => state)
    const { getUsers } = useActions()

    useEffect(() => {
        getUsers()
    },[])

    if (error) {
        return <h4 className='text-center py-4'>{error}</h4>
    }

  return (
    <>
        {users.map((user: IUser) => (
            <UserItem key={user.id} user={user}/>
        ))}
    </>
    );
}

export default UserList;
