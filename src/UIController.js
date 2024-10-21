export class UIController {
    constructor() {
        const navBar = document.querySelector('header > nav');
    }

    navBarClick(home, menu, about) {
        this.navBar.addEventListner('click', e => {
            const btnId = e.target.id;
            
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