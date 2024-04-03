
   Halo CE Fan Site | Nade Jump
==================================

⬜⬜⬜⬜⬜⬛⬛⬛⬛⬛⬛⬜⬜⬜⬜⬜\
⬜⬜⬜⬛⬛🟩🟩🟩🟩🟩🟩⬛⬛⬜⬜⬜\
⬜⬜⬛⬛🟩🟩🟩🟩🟩🟩🟩🟩⬛⬛⬜⬜\
⬜⬜⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜\
⬜⬛🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩⬛⬜\
⬛🟩⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🟩⬛\
⬛🟩⬛🟧⬜⬜🟧🟧🟧🟧⬜⬜🟧⬛🟩⬛\
⬜⬛🟧🟨⬜🟨🟨🟨🟨🟨🟨⬜🟨🟧⬛⬜\
⬜⬛🟧🟨⬜🟨🟨🟨🟨🟨🟨⬜🟨🟧⬛⬜\
⬜⬛🟧🟨🟨🟨🟨🟧🟧🟨🟨🟨🟨🟧⬛⬜\
⬛🟩⬛🟧⬜🟨⬛⬛⬛⬛🟨⬜🟧⬛🟩⬛\
⬛🟩🟩⬛⬛⬛🟩🟩🟩🟩⬛⬛⬛🟩🟩⬛\
⬜⬛🟩🟩🟩⬛🟩⬛⬛🟩⬛🟩🟩⬛⬛⬜\
⬜⬜⬛⬛🟩⬛🟩🟩🟩🟩⬛🟩⬛⬛⬜⬜\
⬜⬜⬜⬛⬛⬛🟩🟩🟩🟩⬛⬛⬛⬜⬜⬜\
⬜⬜⬜⬜⬛⬛🟩🟩🟩🟩⬛⬛⬜⬜⬜⬜\
⬜⬜⬜⬜⬜⬜⬛⬛⬛⬛⬜⬜⬜⬜⬜⬜\


  About:
==========

This is a full-stack, CRUD website using RESTful methods. It is a fan-site for the outdated PC game Halo CE, focusing on the items in the game. Users can create, read, update, and delete reviews on a list of all of the in-game items. I will add more to this in the future to be a more encompassing reseource later on.


  Acknowledgements
====================

Thanks to Will Turnbow from dafont.com for use of the iconic Halo font, even though it is not implemented yet.
Thanks to halopedia.com for informational content regarding items.
Thanks to instructional team at GA for debugging help!
Thanks to Microsoft, Gearbox, and Bungie for creating an amazing game 20+ years ago!


  Technology used
====================

This API is made using MongoDB/Mongoose, Express, Node.js, and bcrypt.


  Approach
============

This is a basic CRUD API that utilizes the Models, Views, Controllers or MVC file structure. It uses three models: items, reviews, and users, only reviews is full-CRUD at this time. Reviews is embedded in items and users is independent of both, meaning this only uses two collections for its database. I utilized bcrypt to store passwords for the users model as hashes rather than plain-text. I built this with a variety of screen sizes in mind, so I utilized flexbox for ability to scale down. 

  Unsolved Problems
=====================

There are a lot of things left undone in this project that you will see some evidence of. I plan on revisitng this as soon as I can find the time to add these features, and any more I can think of that seem relevant or useful. 

Things I wanted to do that I couldnt accomplish on time are:
-user authentication with JWT (meaning users can only edit/delete their own reviews)
-populate users to include username on reviews
-dynamically changing background using the other background images
-have a show/hide button for reviews
-have search/filter for items or reviews
-have a logout for users
-have edit username/password
-have a page to show each individual item
-have a page for each user with their reviews


  User Stories
================

    "As a fan of Halo it is nice to see a fan page specifically dedicated to items and stats that lets us leave comments/reviews to discuss their utility in-game."

    "As a casual gamer it is nice to see this much dedication to a game I have never played before, maybe I will check it out."

    "As a software engineer, I can see this app, while simple, is an example of a CRUD app using RESTful routes. I can see the author understands how to implement those."

  Wireframes
==============

![Home](https://user-images.githubusercontent.com/115426977/204744965-99aad710-4863-410a-bb88-b6fb72cb9d0f.png)
![Items](https://user-images.githubusercontent.com/115426977/204744970-62275733-9c40-4f11-af73-7d1ed5916f18.png)
![showItem](https://user-images.githubusercontent.com/115426977/204744973-ce295589-ce62-46ba-8f7c-f05146f99c70.png)
![addReview](https://user-images.githubusercontent.com/115426977/204744958-9e2eef0f-e380-4cf1-ba2a-c1b55999552d.png)

  Link to finished product
============================

Please leave a review or a comment! 🤙

https://halocefansite-production.up.railway.app/
