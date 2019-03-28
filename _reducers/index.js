import { combineReducers } from 'redux';
import { posts } from './posts.reducer';
import { images } from './imagePicker.reducer';
const rootReducer = combineReducers({
    posts,
    images
});

export default rootReducer;