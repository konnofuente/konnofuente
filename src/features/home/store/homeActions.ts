// src/features/home/store/homeActions.ts

import { HomeModel } from '../models/HomeModel';

export const SET_HOME_DATA = 'SET_HOME_DATA';

export const setHomeData = (data: HomeModel) => ({
    type: SET_HOME_DATA,
    payload: data
});
