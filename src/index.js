import "./style.css";
import { HomepageClass } from "./displayController";
import { MenuPageClass } from "./displayController";
import { UIController } from "./UIController";
import { MenuData } from "./menuData";
import { AboutPageClass } from "./displayController";

const homePageObj = new HomepageClass();
const menuPageObj = new MenuPageClass();
const UIControllerObj = new UIController();
const menuDataObj = new MenuData();
const aboutPageObj = new AboutPageClass();

function init() {
  homePageObj.renderHome();
  UIControllerObj.navBarClick(
    homePageObj.renderHome,
    () =>
      menuPageObj.renderMenuPage(menuDataObj.dishCat(), menuDataObj.dishData()),
    aboutPageObj.renderAboutPage
  );
}

init();
