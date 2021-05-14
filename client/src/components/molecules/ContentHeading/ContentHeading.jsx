import React from 'react'
import "./ContentHeading.css"
import Typography from "./../../atoms/Typography/Typography"

function ContentHeading({children, ...props}) {
    return (
        <div className="content-heading" {...props}>
            <Typography fontSize="xxxl" fontWeight="bold">
                {children}
            </Typography>
        </div>
    )
}

export default ContentHeading
