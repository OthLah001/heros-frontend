import { createFeatureSelector, createSelector } from "@ngrx/store";
import { HeroListType } from "../heros.models";


export const initialHerosState: HeroListType = [];

const selectAuthState = createFeatureSelector<HeroListType>("heros");

export const herosSelector = createSelector(selectAuthState, (state) => state);
