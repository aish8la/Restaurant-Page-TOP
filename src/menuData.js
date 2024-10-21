export class MenuData {
  //array containing dish categories
  #dishCat = [
    { id: "mnu-id-1", category: "Appetizers" },
    { id: "mnu-id-2", category: "Salads" },
    { id: "mnu-id-3", category: "Main Dishes" },
    { id: "mnu-id-4", category: "Desserts" }
  ]

  //array containing dish objects
  #dishData = [
    {
      id: "mnu-id-5",
      dishName: "Bruschetta",
      dishCategoryId: "mnu-id-1", // References 'Appetizers'
      imgLink: "https://via.placeholder.com/150",
      description: "Grilled bread topped with fresh tomatoes, garlic, basil, and olive oil.",
      amount: "$7.99"
    },
    {
      id: "mnu-id-6",
      dishName: "Stuffed Mushrooms",
      dishCategoryId: "mnu-id-1", // References 'Appetizers'
      imgLink: "https://via.placeholder.com/150",
      description: "Baked mushrooms filled with creamy cheese, spinach, and herbs.",
      amount: "$8.99"
    },
    {
      id: "mnu-id-7",
      dishName: "Caesar Salad",
      dishCategoryId: "mnu-id-2", // References 'Salads'
      imgLink: "https://via.placeholder.com/150",
      description: "Crisp romaine lettuce tossed in a creamy Caesar dressing with croutons and Parmesan.",
      amount: "$9.50"
    },
    {
      id: "mnu-id-8",
      dishName: "Greek Salad",
      dishCategoryId: "mnu-id-2", // References 'Salads'
      imgLink: "https://via.placeholder.com/150",
      description: "Fresh cucumbers, tomatoes, feta cheese, and olives in a zesty vinaigrette.",
      amount: "$9.00"
    },
    {
      id: "mnu-id-9",
      dishName: "Grilled Salmon",
      dishCategoryId: "mnu-id-3", // References 'Main Dishes'
      imgLink: "https://via.placeholder.com/150",
      description: "Fresh Atlantic salmon grilled to perfection with a hint of lemon and herbs.",
      amount: "$15.99"
    },
    {
      id: "mnu-id-10",
      dishName: "BBQ Chicken Pizza",
      dishCategoryId: "mnu-id-3", // References 'Main Dishes'
      imgLink: "https://via.placeholder.com/150",
      description: "Tender chicken, tangy BBQ sauce, and melted mozzarella on a crispy crust.",
      amount: "$13.50"
    },
    {
      id: "mnu-id-11",
      dishName: "Chocolate Lava Cake",
      dishCategoryId: "mnu-id-4", // References 'Desserts'
      imgLink: "https://via.placeholder.com/150",
      description: "Rich, warm chocolate cake with a gooey molten center.",
      amount: "$6.99"
    },
    {
      id: "mnu-id-12",
      dishName: "Tiramisu",
      dishCategoryId: "mnu-id-4", // References 'Desserts'
      imgLink: "https://via.placeholder.com/150",
      description: "Layers of espresso-soaked ladyfingers and creamy mascarpone dusted with cocoa.",
      amount: "$7.50"
    }
  ]

//Unique ID generator

  #lastId = 0;

  get idGen() {
    this.#lastId++;
    return `mnu-id-${this.#lastId}`;
  }

  get dishCat() {
    return this.#dishCat;
  }

  get dishData() {
    return this.#dishData;
  }
}

class dishObj {
  constructor(dishName, dishCategoryId, imgLink, description, amount) {
    this.id;
    this.dishName = dishName;
    this.dishCategoryId = dishCategoryId;
    this.imgLink = imgLink;
    this.description = description;
    this.amount = amount;
  }
}
