import heroImg from "./asset/resource/pizza.png";

class DisplayController {
  //Element generator

  elementGenerator(type, attributes = {}, textString) {
    const DOMElement = document.createElement(type);

    Object.keys(attributes).forEach((key) => {
      DOMElement.setAttribute(key, attributes[key]);
    });

    DOMElement.textContent = textString;

    return DOMElement;
  }

  clearContentBox = () => {
    this.contentBox.replaceChildren();
  }
}

DisplayController.prototype.contentBox = document.querySelector("#content");

// home display class
export class HomepageClass extends DisplayController {
  #heroText = {
    heroTitle: "Big Flavor in Every Bite",
    heroMainTxt:
      "Discover a delightful variety of freshly crafted small plates, perfect for sharing or savoring on your own. At Small Bites, we turn simple ingredients into unforgettable tastes.",
  };
  // render homepage
  renderHome = () => {
    this.clearContentBox();
    const heroCard = this.elementGenerator("div", { class: "hero-card" }, "");
    const heroLeft = this.elementGenerator("div", { class: "hero-left" }, "");
    const heroRight = this.elementGenerator("div", { class: "hero-right" }, "");
    const heroLeftFirst = this.elementGenerator(
      "h1",
      { class: "hero-title" },
      this.#heroText.heroTitle
    );
    const heroLeftSecond = this.elementGenerator(
      "p",
      { class: "hero-text" },
      this.#heroText.heroMainTxt
    );
    const heroRightFirst = this.elementGenerator("img", {}, "");
    heroRightFirst.src = heroImg;

    //append elements

    this.contentBox.appendChild(heroCard);

    heroCard.appendChild(heroLeft);
    heroLeft.appendChild(heroLeftFirst);
    heroLeft.appendChild(heroLeftSecond);

    heroCard.appendChild(heroRight);
    heroRight.appendChild(heroRightFirst);
  }
}

export class MenuPageClass extends DisplayController {
  renderMenuPage = (catArr, dishArr) => {

    this.clearContentBox();

    const menuContent = this.elementGenerator("div", { class: "menu" }, "");
    const menuTitle = this.elementGenerator("h1", { class: "menu-title" }, "Menu");

    this.contentBox.appendChild(menuContent);
    menuContent.appendChild(menuTitle)

    this.renderMenuContent(catArr, dishArr, menuContent);
  }

  renderMenuContent = (categoryArr, dishArr, menuElement) => {

    if(!categoryArr || !dishArr) {
      return;
    }
    //render category section

    for (const category of categoryArr) {
      const catCtn = this.elementGenerator("div", { class: "menu-cat", 'data-cat-id': category.id }, "");
      const catTitleCtn = this.elementGenerator("div", { class: "cat-title-div", 'data-cat-id': category.id }, "");
      const catTitle = this.elementGenerator("h1", { class: "cat-title-div", 'data-cat-id': category.id }, category.category);
      const catGrid = this.elementGenerator("div", { class: "cat-grid", 'data-cat-id': category.id }, "");
      
      menuElement.appendChild(catCtn);
      menuElement.appendChild(catGrid);
      catCtn.appendChild(catTitleCtn);
      catTitleCtn.appendChild(catTitle);   
    }
  }

}