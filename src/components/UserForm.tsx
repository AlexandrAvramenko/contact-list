import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAppSelector } from '../hooks/hooks'
import { IUser, UserState, PageParams } from '../types/userTypes'
import {useActions} from '../hooks/useActions';


const UserForm = () => {
    let params = useParams<PageParams>();
    let navigate = useNavigate()
    const id = Number(params.id)
    const { user, error } = useAppSelector((state: UserState) => state)
    const { updateUser, createUser } = useActions()
    const [validated, setValidated] = useState<boolean>(false);
    const [currentUser, setCurrentUser] = useState<IUser>(user)

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            id ? updateUser(currentUser) : createUser(currentUser)
            typeof error !== 'string' && navigate(id ? `../users/${id}/` : `../users/`)
        }
        setValidated(true);
    };

    const handlerDatePicker =(data: Date) => {
        setCurrentUser({...currentUser, birth_date: data.toLocaleDateString('en-CA')})
    }

    if (error) {
        return <h4 className='text-center py-4'>{error}</h4>
    }

    return (
        <Form noValidate validated={validated} onSubmit={onSubmit} className='p-4 p-sm-4 p-md-4 px-lg-5 py-lg-4'>
            <Row className="row-cols-md-2">
                <Form.Group className="mb-4 container">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        type="text"
                        value={currentUser.first_name}
                        onChange={(e)=> setCurrentUser({...currentUser, first_name: e.target.value})}
                        placeholder="First name"
                        maxLength={256}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        type="text"
                        value={currentUser.last_name}
                        onChange={(e)=> setCurrentUser({...currentUser, last_name: e.target.value})}
                        placeholder="Last name"
                        maxLength={256}
                        required
                    />
                </Form.Group>
            </Row>
            <Row className="row-cols-md-3">
                <Form.Group className="mb-4">
                <Form.Label>Birth date</Form.Label>
                <DatePicker
                        className='form-control'
                        dateFormat="yyyy/MM/dd"
                        selected= {new Date(currentUser.birth_date)}
                        onChange={handlerDatePicker}
                        placeholderText="Birth date"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label>Gender</Form.Label>
                    <Form.Select
                        value={currentUser.gender}
                        onChange={(e) => setCurrentUser({...currentUser, gender: e.target.value})}
                        required>
                        <option value="" hidden>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label>Job</Form.Label>
                    <Form.Control
                        type="text"
                        value={currentUser.job}
                        onChange={(e)=> setCurrentUser({...currentUser, job: e.target.value})}
                        placeholder="job"
                        maxLength={256}
                        required/>
                </Form.Group>
            </Row>
            <Form.Group className="mb-4">
                <Form.Label>Biography</Form.Label>
                <FloatingLabel controlId="floatingTextarea" label="Biography...">
                    <Form.Control
                        as="textarea"
                        value={currentUser.biography}
                        onChange={(e)=> setCurrentUser({...currentUser, biography: e.target.value})}
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                        maxLength={1024}
                        required
                    />
                </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formCheckbox">
                <Form.Check
                    type="checkbox"
                    label="User status active or not"
                    checked={currentUser.is_active}
                    onChange={(e)=> setCurrentUser({...currentUser, is_active: e.currentTarget.checked})}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default UserForm