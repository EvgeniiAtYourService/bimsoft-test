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
      //   const response = await axios.get(
      //     'http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D'
      //   )
      dispatch({
        type: UsersActionTypes.FETCH_USERS_SUCCESS,
        payload: response.data,
      })
      console.log(response)
    } catch (err) {
      dispatch({
        type: UsersActionTypes.FETCH_USERS_ERROR,
        payload: 'Ошибка при загрузке пользователей',
      })
      console.log(err)
    }
  }
}

export const sortUsers = (): UsersAction => ({
  type: UsersActionTypes.SORT_USERS,
})

export const selectUser = (userId: number): UsersAction => ({
  type: UsersActionTypes.SELECT_USER,
  payload: userId,
})

export const deleteUser = (): UsersAction => ({
  type: UsersActionTypes.DELETE_USER,
})
