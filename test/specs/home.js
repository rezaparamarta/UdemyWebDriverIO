import assert from 'assert';

describe('Home', () => {
    it('Open URL & Assert Title', async () => {
        // Open URL
        await browser.url('https://practice.sdetunicorns.com');

        // Assert Title
        await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    });

    it('Open About Page & Assert URL', async () => {
        // Open URL
        await browser.url('/about');

        // Assert URL
        await expect(browser).toHaveUrl('https://practice.sdetunicorns.com/about/');
    });

    // Finding Elements
    it('Click get started button & assert URL contains get-started text', async () => {
        // Open Home Page
        await browser.url('https://practice.sdetunicorns.com');

        // Click get started button
        await $('#get-started').click();

        // Get the current URL
        const currentUrl = await browser.getUrl();

        // Assert URL contains 'get-started'
        assert.ok(currentUrl.includes('#get-started'), 'URL does not contain #get-started');
    });

    it('Click logo and assert URL does not contain get-started text', async () => { 
        // Open Home Page
        await browser.url('https://practice.sdetunicorns.com');

        // Click logo
        await $('//img[@alt="Practice E-Commerce Site"]').click();

        // Get the current URL
        const currentUrl = await browser.getUrl();

        // Assert that the URL does not contain 'get-started'
        assert.ok(!currentUrl.includes('#get-started'), 'URL contains #get-started');
    });

    it('Find heading element & assert the text', async () => { 
        // Open Home Page
        await browser.url('https://practice.sdetunicorns.com');

        // find heading element
        const headingEl = await $('.elementor-widget-container h1');

        // get the text of the heading element
        const headingText = await headingEl.getText();

        // assert the text of the heading element
        await expect(headingText).toEqual('Think different. Make different.');
        await browser.pause(3000);
    });
});
