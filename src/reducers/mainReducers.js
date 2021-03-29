

export const mainReducer = (state = {page_title: 'Agri-Input Master Management', rows: false, row: false}, action) => {
    switch (action.type) {
        case 'CHANGE_TITLE':
            return {
                ...state,
                page_title: action.payload
            }
        case 'SHOW_ROWS': 
            return {
                ...state,
                rows: true
            }
        case 'HIDE_ROWS': 
            return {
                ...state,
                rows: false
            }
        case 'TOGGLE_ROW': 
        return {
            ...state,
            row: !state.row
        }
        default:
            return state;
    }
}

export const mainReducer2 = (state = {}, action) => {
    switch (action.type) {
        default:
            return state;
    }
}