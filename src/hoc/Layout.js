import React, { Component, Fragment } from "react";
import Drawer from "../components/Drawer/Drawer";
import ButtonToggle from "../components/ButtonToggle/ButtonToggle";

class Layout extends Component {
  state = {
    isOpen: false
  };

  drowerHandler = () => {
    this.setState(prevState => {
      return { isOpen: !prevState.isOpen };
    });
  };

  render() {
    return (
      <Fragment>
        <Drawer isOpen={this.state.isOpen} drowerHandler={this.drowerHandler} />
        <ButtonToggle
          isOpen={this.state.isOpen}
          onToggle={this.drowerHandler}
        />
        <main>{this.props.children}</main>
      </Fragment>
    );
  }
}

export default Layout;
