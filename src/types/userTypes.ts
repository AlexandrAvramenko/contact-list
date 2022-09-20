export interface IUser {
    id: number;
    first_name: string;
    last_name: string;
    birth_date: string;
    biography: string;
    gender: string;
    job: string;
    is_active: boolean;
}

export type PageParams = {
    id: string;
}

export interface UserState {
    users: any[];
    error: null | string;
    user: IUser;
}

export enum UserActionTypes {
    GET_USERS = 'GET_USERS',
    ERROR_USERS = 'ERROR_USERS',
    GET_USER = 'GET_USER',
    REMOVE_USER = 'REMOVE_USER',
    UPDATE_USER = 'UPDATE_USER'
}

interface getUsersAction {
    type: UserActionTypes.GET_USERS;
    payload: any[]
}

interface errorUsersAction {
    type: UserActionTypes.ERROR_USERS;
    payload: null | string
}

interface getUserAction {
    type: UserActionTypes.GET_USER;
    payload: IUser
}

interface removeUserAction {
    type: UserActionTypes.REMOVE_USER;
    payload: number
}

interface updateUserAction {
    type: UserActionTypes.UPDATE_USER;
    payload: IUser
}

export type UserAction = getUsersAction | errorUsersAction | getUserAction | removeUserAction | updateUserAction