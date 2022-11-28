import { UserState, UserActions } from ".";
import { createReducer, on } from "@ngrx/store";


export const authReducer = createReducer(
  UserState.initialAccountState,
  on(UserActions.updateAccountsStore, (state, action) => {
    const stateCopy = JSON.parse(JSON.stringify(state));
    stateCopy.login = action.data.login;
    stateCopy.user = action.data.user;
    return stateCopy;
  }),
  on(UserActions.logout, (state, action) => {
    const stateCopy = JSON.parse(JSON.stringify(state));
    stateCopy.isAuth = false;
    stateCopy.user = null;
    return stateCopy;
  })
);
