import { createAction, props } from "@ngrx/store";
import { UserState } from ".";


export const updateAccountsStore = createAction(
  '[Accounts] UPDATE_STORE',
  props<{ data: UserState.IAccountState }>()
);

export const logout = createAction(
  '[Accounts] LOGOUT'
);
