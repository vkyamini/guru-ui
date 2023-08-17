# THE GURU

[Website](https://guru-ui.netlify.app/)

The Project is built with the need for the programmers to connect with other programmers 
who are willing to Teach/Learn a particular skill(programming language).

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Authors](#Authors)
- [License](#license)
- [Contact](#contact)

## Introduction

This Fullstack web app allows users to find other programmers based on their skills(learn/teach) or location.
Once the user finds a match user can connect with them by sending an offer to them, Once the offer is sent,
the status is marked pending along with Date and Time.
Depending on the response from the receivers, the status changes to accept/reject based on the receiver's response. 
The receiver can further communicate by sending the details and links to connect. 


## Features

- Handled user authentication using json web tokens and encrypting user passwords with bcrypt.



    ![Screenshot](/img/sign-up.png)



- Allow users to query for other developers by programming language or location through a search bar inspired by google search bar.



    ![Screenshot](/img/searchpage.png)



- Created logic allowing developers to send offers within the application to other developers.
   
  
- Supported multiple statuses for offers( eg: “accepted”, ”rejected”, ”pending”) depending upon the receivers reply.


   ![Screenshot](/img/ashu2.png)


- The user can delete the offer.


     ![Screenshot](/img/yamsfinale.png)

## Video Link

[video Link](https://drive.google.com/file/d/1wAUCFeO3Ug2qqaD7kFXLdbwg8yq8_pi8/view)
 
## Getting Started

### Prerequisites

*  "axios": "^1.4.0",
*  "dotenv": "^16.1.4",
*  "prettier": "^2.8.8",
*  "react": "^18.2.0",
*  "react-dom": "^18.2.0",
*  "react-router-dom": "^6.11.2",
*  "react-scripts": "5.0.1",
*  "react-select": "^5.7.3",
*  "web-vitals": "^2.1.4",
*  "bcrypt": "^5.1.0",
*  "cors": "^2.8.5",
*  "express": "^4.18.2",
*  "jsonwebtoken": "^9.0.0",
*  "mongoose": "^7.2.1"*

### Installation

1. No installation is required. The provided link redirects to the web Application
2. For creating your own similar project, follow the basic requirements below.

    * Clone the repo to your system.
    * Download all the dependencies.
    * Connect back-end to the front-end.
    * [Back-end repo link](https://github.com/vkyamini/guru-api)

## Usage


* npm start for back-end.
* npm start for front-end.
* Creation for dotenv file with database user details is required.


## Technologies Used

- ReactJs
- MongoDB
- NodeJS
- cloudinary
- CSS
- HTML

## Authors

V.K YAMINI

## License

MIT

## Contact

  * [websit](https://yamcodes.com/)
  * [Contact Me](https://yamcodes.com/).
  * [Email](yamini@yamcodes.com)