import React, { Component } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    aspectratio169: {
        width: 320,
        height: 180
    }
});

export default class ShowImage extends Component {
    render() {
        const { images } = this.props
        return (
            <View>
                {images.uri &&
                    <View>
                        <Image
                            style={styles.aspectratio169}
                            source={{ uri: images.uri }}
                        />
                        <Text>
                            Orig. resoluutio: {images.width} x {images.height}
                        </Text>
                        <Text>
                            URI: {images.uri}
                        </Text>
                    </View>
                }
                <Button color="red"
                    title="DEBUG"
                    onPress={() => console.log(images)}
                />
            </View>);
    }
}
