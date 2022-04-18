import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState, ICardsState } from '../state.models';

export const featureKey = 'categories';

export const selectCards = createFeatureSelector<AppState, ICardsState>(featureKey);
export const selectVideosState = createSelector(
  selectCards,
  (state: ICardsState) => [...state.categories],
);
export const selectVideosItemState = createSelector(
  selectCards,
  (state: ICardsState, props: { name: string }) => [...state.categories].find(({ name }) => name === props.name),
);
export const selectPopularItemsState = createSelector(
  selectCards,
  (state: ICardsState) => [...state.popularItems],
);
export const selectItemsState = createSelector(
  selectCards,
  (state: ICardsState) => [...state.categoriesItems],
);
export const selectItemState = createSelector(
  selectCards,
  (state: ICardsState) => [...state.item],
);
export const selectUserInfo = createSelector(
  selectCards,
  (state: ICardsState) => [...state.userInfo],
);


