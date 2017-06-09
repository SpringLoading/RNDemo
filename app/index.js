/**
 * Created by barry on 2017/6/9.
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from 'react-navigation';
import Detail from './UI/Detail'
import Mine from './UI/Mine'
import Home from './UI/Home'

// export const Index = StackNavigator({
//     Main1: {screen: Main},
//     '我的': {screen: Mine},
// });
const Item = TabNavigator({
    Home: {screen: Home},
    '我的': {screen: Mine},
});
export const Index = StackNavigator({
    Item: {screen: Item},
    Main1: {screen: Detail},


});