import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ViewPost extends Component {
    render() {
        const { posts } = this.props
        return (
            <View>
                {
                    posts &&
                    <View>
                        <Text>
                            Postauksen ID: {posts.items.id}
                        </Text>
                        <Text>
                            Postauksen otsikko: {posts.items.title}
                        </Text>
                        <Text>
                            Postauksen sisältö: {posts.items.body}
                        </Text>
                    </View>
                }
            </View>
        )
    }
}