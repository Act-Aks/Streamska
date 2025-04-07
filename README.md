# Streamska - Content Streaming App

This is a [**React Native**](https://reactnative.dev) project for Android, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## About Streamska

Streamska is a content aggregation and streaming application that allows users to browse and watch movies, TV series, and other video content. The app does not host any content itself but rather scrapes and indexes content from various external websites, providing a unified interface for users to discover and access content.

## Legal Disclaimer

**IMPORTANT:** Streamska does not host, store, or distribute any media content. It functions solely as an indexing and discovery tool that aggregates metadata and links from publicly available sources on the internet.

- All content accessible through this application is hosted by third-party websites.
- We do not claim ownership of any content displayed in the application.
- Users are responsible for ensuring their use of this application complies with local laws regarding content access.
- If you are a content owner and believe your content is being linked without authorization, please contact us for prompt removal.

The developers of Streamska are not responsible for and have no control over the content that users access through the application.

# Getting Started

> **Note**: This project is currently focused on **Android development**. iOS setup instructions are available in a collapsed section at the end of this document.

## Prerequisites

Make sure you have completed the [React Native Environment Setup](https://reactnative.dev/docs/environment-setup) (Android section) before proceeding.

> **Important**: This project uses **Yarn** as the package manager. npm is not supported. Please ensure you have Yarn installed before proceeding.

Required tools:

- Node.js (version specified in `.nvmrc`)
- Yarn package manager
- Android development environment

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
yarn start
```

## Step 2: Build and run your app on Android

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android app:

```sh
yarn android
```

If everything is set up correctly, you should see your new app running in the Android Emulator or your connected Android device.

This is one way to run your app — you can also build it directly from Android Studio.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload by pressing the <kbd>R</kbd> key twice or selecting **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Project Structure

The Streamska project follows a standard React Native project structure with a focus on maintainability and scalability:

```
streamska/
├── android/          # Android-specific native code and configuration
├── ios/              # iOS-specific native code and configuration
├── src/              # Main application source code
│   ├── __specs__/    # Test files and its setup
│   ├── components/   # Reusable UI components
│   ├── screens/      # Screen components for different app views
│   ├── types/        # TypeScript type definitions
│   ├── utils/        # Utility functions and helpers
│   └── index.tsx     # Main entry point for the app
└── ...               # Configuration files (babel, eslint, etc.)
```

> **Note**: As mentioned earlier, the current development focus is on Android, but the project structure supports both platforms.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

<details>
<summary><b>iOS Setup Instructions</b> (Click to expand)</summary>

## iOS Setup

> **Note**: These instructions are provided for reference but are not the current focus of development.

### Prerequisites

Make sure you have completed the [React Native Environment Setup](https://reactnative.dev/docs/environment-setup) (iOS section) before proceeding.

### CocoaPods Installation

For iOS, you need to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

### Running on iOS

```sh
yarn ios
```

If everything is set up correctly, you should see your new app running in the iOS Simulator or your connected iOS device.

You can also build and run the app directly from Xcode.

### iOS-specific Reload

To forcefully reload the app on iOS, press <kbd>R</kbd> in iOS Simulator.

</details>
