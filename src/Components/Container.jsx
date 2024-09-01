import React from 'react'

function Container({children, className}) {
  return (
    <div className={`${className} p-5 w-full max-w-full`}>
      {children}
    </div>
  )
}

export default Container