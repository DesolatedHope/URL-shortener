# URL Shortener

This application allows users to shorten URLs and track analytics such as the number of clicks for each shortened link. To ensure security and authorization, users must be authenticated using JWT tokens before accessing the service. The front end is built with React, while the backend is developed with Flask. MongoDB is used as the database to store shortened URLs and their analytics. The backend server is hosted on Microsoft Azure using a virtual machine, and the front end is hosted on Vercel.

Two types of services are available to users: Normal and Premium. With the Normal service, only the provided website link is shortened. However, by opting for the Premium service, users also receive a QR code for the website in addition to the shortened URL.

Website is deployed  [here](https://shortyaz.vercel.app/)

Backend is deployed  [here](http://shorty.westeurope.cloudapp.azure.com)


## Features

- Shorten long URLs to create more manageable links.
- Track analytics for each shortened URL, including the number of clicks.
- Authenticate users using JWT tokens for security.
- QR Code of the website for Premium users.

## Installation

To run the application locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/DesolatedHope/URL-shortener.git
   cd URL-shortener
   cd frontend
   npm install
   npm run dev
   

2. Navigate to the backend directory and install the required dependencies:

   ```bash
   git clone https://github.com/DesolatedHope/URL-Shortener_backend.git
   cd URL-Shortener_backend
   source env/bin/activate
   pip install -r requirements.txt
   flask run
   

## Usage

1. Register or log in to access the URL Shortener service.
2. Paste a long URL into the input field and click the "Shorten Now!" button.
3. Copy the shortened URL and share it as needed.
4. Track analytics for each shortened URL by viewing the dashboard.
5. Opt for premium service if need a QR code :)

## Work Distribution

- Srinjoy, Himanshu, Shuvraneel - Login + Signup Page
- Himdyuti, Shashvat, Aditya, Kalidas - Backend + Integration + Deployment
