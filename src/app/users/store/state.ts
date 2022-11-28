import { AuthUserType } from "../models";
import { createFeatureSelector, createSelector } from "@ngrx/store";


export interface IAccountState {
  login: boolean;
  user: AuthUserType | null;
}

export const initialAccountState: IAccountState = {
  login: false,
  user: null
}


const selectAuthState = createFeatureSelector<IAccountState>("accounts");

export const isLoggedIn = createSelector(selectAuthState, (state) => state.login);

export const userFullName = createSelector(selectAuthState, (state) => `${state.user?.firstName} ${state.user?.lastName}`);
