import React from 'react'

function Button({className, onClick, name, ...props}) {
  return (
    <div>
        <button className={className} onClick={onClick} {...props}>{name}</button>
    </div>
  )
}

export default Button