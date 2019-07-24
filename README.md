# ReactNativeListDemo

This is a react native list demo which is using NYTimes Api for getting the list of items.

### Code Setup

```sh
$ git clone https://github.com/NikhilVashistha/ReactNativeListDemo.git
$ cd ReactNativeListDemo
$ npm install
```

### For running app

**ios**

```sh
$ react-native run-ios
```

**android**

```sh
$ react-native run-android
```

### For running test

```sh
$ npm run test
```

##### Generating coverage report

```sh
$ npm run test:coverage
```

### Components

**App** - It is top level component contains AppNavigator.

**AppNavigator** - It is a component used for navigation in app. It contains all the screens to navigate. By default it will show ListScreen. It is included in App.js.For app navigation pupose i am using [react-navigation](https://reactnavigation.org/).

**List** - It is a component used for showing the list of articles with some details.

**ListItem** - It is a pure component used for showing the list item in List component.

**ListItemDetail** - It is a component used for showing the details of particular article which includes title, author name, date, abstract.

**Header** - It is a stateless component used for showing the Header.
