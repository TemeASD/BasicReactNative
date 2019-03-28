import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import { postActions } from '../_actions/post.actions';
import ViewPost from '../_components/viewPost.js';

class PostViewerPage extends Component {
    componentDidMount() {
        this.props.dispatch(postActions.getAllPosts());
    }
    static navigationOptions = {
        title: 'Postaukset',
    };
    render() {
        return (
            <View>
                <Text>Työnnetään postaukset propseina näkymäkomponenttiin</Text>
                <ViewPost posts={this.props.posts} />
            </View>
        )
    } t
}
function mapStateToProps(state) {
    const { posts } = state;
    return { posts };
}

export default connect(mapStateToProps)(PostViewerPage);
