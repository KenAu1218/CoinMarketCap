
import React, { Component, } from 'react'
import {
    AppState,
    BackHandler,
    Dimensions,
    NativeModules,
    Platform,
    StyleSheet,
    Text,
    ToastAndroid,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
// import * as AppColors from '~/utils/colors.js';

export default class HomeScreen extends Component {
    render() {
        return (
            <View >
                <Text>HomeScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        // backgroundColor: AppColors.primary
    },
});