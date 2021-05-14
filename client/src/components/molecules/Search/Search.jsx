import React from 'react'
import Input from "./../../atoms/Input/Input"
import { AiOutlineSearch } from "react-icons/ai";
import "./Search.css"

function Search() {
    return (
    <div className="search">
            <Input size="large"/>
            <AiOutlineSearch />
        </div>
    )
}

export default Search
