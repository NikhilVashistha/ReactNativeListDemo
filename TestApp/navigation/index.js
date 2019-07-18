import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator
} from "react-navigation";

import List from "../screens/List";
import ListItemDetail from "../screens/ListItemDetail";
import DummyComponent from "../components/DummyComponent";

const AppNavigator = createStackNavigator({
  List,
  ListItemDetail
});

const AppDrawerNavigator = createDrawerNavigator({
  Home: AppNavigator,
  DummyComponentOne: DummyComponent,
  DummyComponentTwo: DummyComponent,
  DummyComponentThree: DummyComponent,
  DummyComponentFour: DummyComponent
});

export default createAppContainer(AppDrawerNavigator);
