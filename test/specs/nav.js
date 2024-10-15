import HomePage from "../pages/home-page";

describe('Navigation Menu', () => {
    it('Get the text of the navigation menu', async () => { 
        // Open home page
        //await browser.url('/');
        await HomePage.open();


        const expectedLinks = [
            'Home',
            'About',
            'Shop',
            'Blog',
            'Contact',
            'My account',

        ];

        const actualLinks = [];

        // Get the text of the navigation menu
        //const navLinks = await $('#zak-primary-menu').$$('li[id*=menu]');
        const navLinks = await HomePage.NavComponent.linksNavMenu;

        for ( const link of navLinks ) {
            actualLinks.push(await link.getText());
        }

        //expect(actualLinks).to.deep.equal(expectedLinks);
        await expect(expectedLinks).toEqual(actualLinks);
    });

    it('Get the text of the navigation menu and using wait commands', async () => { 
        // Open home page
        //await browser.url('/');
        await HomePage.open();


        const expectedLinks = [
            'Home',
            'About',
            'Shop',
            'Blog',
            'Contact',
            'My account',

        ];

        const actualLinks = [];

        //await $('#zak-primary-menu li').waitForClickable();

        // wait until the Home text is displayed on the page
        await browser.waitUntil(async function() {
            const homeText = await HomePage.NavComponent.firstNavMenuList.getText();
            return homeText === 'Home';
        });

        // Get the text of the navigation menu
        //const navLinks = await $('#zak-primary-menu').$$('li[id*=menu]');
        const navLinks = await HomePage.NavComponent.linksNavMenu;

        for ( const link of navLinks ) {
            actualLinks.push(await link.getText());
        }

        //expect(actualLinks).to.deep.equal(expectedLinks);
        await expect(expectedLinks).toEqual(actualLinks);
    });
});