/**
 * Sample React Native List App
 */

import React, { Component, Fragment } from "react";

import {
  SafeAreaView,
  StatusBar,
  FlatList,
  ActivityIndicator,
  Button
} from "react-native";
import ListItem from "./ListItem";
import Axios from "react-native-axios";
import { Data } from "../Data";
import { Constants, Strings } from "../Config";
import Header from "../components/Header";

import { setListItemDetails } from "../store/ListItemAction";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

export class List extends Component {
  static navigationOptions = {
    title: Strings.TITLE_LIST,
    headerStyle: {
      backgroundColor: "lightgreen"
    },
    headerLeft: <Header />
  };

  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.getMostPopularArticles();
  }

  showLoader = show => {
    this.setState({ isLoading: show });
  };

  getMostPopularArticles() {
    this.showLoader(true);
    Axios.get(Constants.API_POPULAR_ARTICLES)
      .then(response => {
        this.setState({ listData: response.data.results, isLoading: false });
      })
      .catch(error => {
        this.showLoader(false);
      });
  }

  _keyExtractor = (item, index) => `item_${index}`;

  _onPressItem = itemData => {
    this.props.setListItemDetails(itemData);
    this.props.navigation.navigate("ListItemDetail");
  };

  renderItem = ({ item }) => {
    return (
      <ListItem
        onPressItem={() => {
          this._onPressItem(item);
        }}
        itemData={item}
      />
    );
  };

  render() {
    return (
      <Fragment>
        <StatusBar barStyle={"dark-content"} />
        <SafeAreaView>
          {this.state.listData && this.state.listData.length > 0 ? (
            <FlatList
              data={Data.results}
              renderItem={this.renderItem}
              keyExtractor={this._keyExtractor}
            />
          ) : (
            <ActivityIndicator size="large" />
          )}
        </SafeAreaView>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setListItemDetails
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(List);
