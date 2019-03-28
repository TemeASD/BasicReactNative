import React, { Component } from 'react';
import { AppRegistry, Alert, Image, StyleSheet, View, Text, Button } from 'react-native';
import styles from '../_styles/styles.js';
import DeviceInfo from '../_components/deviceInfo.js';


export default class DeviceInfoPage extends Component {
    static navigationOptions = {
        title: 'Laitteen tiedot',
    };
    render() {
        return (
            <View style={styles.centered}>
                <DeviceInfo info={Expo.Constants} />
                <Button
                    onPress={() => this.props.navigation.navigate('FrontPage')}
                    title="Takaisin"
                />
            </View>
        )
    }
}