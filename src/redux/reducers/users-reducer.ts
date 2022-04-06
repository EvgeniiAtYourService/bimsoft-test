import { IUsersState, UsersAction, UsersActionTypes } from '../types/users'

const initialState: IUsersState = {
  users: [],
  isFetching: false,
  error: null,
}

const usersReducer = (
  state = initialState,
  action: UsersAction
): IUsersState => {
  switch (action.type) {
    case UsersActionTypes.FETCH_USERS:
      return {
        isFetching: true,
        error: null,
        users: [],
      }
    case UsersActionTypes.FETCH_USERS_SUCCESS:
      return {
        isFetching: false,
        error: null,
        users: action.payload,
      }
    case UsersActionTypes.FETCH_USERS_ERROR:
      return {
        isFetching: false,
        error: action.payload,
        users: [],
      }
    default:
      return state
  }
}

export const changeTaskTextAC = (text: string, taskIndex: string) => ({
  type: '123',
  text: text,
  taskIndex: taskIndex,
})

export default usersReducer
