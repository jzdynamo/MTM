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

## Progress
The skeletons of the following items are being constructed:
- [x] Shared logic (Redux)
- [x] Web client (React + Webpack)
- [x] Desktop Client (Electron)
- [ ] Mobile Client (React Native)
- [ ] Server (Express + MongoDB)

After the development of the skeletons, we will continue improving the implementation by:
- [ ] Better JS code sharing implementation
- [ ] Better style sharing
- [ ] Tests (Jest)
- [ ] Type-checking (Flow)

## Install
Please ensure you've installed the lastest node. If not, please run `brew install node` first (install brew [here](http://brew.sh/)).

Then setup the project by:
```
npm install
```

## Run
### Web
```
npm run dev-web 
```
Open [localhost:8080](http://localhost:8080).

### Desktop
```
npm run dev-desktop
```

## License
MTM is released under the [Apache-2.0](https://opensource.org/licenses/Apache-2.0).
