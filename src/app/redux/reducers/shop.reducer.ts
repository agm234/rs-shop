import { Action, createReducer, on } from '@ngrx/store';

import {
  fetchCategories, fetchCategoriesItems, fetchItem, fetchPopularItems, fetchSubCategoriesItems, getCards,
} from '../actions';
import { ICardsState, ICategoriesItems } from '../state.models';

export const initialState: ICardsState = {
  categories: [],
  categoriesItems:[],
  popularItems:[],
  item:[],
};

const reducer = createReducer(initialState,
  on(getCards, (state) => ({ ...state })),
  on(fetchCategories, (state, action) => ({ ...state, categories: action.payload })),
  on(fetchCategoriesItems, (state, action) => ({ ...state, categoriesItems:action.payload })),
  on(fetchSubCategoriesItems, (state, action) => ({ ...state, categoriesItems:action.payload })),
  on(fetchPopularItems, (state, action) => ({ ...state, popularItems:action.payload })),
  on(fetchItem, (state, action) => ({ ...state, item: new Array(action.payload) })),
);

export function cardsReducer(state: ICardsState | undefined, action: Action) {
  return reducer(state, action);
}
