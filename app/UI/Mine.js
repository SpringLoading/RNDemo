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
        // const { params } = this.props.navigation.state;
        // const { navigate } = this.props.navigation;
        // return (
        //     <Text>Chat with {params.name}</Text>,
        //         <Button onPress={()=>navigate('Main1')}
        //                 title= {params.name}/>
        //
        // );
        const { navigate } = this.props.navigation;
        return (
                <Button onPress={()=>navigate('Main1')}
                        title= 'Mine'/>

        );
    }
}