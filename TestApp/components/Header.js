import React from "react";
import { Button } from "react-native";
import { withNavigation } from "react-navigation";
import { Strings } from "../Config";

class Header extends React.PureComponent {
  render() {
    return (
      <Button
        title={Strings.TITLE_MENU}
        onPress={() => this.props.navigation.openDrawer()}
      />
    );
  }
}

// withNavigation returns a component that wraps Header and passes in the
// navigation prop
export default withNavigation(Header);
