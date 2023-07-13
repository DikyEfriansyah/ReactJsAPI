import React from 'react'

export default function EmployeeInput(props) {
  return (
    <div>
        <form onSubmit={props.OnSubmit}>
            <div>
                <label>Name : </label>
                <input type="text" placeholder='Name' onChange={props.handleChange('Name')} />
            </div>
            <div>
                <label>Salary : </label>
                <input type="number" placeholder='Salary' onChange={props.handleChange('Salary')} />
            </div>
            <div>
                <button type='submit'>Simpan</button>
                <button onClick={() => props.setDisplay(false)}>Cancel</button>
            </div>
        </form>
    </div>
  )
}
