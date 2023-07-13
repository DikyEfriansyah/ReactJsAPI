import React, { useEffect, useState } from 'react'
import RegionApi from '../api/RegionApi'
import RegionsCreate from './RegionsCreate'
import RegionsUpdate from './RegionsUpdate'

export default function RegionViewApi() {
    const [region, setRegion] = useState([])
    const [refresh, setRefresh] = useState(false)
    const [display, setDisplay] = useState(false)
    const [displayUpdate, setDisplayUpdate] = useState(false)
    const [id, setId] = useState(0)
    useEffect(() => {
        RegionApi.list().then(data => {
            setRegion(data)
        })
        setRefresh(false)
    }, [refresh])
    const onDelete = async(id) => {
        RegionApi.deleted(id).then(() => {
            window.alert('Data Succesfully Delete')
            setRefresh(true)
        })
    }
    const onUpdate = (id) => {
        setId(id)
        setDisplayUpdate(true)
    }
  return (
    <div>
        <h2>List Region</h2>
        {
            display ? (
                <RegionsCreate setRefresh = {setRefresh} setDisplay = {setDisplay}/>
            ) : 
            (
            <>
            <button onClick={() => setDisplay(true)}>Add Region</button>
            <table>
                
            <th>Region ID</th>
            <th>Region Name</th>
            <th>Action</th>
            <tbody>
                {
                    region && region.map(reg => (
                        <tr key={reg.regionId}>
                            <td>{reg.regionId}</td>
                            <td>{reg.regionName}</td>
                            <td>
                                <button onClick={() => onDelete(reg.regionId)}>Delete</button>
                            </td>
                            <td>
                                <button onClick={() => onUpdate(reg.regionId)}>Update</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        {displayUpdate && <RegionsUpdate setRefresh = {setRefresh} setDisplayUpdate = {setDisplayUpdate} regId = {id}/>}
        </>
        )
        }
    </div>
  )
}
