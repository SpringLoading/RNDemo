/**
 * Created by barry on 2017/6/9.
 */
import React, { Component } from 'react';
import {
    Button,

} from 'react-native';
export default class Detail extends React.Component {
    static navigationOptions = {
        title: 'Mine',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button
                title="点击跳转到第二个页面"
                onPress={() =>
                    navigate('我的', { name: 'Jane' })
                }
            />
        );
    }
}