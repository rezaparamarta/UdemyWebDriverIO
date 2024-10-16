import BlogPage from '../pages/blog-page';

describe('Blog Page', () => { 
    it('Get the list of all Recent Posts & Assert the length of each list item > 1 & assert the total', async () => {
        //await browser.url('/blog');
        await BlogPage.open();

        // Get the list of all Recent Posts
        const recentPostLists = await BlogPage.listContent;

        // Loop through the list and assert the length of each list item > 10
        for ( const item of recentPostLists ) {
            const text = await item.getText();
            await expect(text.length).toBeGreaterThan(10);
        }

        // Assert the total length of the list
        await expect(recentPostLists).toHaveLength(5);
        await browser.pause(3000);
    });
    
});