import heroImg from "./asset/resource/pizza.png";
import aboutImg from "./asset/resource/logo-color.svg";
import contactLogoFile from "./asset/resource/phone-icn.svg";
import emailLogoFile from "./asset/resource/email-svgrepo-com.svg";
import addressLogoFile from "./asset/resource/address-location-map-svgrepo-com.svg";

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
  };
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
  };
}

export class MenuPageClass extends DisplayController {
  renderMenuPage = (catArr, dishArr) => {
    this.clearContentBox();

    const menuContent = this.elementGenerator("div", { class: "menu" }, "");
    const menuTitle = this.elementGenerator(
      "h1",
      { class: "menu-title" },
      "Menu"
    );

    this.contentBox.appendChild(menuContent);
    menuContent.appendChild(menuTitle);

    this.renderMenuContent(catArr, dishArr, menuContent);
  };

  renderMenuContent = (categoryArr, dishArr, menuElement) => {
    if (!categoryArr || !dishArr) {
      return;
    }
    //render category section

    for (const category of categoryArr) {
      const catCtn = this.elementGenerator(
        "div",
        { class: "menu-cat", "data-cat-id": category.id },
        ""
      );
      const catTitleCtn = this.elementGenerator(
        "div",
        { class: "cat-title-div", "data-cat-id": category.id },
        ""
      );
      const catTitle = this.elementGenerator(
        "h1",
        { "data-cat-id": category.id },
        category.category
      );
      const catGrid = this.elementGenerator(
        "div",
        { class: "cat-grid", "data-cat-id": category.id },
        ""
      );

      menuElement.appendChild(catCtn);
      menuElement.appendChild(catGrid);
      catCtn.appendChild(catTitleCtn);
      catTitleCtn.appendChild(catTitle);
    }

    //render menu items

    for (const dish of dishArr) {
      //generate the elements
      const menuItemCtn = this.elementGenerator(
        "div",
        {
          class: "menu-item",
          id: dish.id,
          "data-cat-id": dish.dishCategoryId,
          "data-menu-item-id": dish.id,
        },
        ""
      );
      const menuItemImgCtn = this.elementGenerator(
        "div",
        { class: "menu-item-img", "data-menu-item-id": dish.id },
        ""
      );
      const menuItemImg = this.elementGenerator(
        "img",
        { "data-menu-item-id": dish.id, src: dish.imgLink },
        ""
      );
      const menuItemTitle = this.elementGenerator(
        "h3",
        { class: "menu-item-title", "data-menu-item-id": dish.id },
        dish.dishName
      );
      const menuItemDesc = this.elementGenerator(
        "p",
        { class: "menu-item-descp", "data-menu-item-id": dish.id },
        dish.description
      );
      const menuItemAmt = this.elementGenerator(
        "h3",
        { class: "menu-item-amnt", "data-menu-item-id": dish.id },
        dish.amount
      );
      const menuItemBtn = this.elementGenerator(
        "button",
        { class: "menu-item-buy-btn", "data-menu-item-id": dish.id },
        "Buy Now"
      );

      //select the category element
      const categoryGrid = document.querySelector(
        `.cat-grid[data-cat-id="${dish.dishCategoryId}"]`
      );

      //render to page
      menuItemCtn.appendChild(menuItemImgCtn);
      menuItemImgCtn.appendChild(menuItemImg);
      menuItemCtn.appendChild(menuItemTitle);
      menuItemCtn.appendChild(menuItemDesc);
      menuItemCtn.appendChild(menuItemAmt);
      menuItemCtn.appendChild(menuItemBtn);
      categoryGrid.appendChild(menuItemCtn);
    }
  };
}

export class AboutPageClass extends DisplayController {

  #aboutText = {
    aboutTitle: 'About Small Bites',
    aboutText: `Welcome to Small Bites! We’re a cozy and casual restaurant offering a delicious range of small plates that are perfect for sharing.
      Our menu is inspired by global flavors and made with fresh, locally sourced ingredients, giving you a variety of choices that are always bold, creative, and full of flavor.\n
      At Small Bites, we believe in making food an enjoyable experience. Whether you’re grabbing a quick bite or spending time with friends,
      our dishes are designed to be savored in a relaxed, friendly atmosphere.`,
    aboutImg: aboutImg,
    contactUsDescp: 'We’d love to hear from you! For any inquiries or reservations, feel free to get in touch:',
    contactNo:'+960 9647198',
    emailAdd: 'aish8la@hotmail.com',
    locationAdd: "Beach Hous, Male'",
    openHrOne: 'Sunday-Thursday: 11AM - 10PM',
    openHrTwo: 'Friday-Saturday: 9AM - 11PM'
  }

  renderAboutPage = () => {
    this.clearContentBox();

    //about us section
    const aboutCtn = this.elementGenerator(
      "div",
      { class: "about-div",},
      ""
    );
    const aboutUsSec = this.elementGenerator(
      "div",
      { class: "about-us-sec",},
      ""
    );
    const aboutTitleEle = this.elementGenerator(
      "h1",
      {},
      this.#aboutText.aboutTitle
    );
    const aboutTextEle = this.elementGenerator(
      "p",
      {},
      this.#aboutText.aboutText
    );
    const aboutImg = this.elementGenerator(
      "img",
      {src: this.#aboutText.aboutImg, class: 'about-card-img'},
      ''
    );

    //contact us section
    const contactSec = this.elementGenerator(
      "div",
      {class: 'contact-sec'},
      ''
    );
    const contactTitle = this.elementGenerator(
      "h3",
      {},
      'Contact Us'
    );
    const contactText = this.elementGenerator(
      "p",
      {},
      this.#aboutText.contactUsDescp
    );
    const contactUl = this.elementGenerator(
      "ul",
      {},
      ''
    );
    const contactNoCtn = this.elementGenerator(
      "li",
      {},
      ''
    );
    const contactNoLogo = this.elementGenerator(
      "img",
      {src: contactLogoFile},
      ''
    );
    const contactNoText = this.elementGenerator(
      "p",
      {},
      this.#aboutText.contactNo
    );
    const emailAddCtn= this.elementGenerator(
      "li",
      {},
      ''
    );
    const emailLogo = this.elementGenerator(
      "img",
      {src: emailLogoFile},
      ''
    );
    const emailText = this.elementGenerator(
      "p",
      {},
      this.#aboutText.emailAdd
    );
    const locationAddCtn = this.elementGenerator(
      "li",
      {},
      ''
    );
    const locationLogo = this.elementGenerator(
      "img",
      {src: addressLogoFile},
      ''
    );
    const locationText = this.elementGenerator(
      "p",
      {},
      this.#aboutText.locationAdd
    );

    //open hour section
    const openHrSec = this.elementGenerator(
      "div",
      {class: 'hours-sec'},
      ''
    );
    const openHrTitle = this.elementGenerator(
      "h3",
      {},
      this.#aboutText.openHrTitle
    );
    const openHrUl = this.elementGenerator(
      "ul",
      {},
      ''
    );
    const openHrLiOne = this.elementGenerator(
      "li",
      {},
      this.#aboutText.openHrOne
    );
    const openHrLiTwo = this.elementGenerator(
      "li",
      {},
      this.#aboutText.openHrTwo
    );


    // render on display

    this.contentBox.appendChild(aboutCtn);

    aboutCtn.appendChild(aboutUsSec);
    aboutUsSec.appendChild(aboutTitleEle);
    aboutUsSec.appendChild(aboutTextEle);
    aboutUsSec.appendChild(aboutImg);

    aboutCtn.appendChild(contactSec);
    contactSec.appendChild(contactTitle);
    contactSec.appendChild(contactText);
    contactSec.appendChild(contactUl);

    contactUl.appendChild(contactNoCtn);
    contactNoCtn.appendChild(contactNoLogo);
    contactNoCtn.appendChild(contactNoText);

    contactUl.appendChild(emailAddCtn);
    emailAddCtn.appendChild(emailLogo);
    emailAddCtn.appendChild(emailText);

    contactUl.appendChild(locationAddCtn);
    locationAddCtn.appendChild(locationLogo);
    locationAddCtn.appendChild(locationText);

    aboutCtn.appendChild(openHrSec);

    openHrSec.appendChild(openHrUl);
    openHrUl.appendChild(openHrLiOne);
    openHrUl.appendChild(openHrLiTwo);
  };
}

