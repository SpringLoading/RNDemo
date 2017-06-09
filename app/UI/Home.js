/**
 * Created by barry on 2017/6/9.
 */

import React, { Component } from 'react';
import {
    Text,
    Button,
    Platform

} from 'react-native';

export default class Mine extends React.Component {
    // static navigationOptions = ({ navigation }) => ({
    //     title: `Chat with ${navigation.state.params.name}`,
    // });

    render() {

        const { navigate } = this.props.navigation;
        return (
                <Button onPress={()=>navigate('Main1')}
                        title= 'home'/>

        );
    }
}