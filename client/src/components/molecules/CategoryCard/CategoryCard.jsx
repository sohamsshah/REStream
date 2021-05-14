import React from 'react'
import "./CategoryCard.css"
import {Link} from "react-router-dom"
import Tag from "../../atoms/Tag/Tag"
import TagGroup from "../../organisms/TagGroup/TagGroup"
import Image from "../../atoms/Image/Image"

function CategoryCard({name, thumbnail, redirect, tags, variant="card", ...props}) {
    return (
        <div className={(variant==="card")? 'card' : 'card-small'} {...props}>
            <div>
           <Link to={redirect}>
                <Image kind={variant} alt="card thumbnail" src={thumbnail} />
           </Link> 
           </div>
           <div className="card__content">
               <div className="card__name">
                   <Link to={redirect}> {name}</Link>
               </div>
               {(tags)?(
                <TagGroup>
                    {tags.map((text) => <Tag text={text} />)}
                </TagGroup>):""}
           </div>
        </div>
    )
}

export default CategoryCard
