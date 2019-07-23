import React, { PureComponent } from "react";

import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { connect } from "react-redux";

import CustomImage from "../components/CustomImage";

class ListItemDetail extends PureComponent {
  render() {
    const { itemDetails } = this.props;
    return (
      <View style={styles.containerView}>
        <CustomImage
          style={styles.imageView}
          resizeMode={"contain"}
          source={{
            uri:
              itemDetails.media &&
              itemDetails.media.length > 0 &&
              itemDetails.media[0].type == "image"
                ? itemDetails.media[0]["media-metadata"] &&
                  itemDetails.media[0]["media-metadata"].length > 0 &&
                  itemDetails.media[0]["media-metadata"][0].url
                : null
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.titleView}>{itemDetails.title}</Text>

          <Text style={styles.authorView}>{itemDetails.byline}</Text>
          <Text style={styles.dateView}>{itemDetails.published_date}</Text>
          <Text style={styles.dateView}>{itemDetails.abstract}</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { listItem } = state;
  return { itemDetails: listItem.itemDetails };
};

export default connect(mapStateToProps)(ListItemDetail);

const styles = StyleSheet.create({
  containerView: {
    padding: 16,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageView: {
    width: 150,
    height: 150
  },
  textContainer: {
    marginHorizontal: 10,
    flex: 1,
    marginTop: 15
  },
  titleView: {
    fontSize: 16,
    color: "black"
  },
  authorView: {
    color: "grey",
    fontSize: 16,
    marginTop: 6
  },
  dateView: {
    color: "grey",
    fontSize: 16,
    marginTop: 6
  },
  abstractView: {
    fontSize: 16,
    marginTop: 6
  }
});
