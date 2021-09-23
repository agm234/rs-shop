import { createAction, props } from '@ngrx/store';

import { ICategories } from '../../core/models/categories-model';
import { ICategoriesItems, IUserInfo } from '../state.models';

export const getCategories = createAction('getCategories');
export const fetchCategories = createAction('fetchCategories', props<{ payload: ICategories[] } >());
export const getCategoriesItems = createAction('getCategoriesItems', props<{ payload: string }>());
export const fetchCategoriesItems = createAction('fetchCategoriesItems', props<{ payload: ICategoriesItems[] } >());
export const getPopularItems = createAction('getPopularItems', props<{ payload: string }>());
export const fetchPopularItems = createAction('fetchPopularItems', props<{ payload: ICategoriesItems[] } >());
export const getSubCategoriesItems = createAction('getSubCategoriesItems', props<{ payload: string[], }>());
export const fetchSubCategoriesItems = createAction('fetchSubCategoriesItems', props<{ payload: ICategoriesItems[] } >());
export const getItem = createAction('getItem', props<{ payload: string, }>());
export const fetchItem = createAction('fetchItem', props<{ payload: ICategoriesItems } >());
export const getCards = createAction('getCards');
export const getUserInfo = createAction('getUserInfo');
export const fetchUserInfo = createAction('fetchUserInfo', props<{ payload: IUserInfo } >());
