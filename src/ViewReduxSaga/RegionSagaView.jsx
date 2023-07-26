import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetRegionRequest } from '../ReduxSaga/Action/RegionAction'

export default function RegionSagaView() {
    const dispatch = useDispatch()
    const {regions} = useSelector(state => state.regionState)

    useEffect(() => {
        dispatch(GetRegionRequest())
    },[])
  return (
    <div>
         <table>
                <th>Region ID</th>
                <th>Region Name</th>
                <th>Action</th>
                <tbody>
                    {
                        regions && regions.map(reg => (
                            <tr key={reg.regionId}>
                                <td>{reg.regionId}</td>
                                <td>{reg.regionName}</td>
                                <td>
                                    <button>Delete</button>
                                </td>
                                <td>
                                    <button>Update</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
    </div>
  )
}
