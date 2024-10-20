class MenuData {
  //array containing dish categories
  #dishCat = [];

  //array containing dish objects
  #dishData = [];

  addCategory(categoryName) {
    this.#dishCat.push(categoryName);
  }

  addDish(dish = {}) {
    const { dishName, dishCategory, imgLink, description, amount } = dish;
    this.#dishData.push(
      new dishObj(dishName, dishCategory, imgLink, description, amount)
    );
  }

  
}

class dishObj {
  constructor(dishName, dishCategory, imgLink, description, amount) {
    this.dishName = dishName;
    this.dishCategory = dishCategory;
    this.imgLink = imgLink;
    this.description = description;
    this.amount = amount;
  }
}
