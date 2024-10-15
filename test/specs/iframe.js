describe('Iframe Test for Logo Presence', () => {
    it('should verify that the logo is present inside the iframe', async () => {
        // Buka URL halaman yang mengandung iframe
        await browser.url('https://practice.sdetunicorns.com/iframe-sample/');

        // Tunggu hingga iframe tersedia
        const iframe = await $('#advanced_iframe');
        await browser.waitUntil(
            async () => iframe.isExisting(),
            {
                timeout: 10000,
                timeoutMsg: 'Iframe did not load within 10 seconds'
            }
        );

        // Pindah ke iframe
        await browser.switchToFrame(iframe);

        // Tunggu hingga elemen logo tersedia di dalam iframe
        const logo = await $('div.hfe-site-logo-container img');
        await browser.waitUntil(
            async () => logo.isDisplayed(),
            {
                timeout: 10000,
                timeoutMsg: 'Logo was not displayed within 10 seconds'
            }
        );

        // Verifikasi bahwa logo tampil
        expect(await logo.isDisplayed()).toBe(true);

        // Verifikasi sumber gambar
        const logoSrc = await logo.getAttribute('src');
        console.log('Logo Source:', logoSrc);
        expect(logoSrc).toContain('logo-1.png');

        // Kembali ke parent frame (opsional)
        await browser.switchToParentFrame();

        // Jeda untuk observasi (opsional)
        await browser.pause(2000);
    });
});
