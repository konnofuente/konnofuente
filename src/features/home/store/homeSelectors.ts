
import { HomeState } from './homeReducer';

export const selectHomeData = (state: { home: HomeState }) => state.home.data;
