import React from 'react'
import "./CategoryDetails.css"

function CategoryDetails({name, description, thumbnail, tags, ...props}) {
    return (
        <div className="category-details" {...props}>
            <img alt={`${name}`} className="category-details__img" src={thumbnail} />
            <div className="category-details__info">
                <h1>{name}</h1>
                <div>{description}</div>
            </div>
        </div>
    )
}

export default CategoryDetails
