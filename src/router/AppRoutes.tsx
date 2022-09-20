import { Routes, Route, Navigate } from 'react-router-dom';
import Users from '../pages/Users'
import Profile from '../pages/Profile'
import CreateOrUpdate from '../pages/CreateOrUpdate'



const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="users" element={<Users />} />
            <Route path="users/:id" element={<Profile />} />
            <Route path="users/create" element={<CreateOrUpdate />} />
            <Route path="users/:id/update" element={<CreateOrUpdate />} />
            <Route path="*" element={<Navigate to="/users" />} />
        </Routes>
    );
}

export default AppRoutes;