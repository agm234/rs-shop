import { ICategories } from '../core/models/categories-model';

export interface AppState {
  auth: IAuthState;
  categories: ICardsState;
}

export interface ICardsState {
  categories: ICategories[];
  categoriesItems:ICategoriesItems[];
  popularItems:ICategoriesItems[];
  item:ICategoriesItems[];
}

export interface IAuthState {
    favorites:ICategoriesItems[];
    cart: ICategoriesItems[];
    username: string;
    lastname: string;
}
export interface ICategoriesItems{
    id: string;
    name: string;
    imageUrls:  string[],
    rating: number;
    availableAmount:number;
    price: number;
    description: string;
    isInCart: boolean;
    isFavorite: boolean;
    category: string;
    subCategory: string;
}
