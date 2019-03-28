import { imageConstants } from '../_constants';

import { ImagePicker } from 'expo';

export const imageActions = {
    addImage,
};

function addImage() {
    return function (dispatch) {
        wat();
        async function wat() {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [16, 9],
        });
        if (!result.cancelled) {
            console.log(result);
            dispatch(success(result));
        } else {
            console.log(result);
            dispatch(failure(result));
        }
    }
        function success(images) { return { type: imageConstants.ADDONE_SUCCESS, images } }
        function failure(error) { return { type: imageConstants.ADDONE_FAILURE, error } }
    }
}