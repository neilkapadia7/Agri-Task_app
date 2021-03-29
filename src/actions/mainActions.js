
export const changeTitle = (name) => async dispatch => {
    dispatch({type: 'CHANGE_TITLE', payload: name});
}
