import { createStore } from 'redux';
import { combineReducers } from 'redux';

const updateWallet = (wallets, updatedWallet) => {
    wallets.forEach((wlt, index) => {
        if (wlt.wallet_name === updatedWallet.wallet_name){
            wallets[index] = updatedWallet;
        }
    })
    return wallets;
}

function walletReducer(state = JSON.parse(localStorage.getItem('wallets')), action) {
    switch (action.type) {
        case 'SET_REDUX':
            state = JSON.parse(localStorage.getItem('wallets'));
            return state;
        case 'ADD_WALLET':
            state = JSON.parse(localStorage.getItem('wallets'))
            state.wallets.push(action.payload);
            localStorage.setItem('wallets', JSON.stringify(state));
            state.wallets.pop(action.payload);
            return {
                wallets: [...state.wallets, action.payload]
            };
        case 'UPDATE_WALLET':
            state = JSON.parse(localStorage.getItem('wallets'))    
            state.wallets = updateWallet(state.wallets, action.payload);
            localStorage.setItem('wallets', JSON.stringify(state));
            return {
                ...state
            };

        case 'DELETE_WALLET':
            state.wallets.forEach((wlt, index) => {
                if (wlt.wallet_name === action.payload.wallet_name) {
                    state.wallets.splice(index, 1);
                }
            })
            localStorage.setItem('wallets', JSON.stringify(state));
            return {
                ...state
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

