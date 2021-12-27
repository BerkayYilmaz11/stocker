# Stocker

Demo stock market mobile application created using React Native and Typescript.

## Installation

The projet is developed using [Expo](https://docs.expo.dev/), in node environment. If you dont have node installed on your device you can download it from [Node.js](https://nodejs.org/en/download/) 
To run project you need to install expo-cli using:
```sh
npm install --global expo-cli
```

Project consists of two parts; `Server` and `Application`. 

### Server

For demonstrate api calls on application, fake rest-api created using [json-server](https://github.com/typicode/json-server). It generates a dummy database and exports it do db.json file and starts a server on localhost. 

Server uses JWT Token for authorization that expires in 8 hours 

To start the server: 
```sh
cd server
npm start
```

### Application

It is a demo stock market application ( unfortunetly with fake currency pair data because Faker Api does not have stock api ) consists of Login, StockList and StockDetails screen. You must authenticate to system for getting stock list and details. 

To run the app, open another terminal and type: 
```sh
cd app
expo start
```
Expo-Cli runs Expo Development Server and Metro bundler and expo starts on [Localhost-19002](http://localhost:19002)

You can select android or ios emulator option in order to run it on your local device.

