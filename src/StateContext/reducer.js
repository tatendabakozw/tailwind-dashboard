export const initialState = {
    view: 'false'
}

function reducer(state, action) {
    switch (action.type) {
        case 'SET_NAVBAR':
            return {
                ...state,
                view: action.view
            }
        default:
            return state
    }
}

export default reducer