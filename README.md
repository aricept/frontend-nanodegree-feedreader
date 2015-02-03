# Project Overview

## Tests created and successfully passed

7. Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
    * Test URL with `toBeDefined`
    * Test feed.url.length toBeGreaterThan 0
8. Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
    * Test name with toBeDefined
    * Test feed.name.length toBeGreaterThan 0
10. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
    * Test that the class 'menu-hidden' is in `body.classList`
    * Test that the entirety of the menu is offscreen
11. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
    * Test that class `menu-hidden` is not in `body.classList`
    * Test that the entirety of the menu is onscreen
    * Test that the class comes back when toggled
    * Test that entirety of menu is back offscreen when toggles
12. Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. Remember, loadFeed() is asynchronous so this test wil require the use of Jasmine's beforeEach and asynchronous done() function.
	* Load a feed, and when done test for .entry `toBeGreaterThan(0)`
13. Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. Remember, loadFeed() is asynchronous.
	* Test that the `header-title` and all `entry` items have changed
14. When complete - all of your tests should pass.
	* All tests pass successfully

## Failures and Lessons

Actually learned quite a bit more about jQuery and its selectors work during this project.  Initially, my tests for hiding the menu only tested for the presence of the `menu-hidden` class;
but when writing the content change test I decided I should probably go test for the actual *visibility* of the menu.  This lead to quite a bit of experimentation on the best way to select the menu, and then to calculate its edges.  The `position()` method might be my new favorite thing in the whole world.

And then came issues with the transition of the menu.  The tests would fire before the transition completed.  I tried setting timeouts at various places (Jasmine doesn't see `expect()` statements inside of `setTimeout`, as it turns out), started to try and build a spy, and finally arrived at just setting the transition property to a 0s duration immediately after triggering the click.  That was a fun little journey - I also need to play more with CSS transform and transition, as this and P4 taught me.

I'll need to play around with Jasmine some more.  I definitely see its usefulness and potential, and I'll need to play around with spies some to really get a grasp for how they work.  I was unable to get one to test for if loadFeed had been called; so some experimentation is called for.

I tackled this project before Project 5 - the Neighborhood Map project; I'm told it really is the capstone of the Nanodegree.  Looking forward to it!