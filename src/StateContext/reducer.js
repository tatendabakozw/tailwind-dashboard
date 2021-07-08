export const initialState = {
    view: 'off'
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