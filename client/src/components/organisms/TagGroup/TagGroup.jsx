import React from 'react'
import "./TagGroup.css"

function TagGroup({children}) {
    return (
        <div className="tag-group">
           {children} 
        </div>
    )
}

export default TagGroup
