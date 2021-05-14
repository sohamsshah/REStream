import React from 'react'
import "./CardGroup.css"

function CardGroup({children}) {
    return (
        <div className="card-group">
            {children}
        </div>
    )
}

export default CardGroup
