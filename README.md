# README.md for Homework 4
## Author: Jessie Anderson
## Date: August 4, 2016

I created the frontend of a basic blogging app that allows the user to edit posts, and for each post to put in a title, content, and tags. The posts show up on a homepage and the user can navigate to each post to show the whole thing and to edit it. All changes get pushed to a remote state (backend), and the state is received from this backend as well.

I didn't have time to style it as much as I would have liked, so it looks bad, but at least the functionality is there. The hardest part was connecting the remote with the local state for sure and making sure components rendered as expected.

**ADDED:** Signin and signout functionality. If someone is not logged in, then they can't make a new post. If someone is logged in, there's a signout button on the home page that they can click to log out. Anyone can edit any posts, and the author's name displays on the post. If author 1 creates a post and author 2 edits that post, then author 2 becomes the author displayed on that post.
