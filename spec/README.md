# e2e Spec

# Home Page
- Should render a banner
- Should render a feed container with a 'Global Feed' tab
- Should render a feed of all articles when the 'Global Feed' tab is selected
- Should sort articles in the feed by most recent
- Should render a list of tags
- Should render some pagination for articles (TODO: add pagination template)
- Should render a new tab with tag feed when a tag is clicked

# Article Details Page
- Should exist at /#/article/:articleId
- Should render a title banner 
- Should render markdown from sever
- Should render a comments section at the bottom

# Home Page
- Should navigate to the Article Details page when an article name is clicked

# Header
- Should render on the Home page
- Should render on the Article Details page
- Should render a <nav> element
- Should render the Conduit logo

# Footer
- Should render on the Home page
- Should render on the Article Details page
- Should render a <footer> element
- Should render a Conduit logo

# Profile Page
- Should exist at /#/:@username
- Should render a user banner
- Should render the header and footer
- Should render a feed container with a 'My Articles' and 'Favorited Articles' tab
- Should render a feed of the user's authored articles when the 'My Articles' tab is selected
- Should render a feed of the user's favorited articles when the 'Favorited Articles' tab is selected
- Should render 'No articles are here... yet' if there are no favorited articles
- Should navigate to the Article Details page when an article name is clicked

# Sign Up Page
- Should exist at /#/register
- Should render a sign up form
- Should render the header and footer

# Sign In Page
- Should exist at /#/login
- Should render a sign in form
- Should render the header and footer
- Should have a link to Sign Up Page

# Sign Up Page
- Should have a link to Sign In Page

# Header
- Should have a link to the Sign Up Page
- Should have a link to the Sign In Page

# Article Details Page
- Should have a link to the Sign Up Page
- Should have a link to the Sign In Page

# Feature - Authentication

## Sign Up Page
- Should render server error messages
- Should use JWT authentication
- Should redirect to the Home page on sign up

## Sign In Page
- Should render server error messages
- Should use JWT authentication
- Should redirect to the Home page on sign in

<!-- The user is authentiated from here on out  -->
<!-- These are features on previously built pages that need to be added because of authentication -->
# Home Page
- Should contain a 'Your Feed' tab
- Should render a feed of authenticated user's authored articles when the 'Your Feed' tab is selected
- Should render 'No articles are here... yet' if there are no authored articles when the 'Your Feed' tab is selected
- Should activate 'Your Feed' tab when the user initially signs in

# Settings Page
- Settings Page should exist at /#/settings
- Should render a settings form
- Clicking Update settings should update settings
- Clicking Logout button should log out user and redirect to Home Page

# Profile
- Should render a 'Editing Profile Settings' button should navigate to Settings Page

# Header
- Should render a link displaying username that navigated to Profile Page
- Should render a 'Settings' link that navigates to Settings Page


<!-- These modules can be done in parallel -->
# Feature - Authoring Comment
- A user should be able to post a new comment to an article from the Article Page
- A user should be able to delete their comment on an article from the Article Page

# Feature - Authoring Article
- Create Article Page should exist at /#/editor
- Create Article Page should render an article form
- Create Article Page should render a 'Publish Article' button that when clicked posts the new article
- Article Page of an authored article should display 'Edit Article' button and 'Delete Article'
- Clicking 'Delete Article' should delete the article
- Clicking 'Edit Article' should navigate to /#/editor/:articleId
- Edit Article Page should render an article form
- Edit Article Page should render a 'Publish Article' button that when clicks updates the article
- An Article can contain multiple tags
- Header should render a 'New Post' link that navigates to Create Article Page

# Feature - Following
- Profile Page should contain a 'follow user' button that when clicked follows that user
- Profile Page should contain an 'unfollow user' if currently being followed, that when clicked unfollows the user
<!-- Maybe add Followers and Following tabs on Profile Page -->

# Feature - Favoriting
- A favorite icon should exist on each article in a feed
- Clicking the favorite icon on a feed should add the article to the user's 'Favorited Articled'
- Clicking the favorite icon on a feed should increase the favorited count by one






