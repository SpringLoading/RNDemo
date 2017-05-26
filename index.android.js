/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
    ListView,
    ScrollView,
    Animated,
    Button,

} from 'react-native';

import { StackNavigator } from 'react-navigation';
class MainScreen extends React.Component {
    static navigationOptions = {
        title: '第一个页面的标题',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button
                title="点击跳转到第二个页面"
                onPress={() =>
                    navigate('Profile', { name: 'Jane' })
                }
            />
        );
    }
}


class ProfileScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: `Chat with ${navigation.state.params.name}`,
    });
    render() {
        const { params } = this.props.navigation.state;
        const { navigate } = this.props.navigation;
        return (
                <Text>Chat with {params.name}</Text>,
                <Button onPress={()=>navigate('Main')}
                        title= {params.name}/>

        );
    }
}
const RNDemo = StackNavigator({
    Main: {screen: MainScreen},
    Profile: {screen: ProfileScreen},
});




AppRegistry.registerComponent('RNDemo', () => RNDemo);
