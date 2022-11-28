import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { UserReducers } from '../users/store';

export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {
  'accounts': UserReducers.authReducer
};


export const metaReducers: MetaReducer<AppState>[] =!environment.production ? [] : [];
