export interface IUser {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
}

export interface IModal {
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
  editModal: IModal
  addModal: IModal
  searchField: string
}

export enum UsersActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
  SORT_USERS = 'SORT_USERS',
  SELECT_USER = 'SELECT_USER',
  DELETE_USER = 'DELETE_USER',
  // EDIT MODAL
  SET_EDIT_MODAL = 'SET_EDIT_MODAL',
  CHANGE_FIRST_NAME = 'CHANGE_FIRST_NAME',
  CHANGE_LAST_NAME = 'CHANGE_LAST_NAME',
  CHANGE_EMAIL = 'CHANGE_EMAIL',
  CHANGE_PHONE = 'CHANGE_PHONE',
  EDIT_USER = 'EDIT_USER',
  // -- EDIT MODAL
  // ADD MODAL
  ADD_FIRST_NAME = 'ADD_FIRST_NAME',
  ADD_LAST_NAME = 'ADD_LAST_NAME',
  ADD_EMAIL = 'ADD_EMAIL',
  ADD_PHONE = 'ADD_PHONE',
  ADD_USER = 'ADD_USER',
  // -- ADD MODAL
  CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FILED',
  SEARCH_USER = 'SEARCH_USER',
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
// EDIT MODAL
interface setEditModalAction {
  type: UsersActionTypes.SET_EDIT_MODAL
}
interface changeFirstNameAction {
  type: UsersActionTypes.CHANGE_FIRST_NAME
  payload: string
}
interface changeLastNameAction {
  type: UsersActionTypes.CHANGE_LAST_NAME
  payload: string
}
interface changeEmailAction {
  type: UsersActionTypes.CHANGE_EMAIL
  payload: string
}
interface changePhoneAction {
  type: UsersActionTypes.CHANGE_PHONE
  payload: string
}
interface editUser {
  type: UsersActionTypes.EDIT_USER
}
// -- EDIT MODAL
// ADD MODAL
interface addFirstName {
  type: UsersActionTypes.ADD_FIRST_NAME
  payload: string
}
interface addLastName {
  type: UsersActionTypes.ADD_LAST_NAME
  payload: string
}
interface addEmail {
  type: UsersActionTypes.ADD_EMAIL
  payload: string
}
interface addPhone {
  type: UsersActionTypes.ADD_PHONE
  payload: string
}
interface addUser {
  type: UsersActionTypes.ADD_USER
}
// -- ADD MODAL
interface changeSearchField {
  type: UsersActionTypes.CHANGE_SEARCH_FIELD
  payload: string
}
interface searchUser {
  type: UsersActionTypes.SEARCH_USER
}

export type UsersAction =
  | fetchUsersAction
  | fetchUsersSuccessAction
  | fetchUsersErrorAction
  | sortUsersAction
  | selectUserAction
  | deleteUserAction
  // EDIT MODAL
  | setEditModalAction
  | changeFirstNameAction
  | changeLastNameAction
  | changeEmailAction
  | changePhoneAction
  | editUser
  // -- EDIT MODAL
  // ADD MODAL
  | addFirstName
  | addLastName
  | addEmail
  | addPhone
  | addUser
  // -- ADD MODAL
  | changeSearchField
  | searchUser
