export class UIController {
    constructor() {
        this.navBar = document.querySelector('header > nav');
    }

    navBarClick = (home, menu, about) => {
        

        this.navBar.addEventListener('click', e => {
            if(e.target.id === 'home-btn') {

                home();
            };

            if(e.target.id === 'menu-btn') {
                menu();
            };

            if(e.target.id === 'about-btn') {
                about();
            };
        });
    }
}