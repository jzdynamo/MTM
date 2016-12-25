# MTM
Multi-platform Todo-list with Minimal code (under construction)

A simple JavaScript-based todo-list app supports multiple platforms including:
- web
- iOS
- Android
- MacOS
- Windows

with JavaScript technologies like: 
- React
- React Native
- NodeJS + Express + MongoDB
- Electron

This project is built as an example of how code is shared among different platforms using technologies in JavaScript ecosystem. It can be used as a skeleton for building more complex multi-platform applications.

The planned struture of the project is like:
```
- src
  - foundation (shared js code for both server and clients)
  - server (NodeJS + Express + Mongoose)
  - client
    - common (shared client business logic: Redux)
    - native-common (shared React Native views between iOS and Android)
    - ios (views)
    - android (views)
    - web (views)
    - desktop (Electron-specific views)
```
