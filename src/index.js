import "./style.css";
import { HomepageClass } from "./displayController";
import { MenuPageClass } from "./displayController";
import { UIController } from "./UIController";
import { MenuData } from "./menuData";

const homePageObj = new HomepageClass();
const menuPageObj = new MenuPageClass();
const UIControllerObj = new UIController();
const menuDataObj = new MenuData();

function init() {
    homePageObj.renderHome();
    UIControllerObj.navBarClick(homePageObj.renderHome, () => menuPageObj.renderMenuPage(menuDataObj.dishCat(), menuDataObj.dishData()));
};

init();

