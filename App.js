import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import { createStackNavigator } from 'react-navigation';
import thunkMiddleware from 'redux-thunk';

import reducer from './_reducers';
import FrontPage from './screens/FrontPage';
import DeviceInfoPage from './screens/DeviceInfoPage';
import PostViewerPage from './screens/PostViewerPage';
import ImagePickerPage from './screens/ImagePickerPage';

const RootStack = createStackNavigator(
    {
        FrontPage: {
            screen: FrontPage,
        },
        DeviceInfoPage: {
            screen: DeviceInfoPage,
        },
        ImagePickerPage: {
            screen: ImagePickerPage,
        },
        PostViewerPage: {
            screen: PostViewerPage,
        },
    },
    {
        initialRouteName: 'FrontPage',
    }
);

const loggerMiddleware = createLogger();

const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <RootStack />
            </Provider>
        )
    }
}
