import {call, put} from 'redux-saga/effects'
import RegionApi from '../../api/RegionApi'
import { GetRegionRequest, GetRegionSuccess, GetRegionFailed } from '../Action/RegionAction'


function* handleRegion() {
    try {
        const result = yield call(RegionApi.list)
        yield put(GetRegionSuccess(result))
        
    } catch (error) {
        yield put(GetRegionFailed(error))
    }
}

export {
    handleRegion
}