describe('Navigation Menu', () => {
    it('Get the text of the navigation menu', async () => { 
        // Open home page
        await browser.url('/');


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
        const navLinks = await $('#zak-primary-menu').$$('li[id*=menu]');

        for ( const link of navLinks ) {
            actualLinks.push(await link.getText());
        }

        //expect(actualLinks).to.deep.equal(expectedLinks);
        await expect(expectedLinks).toEqual(actualLinks);
    });
});