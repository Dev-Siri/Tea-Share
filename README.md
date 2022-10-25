# Tea share

The platform for sharing images.

## Description

Tea share is an online image sharing platform for Android and the Web. It provides UI to interact and scroll through posts and allows you to
create posts easily with the click of a button. It is built with React native for mobile (iOS/Android) and **[Next.js](https://nextjs.org)** for the web version. It uses **[MongoDB](https://www.mongodb.com)** as the
database, **[Node.js](https://nodejs.org)** as the server side runtime and **[Firebase](https://firebase.google.com)** for authentication and storage for all the user generated data.

The web version is a younger version of the App.
It was released for more users on desktop.

Currently the IOS version is not available but it will be soon. After the IOS version is ready,
it will be available in this repository.

> NOTE: The Mobile version of the app is currently migrating from React Native to Flutter. It is currently not available but it is still being worked on.

## Technologies

- Flutter
- Dart
- Typescript
- React.js
- Next.js
- Sass
- Node.js
- MongoDB
- Firebase

# Getting started

### Installation

- Run this command to clone the project

```sh
$ git clone https://github.com/Dev-Siri/Tea-share.git
```

Now enter the directory like (web or server) to start

```sh
$ cd web
    # OR
$ cd server
    # OR
$ cd mobile
```

- Make sure to run npm/yarn install to install the dependencies for the **Web and Server** only, before running the project

```sh
$ npm install
    # OR
$ yarn install
```

- Then run npm/yarn start to run the project locally

> Warning: The project is currently undergoing a migration from react native to flutter. Recommended to not use the mobile version for now.

```sh
# For mobile version
$ flutter run

# For web version
$ npm run dev
```

## License

This project MIT Licensed - see the LICENSE.md file for details
