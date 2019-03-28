import React, { Component } from 'react';
import { AppRegistry, Alert, Image, StyleSheet, View, Text, Button } from 'react-native';

import styles from '../_styles/styles.js';
import ImagePickerComponent from '../_components/imagePicker.js';
import ShowImage from '../_components/showImage.js';
import { connect } from 'react-redux';

class ImagePickerPage extends Component {

    static navigationOptions = {
        title: 'Laitteen tiedot',
    };
    render() {
        const { images } = this.props
        return (

            <View>
                <ImagePickerComponent {...this.props} />
                {images &&
                    <ShowImage {...images} />}
                <Button color="red"
                    title="DEBUG"
                    onPress={() => console.log(this.props)}
                />

            </View>
        )
    }
}
function mapStateToProps(state) {
    const { images } = state;
    return { images };
}

export default connect(mapStateToProps)(ImagePickerPage);
