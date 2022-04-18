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
  userInfo: IUserInfo[];
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
export interface IUserInfo{

  firstName: string;
  lastName: string;
  cart: [
    string,
  ];
  favorites: [
    string,
  ];
  orders: [
    {
      items: [
        {
          id: string,
          amount: 0
        },
      ];
      details: {
        name: string,
        address: string,
        phone: string,
        timeToDeliver: string,
        comment: string,
      };
      id: string;
    },
  ]
}
