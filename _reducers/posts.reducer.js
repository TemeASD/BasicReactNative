import { postConstants } from '../_constants';

export function posts(
    state = {
        isLoading: false,
        items: []
    },
    action) {
    switch (action.type) {
        case postConstants.GETALL_REQUEST:
            return Object.assign({}, state, {
                isLoading: true
            })
        case postConstants.GETALL_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                items: action.posts,
            })
        case postConstants.GETALL_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}