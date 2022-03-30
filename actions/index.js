import actionTypes from '../Configs/actionTypes'
import contentful from '../Helpers/contentful'

const GET_LIST_POST_ACTION = () => {
    return async(dispatch) => {
        dispatch({
            type: actionTypes.GET_LIST_POST_STARTED,
            payload: { loading: true, loaded: false, post: {} },
        })
        try {
            const result = await contentful
                .getEntries({
                    content_type: 'cardShop',
                })
                .then((result) => {
                    return dispatch({
                        type: actionTypes.GET_LIST_POST_SUCCESS,
                        payload: { loaded: true, loading: false, post: result.items },
                    })
                })
        } catch (error) {
            console.log('error', error)
            dispatch({
                type: actionTypes.GET_LIST_POST_FAILED,
                payload: { loaded: false, loading: false, error: true, post: {} },
            })
        }
    }
}
export { GET_LIST_POST_ACTION }