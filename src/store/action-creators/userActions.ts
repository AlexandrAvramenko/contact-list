import { UserActionTypes, UserAction } from '../../types/userTypes'
import { Dispatch } from 'redux'
import { toast } from 'react-toastify';
import axios from 'axios';
import { IUser } from '../../types/userTypes'

export const getUsers = () => async (dispatch: Dispatch<UserAction>) => {
    try{
        const response = await axios.get(`https://frontend-candidate.dev.sdh.com.ua/v1/contact/`)
        dispatch({type: UserActionTypes.GET_USERS, payload: response.data})
    } catch(e) {
        dispatch({type: UserActionTypes.ERROR_USERS, payload: 'An error occurred while loading users'})

    }
}

export const getUser = (id: number) => async (dispatch: Dispatch<UserAction>) => {
    try {
        const response = await axios.get(`https://frontend-candidate.dev.sdh.com.ua/v1/contact/${id}/`)
        dispatch({type: UserActionTypes.GET_USER, payload: response.data})
    } catch(e) {
        dispatch({type: UserActionTypes.ERROR_USERS, payload: 'An error occurred while loading user'})
    }
}

export const removeUser = (id: number) => async (dispatch: Dispatch<UserAction>) => {
    try {
        await axios.delete(`https://frontend-candidate.dev.sdh.com.ua/v1/contact/${id}/`)
        dispatch({type: UserActionTypes.REMOVE_USER, payload: id})
        toast.error('User was deleted');

    } catch(e) {
        dispatch({type: UserActionTypes.ERROR_USERS, payload: 'An error occurred while delete user'})
    }
}

export const createUser = (user: IUser) => async (dispatch: Dispatch<UserAction>) => {
    try {
        await axios.post(`https://frontend-candidate.dev.sdh.com.ua/v1/contact/`, user)
        toast.success('User was created');
    } catch(e) {
        dispatch({type: UserActionTypes.ERROR_USERS, payload: 'An error occurred while create user'})
    }
}

export const updateUser = (user: IUser) => async (dispatch: Dispatch<UserAction>) => {
        try {
            const response = await axios.put(`https://frontend-candidate.dev.sdh.com.ua/v1/contact/${user.id}/`, user)
            dispatch({type: UserActionTypes.UPDATE_USER, payload: response.data})
        } catch(e) {
            dispatch({type: UserActionTypes.ERROR_USERS, payload: 'An error occurred while update user'})
        }
}
