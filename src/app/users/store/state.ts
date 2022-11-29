import { AuthUserType } from "../models";
import { createFeatureSelector, createSelector } from "@ngrx/store";


export interface IUserState {
  login: boolean;
  user: AuthUserType | null;
}

export const initialUserState: IUserState = {
  login: false,
  user: null
}


const selectAuthState = createFeatureSelector<IUserState>("user");

export const isLoggedIn = createSelector(selectAuthState, (state) => state.login);

export const userFullName = createSelector(selectAuthState, (state) => `${state.user?.firstName} ${state.user?.lastName}`);

export const userId = createSelector(selectAuthState, (state) => state.user?.id || -1);
