import { useAppDispatch } from './hooks'
import { bindActionCreators } from 'redux';
import ActionCreators from '../store/action-creators/'

export const useActions = () => {
    const dispatch = useAppDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}