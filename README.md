<a name="readme-top"></a>
<br />

<div align="center">

  <h3 align="center">Travel N Share</h3>

  <p align="center">
   Backend of Travel N Share, a social network for travellers to connect and share their journeys.
    <br />
    <a href="https://github.com/fabiohidekihirose/travel-n-share-frontend"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://github.com/fabiohidekihirose/travel-n-share-backend"><strong>Check out Home Decor Frontend</strong></a>
    <br />
    <br />
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#features">Features</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

[Travel N Share app](https://travel-n-share.vercel.app/)

Travel N Share is a vibrant social network designed exclusively for adventurous travelers to connect and exchange their remarkable journeys from around the globe. Whether you're a seasoned globetrotter or a novice explorer, Travel N Share provides a platform to share and discover incredible travel experiences. You'll immerse yourself in a supportive community of like-minded travelers, fostering a sense of wanderlust and inspiration as you embark on your own unforgettable adventures.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This section lists frameworks/libraries used to bootstrap the project.

- [![TypeScript][typescript]][typescript-url]
- [![Node][node.js]][node-url]
- [![Express][express.js]][express-url]
- [![Prisma][prisma]][prisma-url]
- [![PostgreSQL][postgresql]][postgresql-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

To get a local copy up and running follow these simple steps.
Please keep in mind this repo only includes the backend, you will also need fork Travel N Share's frontend repo which can be found here:
[travel-n-share-frontend](https://github.com/fabiohidekihirose/travel-n-share-frontend)

### Installation

_Below you will find the basics on installation and set up._
_Please note you will need to follow the steps found on [travel-n-share-frontend](https://github.com/fabiohidekihirose/travel-n-share-frontend) before any deployment can be done._

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Module Installation
   ```sh
   npm install
   ```
3. Create a Postgres Database
   ```sh
   psql postgres
   CREATE DATABASE db_name_here
   ```
4. Configure .env File
   _Create a .env file in your ROOT directory with the following_
   ```js
   DATABASE_URL = 'postgresql://postgres:test@localhost:5432/db_name_here';
   ACCESS_TOKEN_SECRET="your_access_token_secret_here"
   PORT=8000
   ```
5. Migration and Seeds via Prisma
   ```sh
   npx prisma migrate dev
   npx prisma generate
   npx prisma db seed
   ```
6. Run Server
   The server will be running on port 8000.
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Features

- Create an account
- Personal dashboard
- Save a post to favorites
- Create a new post
- Follow other users
- Feed
- Comment on posts
- Explore section

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

- Hideki Hirose - [@fabiohidekihirose](https://github.com/fabiohidekihirose) - fabiohidekihirose@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[typescript]: https://img.shields.io/badge/TypeScript-007acc?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/
[node.js]: https://img.shields.io/badge/node.js-000000?style=for-the-badge&logo=nodedotjs&logoColor=66cc33
[node-url]: https://nodejs.org/en/
[express.js]: https://img.shields.io/badge/express.js-black?style=for-the-badge
[express-url]: https://expressjs.com/
[prisma]: https://img.shields.io/badge/Prisma-002e63?style=for-the-badge&logo=prisma&logoColor=white
[prisma-url]: https://www.prisma.io/
[postgresql]: https://img.shields.io/badge/PostgreSQL-008bb9?style=for-the-badge&logo=postgresql&logoColor=white
[postgresql-url]: https://www.postgresql.org/
