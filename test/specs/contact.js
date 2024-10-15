import ContactPage from '../pages/contact-page';

describe('Contact Page', () => {
    it('Input the contact form', async () => { 
        // Open home page
        await ContactPage.open();

        // Fill out the input fields
        // await ContactPage.nameField.setValue('John Doe');
        // await ContactPage.emailField.setValue('john.doe@example.com');
        // await ContactPage.phoneField.setValue('08234152723');
        // await ContactPage.messageField.setValue('Hello, I am a customer!');

        // //console.log(await $('button[type=submt]'));
        // // debug
        // //await browser.debug();

        // // Click the submit button  
        // await ContactPage.submitButton.click();
        await ContactPage.submitForm('John Doe', 'john.doe@example.com', '08234152723', 'Hello, I am a customer!');


        // Assert the success message
        const successAlert = ContactPage.alertSuccess;
        await expect(successAlert).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
        await browser.pause(3000);
    });
});