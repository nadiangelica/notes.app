class NotesModel {
  constructor() {
    this.model = []
  }

  addItem(candy) {
    this.basket.push(candy);
  }


  getTotalPrice() {
    let sum = 0;
    this.basket.forEach(item => {
      sum += item.price
    });
    return sum;
    };
  }
module.exports = ShoppingBasket;