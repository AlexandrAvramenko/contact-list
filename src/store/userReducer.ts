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
                users: action.payload, error: null, user: userDefaultValue
            };
        case UserActionTypes.ERROR_USERS:
            return {
                users: [], error: action.payload, user: userDefaultValue
            };
        case UserActionTypes.GET_USER:
            return {
                users: [], error: null, user: action.payload
            };
        case UserActionTypes.REMOVE_USER:
            return {
                users: state.users.filter(user => user.id !== action.payload), error: null, user: userDefaultValue
            }
        case UserActionTypes.UPDATE_USER:
            return {
                users: [], error: null, user: action.payload
            }
        default:
            return state
    }
}

export default userReducer;