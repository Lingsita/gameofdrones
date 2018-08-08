import { SET_PLAYERS, REMOVE_PLAYERS, SAVE_MOVE, RESTART, SAVE_GAME } from "./../actions";
import * as si from 'seamless-immutable';
import { Choice, Match } from "../game";
import { User } from "../../users";

export interface RootState {
    player_1: User,
    player_2: User,
    matches: Match[],
    final_winner: User
}

export const INITIAL_STATE: RootState = si.from({
    player_1: null,
    player_2: null,
    matches: [],
    final_winner: null
});


export function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_PLAYERS:
            return Object.assign({}, state, {
                player_1: action.player_1,
                player_2: action.player_2
            });

        case SAVE_MOVE:
            if(action.winner != 'tie'){
                let winner = action.winner == 'player_1' ? state.player_1 : state.player_2
                let obj = Object.assign({}, state, {
                    matches: state.matches.concat(Object.assign({}, {
                        winner: winner,
                        round: action.round
                    }))
                });
                let final_winner = state.matches.filter(match => match.winner.id === winner.id).length === 2 ? winner : null
                return Object.assign({}, obj, {
                    final_winner: final_winner
                });
            }
            return Object.assign({}, state);

        case RESTART:
            return Object.assign({}, state, {
                player_1: null,
                player_2: null,
                matches: [],
                final_winner: null
            });
    }
    return state
}