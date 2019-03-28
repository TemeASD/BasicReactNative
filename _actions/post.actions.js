import { postConstants } from '../_constants/post.constants';
import { postService } from '../_services/post.service'
export const postActions = {
    getAllPosts,
};

function getAllPosts() {
    return function(dispatch) {        
        dispatch(request());
        postService.getAllPosts()
            .then(
                posts => dispatch(success(posts)),
                error => dispatch(failure(error))
            );
    };
    function request() { return { type: postConstants.GETALL_REQUEST } }
    function success(posts) { return { type: postConstants.GETALL_SUCCESS, posts } }
    function failure(error) { return { type: postConstants.GETALL_FAILURE, error } }
}