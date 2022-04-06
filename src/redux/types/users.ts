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
}

export enum UsersActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
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

export type UsersAction =
  | fetchUsersAction
  | fetchUsersSuccessAction
  | fetchUsersErrorAction
