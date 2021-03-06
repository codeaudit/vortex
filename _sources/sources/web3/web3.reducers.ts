import {Reducer} from "redux";
import {Web3State} from "../stateInterface";
import {Web3Actions, Web3LoadedAction, Web3LoadErrorAction, Web3NetworkErrorAction} from "./web3.actions";

export const web3 : Reducer<Web3State, Web3Actions> = (state: Web3State = {status: 'LOADING'}, action: Web3Actions): Web3State => {

    switch (action.type) {

        case 'LOAD_WEB3':
            return ({
                status: 'LOADING'
            });

        case 'LOADED_WEB3':
            return ({
                ...state,
                status: 'LOADED',
                network_id: (<Web3LoadedAction>action).networkId,
                _: (<Web3LoadedAction>action)._,
                coinbase: (<Web3LoadedAction>action).coinbase
            });

        case 'LOAD_ERROR_WEB3':
            return ({
                ...state,
                status: 'LOAD_ERROR',
                error: (<Web3LoadErrorAction>action).error,
            });

        case 'NETWORK_ERROR_WEB3':
            return ({
                ...state,
                status: 'NETWORK_ERROR',
                network_id: (<Web3NetworkErrorAction>action).networkId
            });

        default:
            return state;

    }
};
