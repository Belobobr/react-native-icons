/**
 *
 * @providesModule SMXTabBarIOS
 */

'use strict';

var React = require('react');
var ReactNative = require('react-native');
var { StyleSheet, View, Dimensions} = ReactNative;

var DummyTabBarIOS = React.createClass({
  render: function() {
    return (
      <View style={[this.props.style, styles.tabGroup]}>
        {this.props.children}
      </View>
    );
  }
});

var styles = StyleSheet.create({
  tabGroup: {
    flex: 1,
  }
});

module.exports = DummyTabBarIOS;
