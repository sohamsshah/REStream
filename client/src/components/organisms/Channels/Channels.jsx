import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CardGroup from "./../CardGroup/CardGroup"
import CategoryCard from "../../molecules/CategoryCard/CategoryCard"
import ContentHeading from "./../../molecules/ContentHeading/ContentHeading"
import Spinner from "./../../atoms/Spinner/Spinner"

function Channels() {
    const [channels, setChannels] = useState(null)
    useEffect(() => {
        (async function () {
            try {
                // every channel is a creator with isChannel === true
                const response = await axios.get(`https://apirestream.sohamsshah.repl.co/creators/`);
                
                if (response.status === 200) {
                    setChannels(response.data.creators)
                }
            }
            catch (error) {
                console.log(error.message)
            }
        })()
    }, [])
    return (
        <div>
            <ContentHeading>Channels</ContentHeading>
            <CardGroup>
            {channels !== null ? channels.map(({name, thumbnail, redirect, _id, isChannel}) => {
                    if (isChannel){
                    return <CategoryCard name={name} thumbnail={thumbnail} redirect={redirect+`${_id}`} />
                    }
                    return ""
                }) : <Spinner />}
            </CardGroup>
        </div>
    )
}

export default Channels
