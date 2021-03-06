import React from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import {changeText} from '../actions';

var Main = React.createClass({
  changeText(){
    this.props.dispatch(changeText("New Text"));
  },
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 50}}>
          {this.props.text}
        </Text>
        <TouchableOpacity onPress={this.changeText}>
          <Text>
          Change Text
        </Text>
        </TouchableOpacity>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'space-around', 
    alignItems: 'center', 
    backgroundColor: 'blue'
  }

});

var mapStateToProps = (state) => {
  return{
    text: state.text
  }
}
module.exports = connect(mapStateToProps)(Main);