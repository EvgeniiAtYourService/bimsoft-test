interface IUser {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
}

export interface IUsersState {
  users: IUser[]
  isFetching: boolean
  error: null | string
  fetched: boolean
  selectedUsers: number[]
}

export enum UsersActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
  SORT_USERS = 'SORT_USERS',
  SELECT_USER = 'SELECT_USER',
  DELETE_USER = 'DELETE_USER',
}

interface fetchUsersAction {
  type: UsersActionTypes.FETCH_USERS
}

interface fetchUsersSuccessAction {
  type: UsersActionTypes.FETCH_USERS_SUCCESS
  payload: IUser[]
}

interface fetchUsersErrorAction {
  type: UsersActionTypes.FETCH_USERS_ERROR
  payload: string
}

interface sortUsersAction {
  type: UsersActionTypes.SORT_USERS
}

interface selectUserAction {
  type: UsersActionTypes.SELECT_USER
  payload: number
}

interface deleteUserAction {
  type: UsersActionTypes.DELETE_USER
}

export type UsersAction =
  | fetchUsersAction
  | fetchUsersSuccessAction
  | fetchUsersErrorAction
  | sortUsersAction
  | selectUserAction
  | deleteUserAction
