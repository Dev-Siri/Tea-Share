<p align="center">
  <img src="images/logo.png" height="150" width="150" />
</p>

<h1 align="center">Tea Share</h1>

## Description

Tea Share is an online social media app for iOS, Android and the Web. It provides UI to interact and scroll through posts and allows you to
create posts easily with the click of a button. It is built with Flutter for mobile (iOS/Android) and **[SvelteKit](https://kit.svelte.dev)** for the web version. It uses **[MongoDB](https://www.mongodb.com)** as the
database, **[Go](https://go.dev)** as the server side language and **[Firebase](https://firebase.google.com)** for authentication + storaging all the user generated data. The mobile app is made with **[Flutter](https://flutter.dev)**, a cross platform framework.

Currently, even though the Flutter project has a **iOS** folder, the iOS version is not configured for it and will not be available for a long time. (I don't have a MacBook)

## Technologies

- TailwindCSS
- TypeScript
- Firebase
- Next.js
- Flutter
- MongoDB
- React
- Dart
- Go

# Getting started

### Installation

- Run this command to clone the project

```sh
git clone https://github.com/Dev-Siri/Tea-Share.git
```

Enter the directory for an app.

```sh
$ cd apps/web
  # OR
$ cd apps/server
  # OR
$ cd apps/mobile
```

- Install the dependencies for the web project before running the project.

```sh
$ pnpm i
```

- For the mobile version, you need to have the [Flutter SDK](https://docs.flutter.dev/get-started/instal) installed on your system.

- And for the Server, you need to have [Air](https://github.com/cosmtrek) & [Go](https://go.dev/dl) installed. To install it, run:

```sh
# with install.sh (preferred way according to air)
$ curl -sSfL https://raw.githubusercontent.com/cosmtrek/air/master/install.sh | sh -s -- -b $(go env GOPATH)/bin

# or you can use go install
$ go install github.com/cosmtrek/air@latest
```

- Then run flutter, pnpm or air to run the project locally.

```sh
# mobile
$ flutter run

# web
$ pnpm dev

# server
$ air
```

### Connecting A Physical Device To The Flutter App.

In the **Mobile** directory, there is a [connect.py](apps/mobile/connect.py) script that allows you to connect to a physical android device with [ADB](https://developer.android.com/studio/command-line/adb). <br />
Script usage:

```sh
$ python connect.py <IP-ADDRESS> <PORT>
```

Make sure your Android device is connected to your computer with USB and has [Wireless Debugging](https://medium.com/android-news/wireless-debugging-through-adb-in-android-using-wifi-965f7edd163a) enabled in the Developer Settings.

### Testing The Production Version

#### Web

To build the web project, run:

```sh
$ pnpm build
```

Then to start the production version, run:

```sh
$ pnpm start
```

#### Server

To compile the server version, run:

```sh
$ go build -tags netgo -ldflags '-s -w' -o tea-share
```

Then run the binary:

```sh
$ ./tea-share
```

#### Mobile

For building the mobile app for android, follow the official [Flutter Documentation](https://docs.flutter.dev/deployment/android) <br />

## License

This project is MIT Licensed - see the [LICENSE.md](LICENSE.md) file for details.
