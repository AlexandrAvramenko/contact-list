import { UserState, UserActionTypes, UserAction, IUser } from '../types/userTypes'

const userDefaultValue: IUser = {
    id: NaN,
    first_name: "",
    last_name: "",
    birth_date: new Date().toLocaleDateString('en-CA'),
    biography: "",
    gender: "",
    job: "",
    is_active: false,
}

const initialState: UserState = {
    users: [],
    error: null,
    user: userDefaultValue,
}

const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.GET_USERS:
            return {
                ...state, users: action.payload
            };
        case UserActionTypes.ERROR_USERS:
            return {
                ...state, error: action.payload
            };
        case UserActionTypes.GET_USER:
            return {
                ...state, user: action.payload
            };
        case UserActionTypes.REMOVE_USER:
            return {
                ...state, users: state.users.filter(user => user.id !== action.payload)
            }
        case UserActionTypes.UPDATE_USER:
            return {
                ...state, user: action.payload
            }
        default:
            return state
    }
}

export default userReducer;