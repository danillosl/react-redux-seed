export default function reducer(state = {
    users: []
}, action) {
    switch (action.type) {
        case 'ADD_USERS': {
            return { ...state, users: state.users.concat(action.payload) };

        }
        case 'DELETE_USERS': {

            return state;
        }
        case 'FETCH_USERS': {

            return state;
        }

        case 'FIND_USER_BY_ID': {

            return state;
        }

        default:
            return state;
    }
}