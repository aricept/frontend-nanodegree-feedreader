// feedreader.js

$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined(); //We expect allFeeds to be a defined object...
            expect(allFeeds.length).not.toBe(0); // with at least one member.
        });

         it('have URLs', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined(); // We expect each feed to have a url defined...
                expect(feed.url.length).not.toBe(0); // and to have a length > 0.
            });
         });

         it('have names', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined(); // We expect each feed to have a defined name...
                expect(feed.name.length).not.toBe(0); // which has a length > 0.
            });
         });
    });

    describe('The menu', function() {
        var body = document.body;
        var icon = $('.menu-icon-link');
        var menu = $('.menu');
        menu.left = menu.position().left;
        menu.right = menu.position().left + menu.width();

        it('is hidden', function() {
            expect(body.classList).toContain('menu-hidden'); // Ensure we have the class that hides the menu...
            expect(menu.right).toBeLessThan(1); // and that the menu is actually hidden, i.e., its right is offscreen
        });

        it('toggles display when clicked', function() {
            icon.trigger('click'); // Manually trigger the menu click event
            menu.css('transition', 'transform 0s'); // Remove the transition duration
            menu.left = menu.position().left;
            expect(body.classList).not.toContain('menu-hidden'); // We expect this class to be gone...
            expect(menu.left).toBeGreaterThan(-1); // And the entirety of the menu to be on the screen

            icon.trigger('click');
            menu.css('transition', 'transform 0s');
            menu.right = menu.position().left + menu.width();
            expect(body.classList).toContain('menu-hidden'); // Expect menu-hidden to be back...
            expect(menu.right).toBeLessThan(1); // and the right side of the menu to be offscreen
        });
    });

    describe('Initial Entries', function() {
        var entries;

        beforeEach(function(done) {
            entries = 0; // Ensure we're starting from the same place and numbers...
            loadFeed(0, done); // and don't start test until feeds have loaded.
        });

        it('has one or more entries', function() {
            expect($('.entry').length).toBeGreaterThan(entries); // Expect 1 or more entries.
        });
    });

    describe('New Feed Selection', function() {

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('loads new feeds', function() {
            var title = $('.header-title');
            var content = $('.entry');
            loadFeed(1); // Load a new feed
            expect($('.header-title')).not.toBe(title); // Expect the feed title to have changed...
            expect($('.entry')).not.toBe(content); // and the entries to have changed.
        });
    });

}());
