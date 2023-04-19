# Michigan Outdoors

This app is for people looking to explore the great outdoors in the beautiful state of Michigan. Users will be able to sign up and log in to their account, and from there, they will be able to browse, explore, and review various parks throughout Michigan from a national park to different state parks. 

## Technologies

Within this app, I use Cloudinary to store all of the photo data that people upload in their reviews. Once the image is sent to the Cloudinary storage, a secure URL will be sent to the app's backend so that the photo can be rendered on screen. At the moment, upon deleting a review, you will not be able to delete the photo from the Cloudinary storage folder, but that feature will be updated soon. 

In the future, along with that update, the app will allow users to plan trips to Michigan parks, it will allow users to create a Michigan hiking bucket list, and users will be able to suggest a new park or trail that they do not see on the app currently.

## Installation

While the app is not yet fully deployed, if you fork and clone this repository, follow the steps to run the app:

1. In your terminal, to start the backend, cd into the server folder and run the following commands: 
-`pipenv install`
-`pipenv shell`
-`python app.py`. This will start the server.

2. To start the frontend, cd into the client folder, and run the following command: `npm install && npm start`. This will install any dependencies needed, and it will start the app. 

