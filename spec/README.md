# e2e Spec

# Home Page
<!-- concept: hello world -->
- Should render a banner 

<!-- concept: render a list of stubbed articles -->
- Should render a feed of article snippets
- Should sort article snippets in the feed by most recent

<!-- concept: render dynamic list -->
- Should render a feed of article snippets from API

<!-- concept: container component -->
- Should render a feed container with a 'Global Feed' tab

<!-- concept: re-enforcing lists and server requests -->
- Should render a list of tags

<!-- concept: handling user input -->
- Should render a feed of all articles when the 'Global Feed' tab is selected
- Should render a feed of articles with coresponding tag when a tag in the tag list is selected

<!-- concept: put it all together with pagination -->
- Should render some pagination for articles (TODO: add pagination template)

<!-- concept: routing -->
- Home page should exist at /#/ (template check)
- Article Details page should exist at /#/article/:articleId (template check)
- Should navigate to the Article Details page when an article name is clicked

# Article Details Page

<!-- concept: unique product requirement -->
- Should render markdown from sever

<!-- concept: re-enforce lists and server requests -->
- Should render a comments section at the bottom

# Header

<!-- concept: components agnostic to routing) -->
- Should render on the Home page
- Should render on the Article Details page

# Footer

<!-- concept: re-enforce components agnostic to routing) -->
- Should render on the Home page
- Should render on the Article Details page

# Profile Page

<!-- concept: re-enforce routing -->
- Should exist at /#/:@username (template check)

<!-- concept: re-enforce components agnostic to routing) -->
- Should render the header and footer

<!-- concept: re-enforce container components -->
- Should render a feed container with a 'My Articles' and 'Favorited Articles' tab

<!-- concept: re-enforce handling user input -->
- Should render a feed of the user's authored articles when the 'My Articles' tab is selected
- Should render a feed of the user's favorited articles when the 'Favorited Articles' tab is selected

<!-- concept: conditional rendering -->
- Should render the text 'No articles are here... yet' if ther user has not favorited any articles
- Should render the text 'No articles are here... yet' if the user has not authored any articles

<!-- concept: linking -->
- Should navigate to the Article Details page when an article name is clicked

# Sign Up Page

<!-- concept: easy re-enforcement wins -->
- Should exist at /#/register
- Should render a sign up form
- Should render the header and footer
- Should have a link to Sign In Page

# Sign In Page

<!-- concept: easy re-enforcement wins -->
- Should exist at /#/login
- Should render a sign in form
- Should render the header and footer
- Should have a link to Sign Up Page

# Header

<!-- concept: easy re-enforcement wins -->
- Should have a link to the Sign Up Page
- Should have a link to the Sign In Page

# Article Details Page

<!-- concept: easy re-enforcement wins -->
- Should have a link to the Sign Up Page
- Should have a link to the Sign In Page

# Feature - Authentication

## Sign Up Page

<!-- concept: handling error mesasges -->
- Should render server error messages

<!-- concept: jwt authentication -->
- Should use JWT authentication

<!-- concept: redirect -->
- Should redirect to the Home page on sign up

## Sign In Page

<!-- concept: handling error mesasges -->
- Should render server error messages

<!-- concept: jwt authentication -->
- Should use JWT authentication

<!-- concept: redirect -->
- Should redirect to the Home page on sign in

<!-- **** -->
<!-- The user is authentiated from here on out  -->
<!-- These are features on previously built pages that need to be added because of authentication -->
<!-- **** -->

## Settings Page

<!-- concept: re-enforce routing -->
- Should exist at /#/settings (template check)

<!-- concept: putting the U in CRUD -->
- Should updated user's settings when "Update Settings" is clicked

<!-- concept: jwt authentication + redirect -->
- Should logout user and redirect to Home Page when the "Logout" button is clicked


## Profile

<!-- concept: conditional rendering -->
- Should render a "Editing Profile Settings" button should navigate to Settings Page

## Header

<!-- concept: conditional rendering -->
- Should render a link displaying username that navigated to Profile Page
- Should render a "Settings" link that navigates to Settings Page

<!-- **** -->
<!-- These modules can be done in parallel -->
<!-- **** -->

# Feature - Authoring Comment (requires authentication)

## Article Page
- Should post a new comment when "Post Comment" is clicked
- Should delete an existing comment when the trash can is clicked 

# Feature - Authoring Article

## Create Article Page
- Should exist at /#/editor (tmplate check)
- Should add a tag to the tag list when "Enter" is pressed in the tags input
- Should post a new article when "Publish Article" is clicked

## Edit Article Page
- Should exist at /#/editor/:articleId (template check)
- Should update the article when "Publish Article" is clicked

## Article Page
- Should render a "Edit Article" button and "Delete Article" button if authored by the authenticated user
- Should delete the article when "Delete Article" is clicked
- Should navigate to the Edit Article Page when "Edit Article" is clicked

## Header
- Should render a "New Post" link that navigates to Create Article Page

# Feature - Following

## Profile Page
- Should render a "Follow User" button if user is not followed by authenticated user
- Should render an "Unfollow User" button if user is followed by authenticated user
- Should follow user when "Follow User" buton is clicked
- Should unfollow user when "Unfollow User" buton is clicked
- Should not allow an authenticated user to follow themself

## Home Page
- Should contain a "Your Feed" tab
- Should render a feed of articles authored by users that the authenticated user is following when the "Your Feed" tab is selected
- Should render the text "No articles are here... yet" if there are no articles to display

# Feature - Favoriting

## Article Snippet
- Should render a favorite icon
- Should favorite the article when the favorite icon is clicked and the article has not been favorited yet
- Should unfavorite the article when the favorite icon is clicked  and the article has been favorited
