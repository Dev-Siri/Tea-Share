<div style="display: flex; justify-content: center;">
  <img src="images/logo.png" height="150" width="150" style="border-radius: 100%;" />
</div>

<h1 style="text-align: center;">Tea Share</h1>

## Description

Tea Share is an online social media app for iOS, Android and the Web. It provides UI to interact and scroll through posts and allows you to
create posts easily with the click of a button. It is built with Flutter for mobile (iOS/Android) and **[Next.js](https://nextjs.org)** for the web version. It uses **[MongoDB](https://www.mongodb.com)** as the
database, **[Node.js](https://nodejs.org)** as the server side runtime and **[Firebase](https://firebase.google.com)** for authentication and storage for all the user generated data. The mobile app is made with **[Flutter](https://flutter.dev)**, a cross platform framework.

Currently, even though the Flutter project has a **iOS** folder, the iOS version is not configured for it and will not be available for a long time.

## Technologies

- Tailwindcss
- TypeScript
- JavaScript
- Firebase
- Next.js
- Flutter
- MongoDB
- React
- Dart
- Node

# Getting started

### Installation

- Run this command to clone the project

```sh
git clone https://github.com/Dev-Siri/Tea-share.git
```

Enter a version directory.

```sh
cd web
  # OR
cd server
  # OR
cd mobile
```

- Make sure to run npm, yarn or pnpm install to install the dependencies for the **Web and Server** only, before running the project.

```sh
npm i
  # OR
yarn
  # OR
pnpm i
```

- Then run flutter, npm, yarn or pnpm to run the project locally.

```sh
# For mobile version
flutter run

# For web version
pnpm dev

# For the server version (with live reloading)
pnpm dev
```

### Connecting A Physical Device To The Flutter App.

In the **Mobile** directory, there is a [connect.py](mobile/connect.py) script that allows you to connect to a physical android device with [ADB](https://developer.android.com/studio/command-line/adb). <br />
Script usage:

```sh
python connect.py <IP-ADDRESS> <PORT>
```

Make sure your android device is connected to your computer with USB and has [Wireless Debugging](https://medium.com/android-news/wireless-debugging-through-adb-in-android-using-wifi-965f7edd163a) enabled in the Developer Settings.

### Building The Production Version

#### Web & Server

To build the web app & server, run:

```sh
npm run build
  # OR
yarn build
  # OR
pnpm build
```

Then to start the production version, run:

```sh
npm start
  # OR
yarn start
  # OR
pnpm start
```

#### Mobile

For building the mobile app for android, follow the official [Flutter Documentation](https://docs.flutter.dev/deployment/android) <br />

## License

This project is MIT Licensed - see the [LICENSE.md](LICENSE.md) file for details.
