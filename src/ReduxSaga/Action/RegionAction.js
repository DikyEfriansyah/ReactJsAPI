import * as ActionType from '../Constant/RegionConstant'

export const GetRegionRequest = () => ({
    type : ActionType.GET_REGION_REQUEST
})

export const GetRegionSuccess = (payload) => ({
    type : ActionType.GET_REGION_SUCCESS, 
    payload
})

export const GetRegionFailed = (payload) => ({
    type : ActionType.GET_REGION_FAILED,
    payload
})