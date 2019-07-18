import React, { PureComponent } from "react";

import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import CustomImage from "../components/CustomImage";

export default class ListItem extends PureComponent {
  render() {
    const { itemData, onPressItem } = this.props;

    return (
      <TouchableOpacity onPress={onPressItem}>
        <View style={styles.containerView}>
          <CustomImage
            style={styles.imageView}
            borderRadius={25}
            resizeMode={"contain"}
            source={{
              uri:
                itemData.media[0].type == "image"
                  ? itemData.media &&
                    itemData.media.length > 0 &&
                    itemData.media[0]["media-metadata"] &&
                    itemData.media[0]["media-metadata"].length > 0 &&
                    itemData.media[0]["media-metadata"][0].url
                  : null
            }}
          />
          <View style={styles.textContainer}>
            <Text
              style={styles.titleView}
              numberOfLines={2}
              ellipsizeMode={"tail"}
            >
              {itemData.title}
            </Text>

            <Text style={styles.authorView}>{itemData.byline}</Text>
            <Text style={styles.dateView}>{itemData.published_date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  containerView: {
    padding: 16,
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageView: {
    width: 50,
    height: 50
  },
  textContainer: {
    marginHorizontal: 10,
    flex: 1
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
    textAlign: "right",
    flex: 1
  }
});
