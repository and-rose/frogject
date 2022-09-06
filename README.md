# RE:GROUP

## Installing dependencies

1. Download and install [NodeJS LTS](https://nodejs.org/en/)
2. Open [Visual Studio Code](https://code.visualstudio.com/) and create a new [terminal](https://code.visualstudio.com/docs/terminal/basics). 
3. Install the following global libraries:
```sh
$ npm install --global expo-cli
$ npm install --global yarn
```

## Preparing the codebase
1. Clone this repository and open the folder in [Visual Studio Code](https://code.visualstudio.com/)
2. Create a new terminal and execute yarn to install all project specific dependencies:
```sh
$ yarn install
```
This will create a new directory in the project folder called `node_modules` where a large collection of external JavaScript libraries will live. These packages are specified in the `package.json` file and automatically managed by [Yarn](https://yarnpkg.com/)

## Running the Local Dervelopment Server
You can now start the local development server using:
```sh
$ yarn start
```

This will open the Expo CLI and present a QR Code in the terminal. You will need the [Expo Go](https://expo.dev/client) mobile app to access the application you are hosting. This page will hot-refresh as you make changes to the code base and output errors to your terminal. Happy prototyping!
