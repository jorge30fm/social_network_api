# social_network_api


![LICENSE BADGE](https://img.shields.io/badge/license-ISC-brightgreen?style=for-the-badge)

## Table of Contents

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributions](#how-to-contribute)
6. [Contact Me](#contact)

## Description
This repository contains a Social Network API. Using MongoDB and Mongoose, this app allows the storage and retrieval of data from a database. Database can hold user information, as well as information about their thoughts and reactions to those thoughts. The database also keeps tracks of the user's friends. Schemas and models created through mongoose in order to organize and validate the data going to the database. This API can be expanded upon to include more capabilities and can be easily integrated with client side code to create a fully functional social network app


## Installation
Download zip files from the repository and open folder in VSCODE. Make sure to have Node.js and MongoDB installed. In the terminal, install any dependencies (express.js and mongoose, nodemon optional). To start the server localy enter in the terminal 'node server'js'.


## Usage
This repository contains an API for a Social Network Web Application. Below are the options for api calls

* ../api/ -->GET all users & POST add user
* ../api/users/:userId -->GEt user by id, PUT/edit user data, DELETE/remove user
* ../api/:userId/friends/:friendId --> PUT/add friend, DELTE/remove friend
* ../api/thoughts/ --> GET all thoughts
* ../api/thoughts/:userId -->POST/add a thought
* ../api/thoughts/:userId/:thoughtId --> DELTE a thought
* ../api/thoughts/:thoughtId --> GET a single thought, UPDATE a thought
* ../api/thoughts/:thoughtId/reactions --> POST/add a reaction
* ../api/thoughts/:thoughtId/reactions/:reactioId --> DELETE a reaction

Video Demo: https://watch.screencastify.com/v/L9FTg0MhPmqSfHHTq9Kz

## License

Distributed under **ISC**. See [License](https://spdx.org/licenses/ISC.html) for more information.



ISC License

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

## Badges

![LICENSE BADGE](https://img.shields.io/badge/license-ISC-brightgreen?style=for-the-badge)

## How to Contribute

To contribute to this application, make sure to fork the repository and clone it to your computer. Email me with any questions or any ideas about possible contributions. Then create a pull request for your code to be reviewed before being merged to the application.

## Tests
No test provided. Use Insomnia to test api routes locally.


## Contact

For any questions, concerns, or ideas for contributions, email me or contact me via gitHub.

**GitHub Profile:** <https://github.com/jorge30fm>

**GitHub Repository:** <https://github.com/jorge30fm/social_network_api>

**Email:** jorge30fm@gmail.com
