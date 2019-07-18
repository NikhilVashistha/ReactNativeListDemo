import React, { Component } from "react";
import {
  ImageBackground,
  ActivityIndicator,
  StyleSheet,
  View
} from "react-native";

export default class CustomImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  render() {
    const { imagePath, imgStyle = {} } = this.props;
    const { isLoading } = this.state;
    return (
      <View style={[styles.baseImage, imgStyle]}>
        <ImageBackground
          source={{ uri: imagePath }}
          style={imgStyle}
          onLoadStart={() => this.setState({ isLoading: true })}
          onLoadEnd={() => this.setState({ isLoading: false })}
          {...this.props}
        >
          {isLoading ? <ActivityIndicator size="small" color={"blue"} /> : null}
          {this.props.children}
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  baseImage: {
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25
  }
});
