describe('Contact Page', () => {
    it('Input the contact form', async () => { 
        // Open home page
        await browser.url('/contact');

        // Fill out the input fields
        await $('.contact-name input').setValue('John Doe');
        await $('.contact-email input').setValue('john.doe@example.com');
        await $('.contact-phone input').setValue('08234152723');
        await $('.contact-message textarea').setValue('Hello, I am a customer!');

        //console.log(await $('button[type=submt]'));
        // debug
        //await browser.debug();

        // Click the submit button  
        await $('button[type=submit]').click();


        // Assert the success message
        const successAlert = $('[role="alert"]');
        await expect(successAlert).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
        await browser.pause(3000);
      
    });
});