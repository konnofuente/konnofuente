
import { SET_HOME_DATA } from './homeActions';
import { HomeModel } from '../models/HomeModel';

export interface HomeState {
    data: HomeModel | null;
}

const initialState: HomeState = {
    data: null
};

export const homeReducer = (state = initialState, action: any): HomeState => {
    switch (action.type) {
        case SET_HOME_DATA:
            return { ...state, data: action.payload };
        default:
            return state;
    }
};
