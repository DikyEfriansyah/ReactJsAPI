import { takeEvery, all, take } from "redux-saga/effects";
import * as ActionRegion from '../Constant/RegionConstant'
import { handleRegion } from "./RegionSaga";

function* watchAll() {
    yield all([
        takeEvery(ActionRegion.GET_REGION_REQUEST,handleRegion)
    ])
}

export default watchAll