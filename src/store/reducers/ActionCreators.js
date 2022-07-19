import { dataSlice } from "./DataSlice";

export const fetchData = () => async (dispatch) => {
    try {
        dispatch(dataSlice.actions.dataFetching());
        const response = await fetch("http://contest.elecard.ru/frontend_data/catalog.json")
        const data = await response.json();
        dispatch(dataSlice.actions.dataFetchingSuccess(data));
    } catch (e) {
        dispatch(dataSlice.actions.dataFetchingError(e.message))
    }
}