const initialState = {
    access: null,
    location: {},
    station: [],
    profile: {},
    wallet: {}
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ACCESS':
            return {
                ...state,
                access: action.payload,
            };
        case 'GET_LOCATION':
            return {
                ...state,
                location: action.payload,
            };
        case 'STATION':
            return {
                ...state,
                station: action.payload,
            };
        case 'PROFILE':
            return {
                ...state,
                profile: action.payload,
            };
        case 'WALLET':
            return {
                ...state,
                wallet: action.payload,
            };
        default:
            return state;
    }
};

export default mainReducer;
