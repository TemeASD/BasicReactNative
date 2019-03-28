import { imageConstants } from '../_constants';

export function images(
    state = {
        images: ''
    },
    action) {
    switch (action.type) {
        case imageConstants.ADDONE_SUCCESS:
            return Object.assign({}, state, {
                images: action.images,
            })
        case imageConstants.ADDONE_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}