import React, { Component } from 'react'

export default class CustomFunctionJsx extends Component {
    fullname (firstName,lastName){
        return firstName + ' ' + lastName;
    }
  render() {
    const firstName = "Diky";
    const lastName = "Efriansyah";
    return (
      <div>
        <h1>Hello , {this.fullname(firstName,lastName)}</h1>
      </div>
    )
  }
}
