import path from 'path';
import { fileURLToPath } from 'url'; // Tambahkan ini untuk mendapatkan direktori

// Konversi import.meta.url menjadi file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe('Upload Page', () => {
    it('Simple upload test', async () => {
        // Open the URL
        await browser.url('https://the-internet.herokuapp.com/upload');

        // Store test file path
        const filePath = path.join(__dirname, '../data/sertifikat_kehadiran.png');

        // Upload the file
        const remoteFilePath = await browser.uploadFile(filePath);

        // Set file path value in the input field
        await $('#file-upload').setValue(remoteFilePath);
        await $('#file-submit').click();

        // assertions
        await expect($('.example h3')).toHaveText('File Uploaded!');
        await browser.pause(3000);
    });

    it.only('Upload on a hidden input field', async () => {
        // Open URL
        await browser.url('/cart/');
    
        // Store test file path
        const filePath = path.join(__dirname, '../data/sertifikat_kehadiran.png');
    
        // Upload the file
        const remoteFilePath = await browser.uploadFile(filePath);
    
        // Remove hidden class from input field
        await browser.execute(() => {
            document.querySelector('#upfile_1').className = '';
        });
    
        // Set file path value in the input field
        await $('#upfile_1').setValue(remoteFilePath);
        await $('#upload_1').click();
    
        // Assertions
        const messageElement = $('#wfu_messageblock_header_1_label_1');
        await expect(messageElement).toBeDisplayed();
        await expect(messageElement).toHaveText('File sertifikat_kehadiran.png uploaded successfully');
        
        await browser.pause(3000);
    });
});
