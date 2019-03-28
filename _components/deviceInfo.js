
import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class DeviceInfo extends Component {
    render() {
        return (
        <View>
            <Text>Expon kautta tarjotut laitteen tiedot</Text>
            <Text>{this.props.info.deviceName}</Text>
            <Text>{this.props.info.statusBarHeight}</Text>
            <Text>{this.props.info.isDevice} </Text>
            <Text>{this.props.info.intentUri}</Text>
            <Text>{this.props.info.linkingUri} </Text>
            <Text>{this.props.info.appOwnership} </Text>
            <Text>{this.props.info.installationId}</Text>
            <Text>{this.props.info.experienceUrl}</Text>
            <Text>{this.props.info.systemFonts}</Text>
            <Text>{this.props.info.sessionId}</Text>
            <Text>{this.props.info.deviceName}</Text>
            <Text>{this.props.info.systemVersion}</Text>
            <Text>{this.props.info.deviceYearClass}</Text>
            <Text>{this.props.info.expoVersion}</Text>
            <Text>{this.props.info.deviceId}</Text>
            <Text>{this.props.info.linkingUrl}</Text>
        </View>
        )}
}
