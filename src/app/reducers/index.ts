import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { HerosReducers } from '../heros/store';
import { UserReducers } from '../users/store';

export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {
  'user': UserReducers.userReducer,
  'heros': HerosReducers.herosReducer
};


export const metaReducers: MetaReducer<AppState>[] =!environment.production ? [] : [];
