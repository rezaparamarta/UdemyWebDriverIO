describe('Iframe', () => {
    it('working with iframe', async () => {
        // Open URL
        await browser.url('https://practice.sdetunicorns.com/iframe-sample/');

        // Access the iframe
        const iFrame = await $('#advanced_iframe');
        await iFrame.waitForExist(); // Ensure iframe exists before switching
        await browser.switchToFrame(iFrame);

        // Verify that the logo is present
        const logo = await $('img[alt="sdetunicorns.com"]');
        await logo.waitForDisplayed({ timeout: 5000 }); // Wait up to 5 seconds for the logo to be displayed
        await expect(logo).toBeDisplayed();

        await browser.pause(2000);
    });
});
