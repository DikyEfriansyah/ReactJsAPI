import React, { useState } from 'react'
import EmployeeInput from './EmployeeInput';

export default function Display() {
    const employee = [
        {empId:1,Name:'diky',Salary:5000},
        {empId:2,Name:'dadang',Salary:6000},
        {empId:3,Name:'diang',Salary:4000}
    ]
    const [employees, setEmployees] = useState(employee)
    const [value, setValue] = useState({
        Name : undefined,
        Salary : 0,
    });
    const [display, setDisplay] = useState(false);
    const handleChange = name => event => {
        setValue({...value, [name]: event.target.value})
    }
    const onSubmit = (event) => {
        event.preventDefault();
        setEmployees([...employees, {
            empId : employees.length + 1,
            Name : value.Name,
            Salary : value.Salary
        }])
        setDisplay(false)
    }
  return (
    <div>
        <h1>List of employeess</h1>
        <button onClick={() => setDisplay(true)}>Add Employee</button>
        <ul>
            {
                display ? (
                <EmployeeInput
                OnSubmit = {onSubmit}
                handleChange = {handleChange}
                setDisplay = {setDisplay} /> ) :
                (
                (employees || []).map((emp) => {
                    return (
                        <li key={emp.empId}>
                            <p>Emp Id = {emp.empId}</p>
                            <p>Name = {emp.Name}</p>
                            <p>Salary = {emp.Salary}</p>
                        </li>
                    )
                })
                )
            }
        </ul>
    </div>
  )
}
