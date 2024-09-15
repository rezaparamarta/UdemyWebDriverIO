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
});
