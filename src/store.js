import { createStore } from 'redux';
import { combineReducers } from 'redux';

const INITIAL_STATE = {
    wallets: [{
        wallet_name: "",
        wallet_amount: "",
        wallet_nfts: []
    }]
};

function walletReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_WALLET':
            debugger
            state.wallets.push(action.payload);
            localStorage.setItem('wallets', JSON.stringify(state));
            state.wallets.pop(action.payload);
            return {
                wallets: [...state.wallets, action.payload]
            };
        case 'DELETE_WALLET':
            debugger
            state.wallets.pop(action.payload);
            localStorage.setItem('wallets', JSON.stringify(state));
            state.wallets.push(action.payload);
            debugger
            return {
                ...state,
                wallets: state.wallets.filter(wallets => wallets !== action.payload)
            };    
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    wallets: walletReducer,
})

const store = createStore(rootReducer);

export default store;

