import React, {useEffect, useState} from 'react'
import "./Categories.css"
import axios from 'axios'
import CardGroup from "./../CardGroup/CardGroup"
import CategoryCard from "../../molecules/CategoryCard/CategoryCard"
import ContentHeading from "./../../molecules/ContentHeading/ContentHeading"
import Spinner from "./../../atoms/Spinner/Spinner"

function Categories() {
    const [categories, setCategories] = useState(null)
    useEffect(() => {
        (async function () {
            try {
                const response = await axios.get(`https://apirestream.sohamsshah.repl.co/categories/`);
                if (response.status === 200) {
                    
                    setCategories(response.data.categories)
                }
            }
            catch (error) {

                console.log(error.message)
            }
        })()
    }, [])
    return (
        <div>
            <ContentHeading>Categories</ContentHeading>
            <CardGroup>
            {
            categories !== null ? categories.map(({name, thumbnail, tags, redirect}) => {
                return <CategoryCard name={name} thumbnail={thumbnail} redirect={redirect} tags={tags}/>
            }) : <Spinner />}
            </CardGroup>
        </div>
    )
}

export default Categories
