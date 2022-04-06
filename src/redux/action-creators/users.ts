import axios from 'axios'
import { Dispatch } from 'redux'
import { UsersAction, UsersActionTypes } from '../types/users'

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UsersAction>) => {
    try {
      dispatch({ type: UsersActionTypes.FETCH_USERS })
      const response = await axios.get(
        'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D'
      )
      dispatch({
        type: UsersActionTypes.FETCH_USERS_SUCCESS,
        payload: response.data,
      })
    } catch (err) {
      dispatch({
        type: UsersActionTypes.FETCH_USERS_ERROR,
        payload: 'Ошибка при загрузке пользователей',
      })
    }
  }
}
