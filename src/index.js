import "./style.css";
import { HomepageClass } from "./displayController";
import { MenuPageClass } from "./displayController";
import { UIController } from "./UIController";

const homePageObj = new HomepageClass();
const menuPageObj = new MenuPageClass();
const UIControllerObj = new UIController();

function init() {
    homePageObj.renderHome();
    UIControllerObj.navBarClick(homePageObj.renderHome, menuPageObj.renderMenuPage);
};

init();

