import { createReducer, on } from "@ngrx/store";
import { HerosActions, HerosState } from ".";

export const herosReducer = createReducer(
  HerosState.initialHerosState,
  on(HerosActions.loadHerosSuccess, (state, action) => {
    let stateCopy = JSON.parse(JSON.stringify(state));
    stateCopy = [...stateCopy, ...action.data.heros];
    return stateCopy;
  }),
  on(HerosActions.resetHerosList, (state, action) => {
    return [];
  })
)
