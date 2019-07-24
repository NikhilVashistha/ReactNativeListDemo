/**
 * Sample React Native List App
 */

import React, { Component, Fragment } from "react";

import {
  SafeAreaView,
  StatusBar,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  View,
  Button,
  Text
} from "react-native";

import ListItem from "./ListItem";
import Axios from "react-native-axios";
import { Constants, Strings } from "../Config";
import CustomButton from "../components/CustomButton";

import { setListItemDetails } from "../store/ListItemAction";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { TextInput } from "react-native-gesture-handler";

export class List extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: Strings.TITLE_LIST,
      headerStyle: {
        backgroundColor: "lightgreen"
      },
      headerLeft: (
        <CustomButton
          title={Strings.TITLE_MENU_LEFT}
          onPress={() => navigation.openDrawer()}
        />
      )
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      isLoading: false,
      periodValue: 1
    };
  }

  componentDidMount() {
    this.getMostPopularArticles();
  }

  showLoader = show => {
    this.setState({ listData: [], isLoading: show });
  };

  getMostPopularArticles(periodValue = 1) {
    if (!this.validatePeriodVal(periodValue)) {
      return;
    }

    this.showLoader(true);
    Axios.get(Constants.API_POPULAR_ARTICLES(periodValue))
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

  validatePeriodVal = periodValue => {
    if (periodValue == 1 || periodValue == 7 || periodValue == 30) {
      return true;
    }

    setTimeout(() => {
      alert(Strings.HOME_MSG_ERROR_PERIOD);
    });

    return false;
  };

  updatePeriod = periodValue => {
    this.setState({
      periodValue: periodValue
    });
  };

  render() {
    return (
      <Fragment>
        <StatusBar barStyle={"dark-content"} />
        <SafeAreaView>
          {this.state.listData && this.state.listData.length > 0 ? (
            <Fragment>
              <View style={styles.periodContainerView}>
                <Text>{Strings.HOME_TXT_PERIOD}</Text>
                <TextInput
                  value={`${this.state.periodValue}`}
                  style={styles.inputStyle}
                  maxLength={2}
                  keyboardType="number-pad"
                  placeholder={Strings.HOME_PERIOD_PLACEHOLDER}
                  onChangeText={text => {
                    this.updatePeriod(text);
                  }}
                />
                <CustomButton
                  title={Strings.HOME_BTN_SUBMIT}
                  onPress={() => {
                    this.getMostPopularArticles(this.state.periodValue);
                  }}
                />
              </View>
              <FlatList
                data={this.state.listData}
                renderItem={this.renderItem}
                keyExtractor={this._keyExtractor}
                extraData={this.state.listData}
              />
            </Fragment>
          ) : this.state.isLoading ? (
            <ActivityIndicator size="large" />
          ) : (
            <Text>No Data Available</Text>
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

const styles = StyleSheet.create({
  inputStyle: {
    paddingHorizontal: 16,
    marginVertical: 20,
    marginLeft: 10,
    flex: 1,
    borderBottomWidth: 1
  },
  periodContainerView: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16
  }
});
