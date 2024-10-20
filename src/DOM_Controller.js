const { prototype } = require("html-webpack-plugin");

class displayController {

    //Element generator

    elementGenerator(type, attributes = {}, textString) {

        const DOMElement = document.createElement(type);

        Object.keys(attributes).forEach(key => {
            DOMElement.setAttribute(key, attributes[key]);
        });

        DOMElement.textContent = textString;
    }
};

displayController.prototype.contentBox = document.querySelector('#content');


/* <div class="hero-card">
<div class="hero-left">
    <h1 class="hero-title">Big Flavor in Every Bite</h1>
    <p class="hero-text">Discover a delightful variety of freshly crafted small plates, perfect for sharing or savoring on your own. At Small Bites, we turn simple ingredients into unforgettable tastes.</p>
</div>
<div class="hero-right">
    <img src="./asset/resource/pizza.png" alt="">
</div>
</div> */

// home display class
class homeRender extends displayController {
    
// render homepage
    renderHome() {
        this.elementGenerator('div',{class: "hero-card"}, this.contentBox, "");

    }
};