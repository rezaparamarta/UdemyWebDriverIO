class ContactPage {
    open() {
        return browser.url('/contact');
    }

    get nameField() {
        return $('.contact-name input');
    }

    get emailField() {
        return $('.contact-email input');
    }

    get phoneField() {
        return $('.contact-phone input');
    }

    get messageField() {
        return $('.contact-message textarea');
    }

    get submitButton() {
        return $('button[type=submit]');
    }

    get alertSuccess() {
        return $('[role="alert"]');
    }

    async submitForm(name, email, phone, message) {
        await this.nameField.addValue(name);
        await this.emailField.addValue(email);
        await this.phoneField.addValue(phone);
        await this.messageField.addValue(message);
        await this.submitButton.click();
    }
}
export default new ContactPage();