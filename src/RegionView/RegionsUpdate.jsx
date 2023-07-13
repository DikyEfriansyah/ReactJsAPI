import React, { useState } from 'react'
import RegionApi from '../api/RegionApi'

export default function RegionsUpdate(props) {
    const [value, setValue] = useState({
        name : undefined
    })

    const handleChange = name => event => {
        setValue({...value, [name] : event.target.value})
    }

    const onSubmit = async() => {
        const payload = {
            name : (value.name)
        }
        await RegionApi.update(payload, props.regId).then(() => {
            props.setRefresh(true)
            window.alert('Data berhasil diupdate')
        })
    }
  return (
    <div>
        <h2>Update Regions</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Region Name :</label>
          <input
            type="text"
            placeholder="Name"
            onChange={handleChange("name")}
          ></input>
        </div>
        <div>
          <button type="submit">Simpan</button>
          <button onClick={() => props.setDisplayUpdate(false)}>cancel</button>
        </div>
      </form>
    </div>
  )
}