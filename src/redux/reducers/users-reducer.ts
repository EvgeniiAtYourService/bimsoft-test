import { IUsersState, UsersAction, UsersActionTypes } from '../types/users'

const initialState: IUsersState = {
  users: [],
  isFetching: false,
  error: null,
  fetched: false,
  selectedUsers: [],
}

const usersReducer = (
  state = initialState,
  action: UsersAction
): IUsersState => {
  let copyState = { ...state }
  switch (action.type) {
    case UsersActionTypes.FETCH_USERS:
      return {
        ...state,
        isFetching: true,
        error: null,
        users: [],
        fetched: false,
      }
    case UsersActionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        users: action.payload,
        fetched: true,
      }
    case UsersActionTypes.FETCH_USERS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
        users: [],
        fetched: false,
      }
    case UsersActionTypes.SORT_USERS:
      copyState.users.sort(function (a, b) {
        var nameA = a.firstName.toLowerCase(),
          nameB = b.firstName.toLowerCase()
        if (nameA < nameB) return -1
        if (nameA > nameB) return 1
        return 0
      })
      return copyState
    case UsersActionTypes.SELECT_USER:
      return {
        ...state,
        selectedUsers: state.selectedUsers.includes(action.payload)
          ? state.selectedUsers.filter((userId) => userId !== action.payload)
          : [...state.selectedUsers, action.payload],
      }
    case UsersActionTypes.DELETE_USER:
      const confirm = window.confirm(
        'Вы действительно хотите удалить выбранных пользователей?'
      )
      if (confirm) {
        return {
          ...state,
          users: state.users.filter(
            (user) => !new Set(state.selectedUsers).has(user.id)
          ),
          selectedUsers: [],
        }
      } else {
        return state
      }
    default:
      return state
  }
}

export default usersReducer
