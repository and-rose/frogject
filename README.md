# Welcome to the Frogject

### You can find out about our design process [here](https://github.com/and-rose/frogject/wiki)

## What is in this Repository?

This repository contains an Expo supported React Native codebase. The bulk of structure defining scripts can be found within the `src/` directory. Within the 'src/` directory you will find 5 folders.

- `components/` contains reusable elements throughout the application
- `constants/` contains various static data used for mocking designs in place of a full fleshed out backend. Themes and Message data are stored in this directory.
- `navigation/` is home to specifications for how each page component is linked to each other.
- `screens/` is where each screen present in the application is stored and defined.
- `utils/` contains an assortment of niche functions used throughout the rest of the codebase.

Upon running `yarn start` the entrypoint for the application is found within `App.tsx`.

## Getting Started

### Installing dependencies

1. Download and install [NodeJS LTS](https://nodejs.org/en/)
2. Open [Visual Studio Code](https://code.visualstudio.com/) and create a new [terminal](https://code.visualstudio.com/docs/terminal/basics). 
3. Install the following global libraries:
```sh
$ npm install --global expo-cli
$ npm install --global yarn
```

### Preparing the codebase
1. Clone this repository and open the folder in [Visual Studio Code](https://code.visualstudio.com/)
2. Create a new terminal and execute yarn to install all project specific dependencies:
```sh
$ yarn install
```
This will create a new directory in the project folder called `node_modules` where a large collection of external JavaScript libraries will live. These packages are specified in the `package.json` file and automatically managed by [Yarn](https://yarnpkg.com/)

### Running the Local Development Server
You can now start the local development server using:
```sh
$ yarn start
```

This will open the Expo CLI and present a QR Code in the terminal. You will need the [Expo Go](https://expo.dev/client) mobile app to access the application you are hosting. This page will hot-refresh as you make changes to the code base and output errors to your terminal.
