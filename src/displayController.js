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

  clearContentBox() {
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
  renderHome() {

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
