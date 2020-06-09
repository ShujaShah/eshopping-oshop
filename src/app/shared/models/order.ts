import { ShoppingCart } from './shopping-cart';

export class Order { 
  datePlaced: number; 
  items: any[];

  constructor(public userId: string, public shipping: any, shoppingCart: ShoppingCart) {
    this.datePlaced = new Date().getTime();

    this.items = shoppingCart.items.map(i => {
      return {
        product: {
          title: i.title,
          imageUrl: i.imageUrl,
          price: i.price
        },
        quantity: i.quantity,
        totalPrice: i.totalPrice
      }
    })    
  }

  get totalPrice(){
    let sum = 0;
    for (let productId in this.items)
    sum += this.items[productId].totalPrice;
    return sum;
  }
}