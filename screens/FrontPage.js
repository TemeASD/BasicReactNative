import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    AppRegistry,
    Image,
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
import styles from '../_styles/styles'

class FrontPage extends Component {
    static navigationOptions = {
        title: 'Etusivu',
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.header, { backgroundColor: '#powderblue' }]}>
                    <Text style={styles.h2}>React-native demo</Text>
                    <Text>Tämä on WebSK2 kurssille tehty React-Native applikaatio</Text>
                </View>
                <View style={styles.menubtn}>
                    <Button
                        title="Laitetiedot"
                        onPress={() => this.props.navigation.navigate('DeviceInfoPage')}
                    />
                </View>
                <View style={styles.menubtn}>
                    <Button
                        title="REST api testi"
                        onPress={() => this.props.navigation.navigate('PostViewerPage')}
                    />
                </View>
                <View style={styles.menubtn}>
                    <Button
                        title="Kuvaesimerkki"
                        onPress={() => this.props.navigation.navigate('ImagePickerPage')}
                    />
                </View>
                <View style={styles.menubtn}>
                    <Button
                        title="debugnappula"
                        onPress={() => console.log(this.props)}
                    />
                </View>
            </View>
        )
    }
}
function mapStateToProps(state) {
    const { posts, images } = state;
    return { posts, images };
}

export default connect(mapStateToProps)(FrontPage);
