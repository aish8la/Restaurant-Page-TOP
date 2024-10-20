const { prototype } = require("html-webpack-plugin");

class displayController {

    //Element generator

    elementGenerator(type, attributes, textContent, parentElement) {

        const DOMElement = document.createElement(type);

        Object.keys(attributes).forEach(key => {
            DOMElement.setAttribute(key, attributes[key]);
        });

        DOMElement.textContent = textContent;

        parentElement.appendChild(DOMElement)
    }
};

displayController.prototype.contentBox = document.querySelector('#content');


// home display class
class homeRender extends displayController {
    

};