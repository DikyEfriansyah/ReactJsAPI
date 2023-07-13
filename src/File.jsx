import React from 'react'

export default function File() {
    const textAlign = 'text-align : center'
    const text = 'Hallo react'
    const app = <h1 className={textAlign}>{text}</h1>
  return (
    <div>
        {app}
    </div>
  )
}
