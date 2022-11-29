import { createAction, props } from "@ngrx/store";
import { HeroListType } from "../heros.models";

export const loadHeros = createAction(
  '[Heros] LOAD_HEROS',
  props<{ data: {page: number; search: string; orderBy: string;} }>()
);

export const loadHerosSuccess = createAction(
  '[Heros] LOAD_HEROS_SUCCESS',
  props<{ data: { heros: HeroListType } }>()
);

export const loadHerosFailed = createAction(
  '[Heros] LOAD_HEROS_FAILED'
);

export const resetHerosList = createAction(
  '[Heros] RESET_HEROS_LIST'
);
