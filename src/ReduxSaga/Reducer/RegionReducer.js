import { GetRegionSuccess } from '../Action/RegionAction'
import * as ActionType from '../Constant/RegionConstant'

const INIT_STATE = {
    regions : []
}

const RegionReducer = (state = INIT_STATE, action) => {
    switch(action.type) {
        case ActionType.GET_REGION_REQUEST :
            return {...state}
        case ActionType.GET_REGION_SUCCESS :
            return GetRegionSuccessfully(state, action)
        default:
            return {...state}
    }
}

const GetRegionSuccessfully = (state, action) => {
    return {
        ...state,
        regions : action.payload
    }
}

export default RegionReducer;