class MenuData {
  //array containing dish categories
  #dishCat = ["Appetizers", "Salads", "Main Dishes", "Desserts"];

  //array containing dish objects
  #dishData = [
    {
      dishName: "Bruschetta",
      dishCategory: "Appetizers",
      imgLink: "https://via.placeholder.com/150",
      description:
        "Grilled bread topped with fresh tomatoes, garlic, basil, and olive oil.",
      amount: "$7.99",
    },
    {
      dishName: "Stuffed Mushrooms",
      dishCategory: "Appetizers",
      imgLink: "https://via.placeholder.com/150",
      description:
        "Baked mushrooms filled with creamy cheese, spinach, and herbs.",
      amount: "$8.99",
    },
    {
      dishName: "Caesar Salad",
      dishCategory: "Salads",
      imgLink: "https://via.placeholder.com/150",
      description:
        "Crisp romaine lettuce tossed in a creamy Caesar dressing with croutons and Parmesan.",
      amount: "$9.50",
    },
    {
      dishName: "Greek Salad",
      dishCategory: "Salads",
      imgLink: "https://via.placeholder.com/150",
      description:
        "Fresh cucumbers, tomatoes, feta cheese, and olives in a zesty vinaigrette.",
      amount: "$9.00",
    },
    {
      dishName: "Grilled Salmon",
      dishCategory: "Main Dishes",
      imgLink: "https://via.placeholder.com/150",
      description:
        "Fresh Atlantic salmon grilled to perfection with a hint of lemon and herbs.",
      amount: "$15.99",
    },
    {
      dishName: "BBQ Chicken Pizza",
      dishCategory: "Main Dishes",
      imgLink: "https://via.placeholder.com/150",
      description:
        "Tender chicken, tangy BBQ sauce, and melted mozzarella on a crispy crust.",
      amount: "$13.50",
    },
    {
      dishName: "Chocolate Lava Cake",
      dishCategory: "Desserts",
      imgLink: "https://via.placeholder.com/150",
      description: "Rich, warm chocolate cake with a gooey molten center.",
      amount: "$6.99",
    },
    {
      dishName: "Tiramisu",
      dishCategory: "Desserts",
      imgLink: "https://via.placeholder.com/150",
      description:
        "Layers of espresso-soaked ladyfingers and creamy mascarpone dusted with cocoa.",
      amount: "$7.50",
    },
  ];
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
