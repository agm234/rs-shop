export interface IShopItem{
    id: string;
    name: string;
    imageUrls: string[];
    rating: number;
    availableAmount:number;
    price: number;
    description: string;
    isInCart: boolean;
    isFavorite: boolean;
}
export interface IUserInfo{

        firstName: string;
        lastName: string;
        cart: [
          string
        ];
        favorites: [
          string
        ];
        orders: [
          {
            items: [
              {
                id: string,
                amount: 0
              }
            ];
            details: {
              name: string,
              address: string,
              phone: string,
              timeToDeliver: string,
              comment: string,
            };
            id: string;
          }
        ]
}
