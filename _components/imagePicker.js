import React, { Component } from 'react';
import { Button, Image, View } from 'react-native';
import { imageActions } from '../_actions/imagePicker.actions';
import { connect } from 'react-redux';

export default class ImagePickerComponent extends Component {
    componentDidMount() {

    };
    render() {
        return (
            <Button color="red"
                title="Lataa kuva"
                onPress={() => this.props.dispatch(imageActions.addImage())}
            />
        );
    }
}
function mapStateToProps(state) {
    const { images } = state;
    return { images };
}

connect(mapStateToProps)(ImagePickerComponent);
