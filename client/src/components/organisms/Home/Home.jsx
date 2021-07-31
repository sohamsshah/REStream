import React from 'react'
import ContentHeading from "./../../molecules/ContentHeading/ContentHeading"
import Typography from "./../../atoms/Typography/Typography"
import {useAuth} from "./../../../context/auth-context"
import "./Home.css"
import {Link} from "react-router-dom"
import {data} from "./../../../data/data"
import CategoryCard from "./../../molecules/CategoryCard/CategoryCard"
import Video from "./../../molecules/Video/Video"
import CardGroup from "./../CardGroup/CardGroup"
import VideoGroup from "./../VideoGroup/VideoGroup"
import {searchCreator} from "./../../../utils/category/category"

function Home() {
    const {authState} = useAuth();
    console.log(authState);
    return (
        <div className="home">
            <div className="home__heading">            
                <ContentHeading>Welcome!</ContentHeading>
                <Typography> 
                    REStream is a one stop destination for researchers to explore and learn about varied spectrum of research topics from best channels and instructors for bringing out the best in them!                     
                </Typography>
            </div>
            <div className="home__suggestions">
            <div className="browse">
                <div className="browse__categories">
                    <div className="browse__title">
                            <Typography fontSize="ml" fontWeight="semibold">
                                <Link to="/categories">Categories</Link> we think you'll like
                            </Typography>                    
                        </div>
                    <CardGroup>
                        {data.categories.map(({name, thumbnail,redirect}) => {
                            return <CategoryCard variant="small-card" name={name} thumbnail={thumbnail} redirect={redirect} />
                        }).slice(0,2)}
                    </CardGroup>
                    <div className="browse__more">
                        Browse more <Link to="/categories">Categories</Link>
                    </div>
                    <hr />
                </div>
                <div className="browse__creators">
                    <div className="browse__title">
                    <Typography fontSize="ml" fontWeight="semibold">
                            <Link to="/instructors">Instructors</Link> we think you'll like
                    </Typography>   
                    </div>
                    <CardGroup>
                    {data.creators.filter(({isChannel}) => !isChannel).map(({name, thumbnail,redirect, isChannel}) => {
                            return <CategoryCard variant="small-card" name={name} thumbnail={thumbnail} redirect={redirect} />
                        
                        }).slice(0,2)}
                    </CardGroup>
                    <div className="browse__more">
                        Browse more in <Link to="/instructors">Instructors</Link>
                    </div>
                    <hr />
                </div>
                <div className="browse__channels">
                    <div className="browse__title">
                        <Typography fontSize="ml" fontWeight="semibold">
                                <Link to="/channels">Channels</Link> we think you'll like
                            </Typography>   
                    </div>
                    <CardGroup>
                    {data.creators.filter(({isChannel}) => isChannel).map(({name, thumbnail,redirect, isChannel}) => {
                            return <CategoryCard variant="small-card" name={name} thumbnail={thumbnail} redirect={redirect} />
                        
                        }).slice(0,2)}
                    </CardGroup>
                    <div className="browse__more">
                        Browse more in <Link to="/channels">Channels</Link>
                    </div>
                    <hr />
                </div>

                <div className="browse__videos">
                    <div className="browse__title">
                        <Typography fontSize="ml" fontWeight="semibold">
                                Recommended <Link to="/categories/artificial-intelligence">Artificial Intelligence</Link> videos for you
                        </Typography>   
                    </div>
                    <VideoGroup>
                        {data.videos.filter((item) => item.category_name === "artificial-intelligence").map(({name, creator_id, thumbnail, id, category}) => <Video kind="small-video" category = {category} name={name} thumbnail={thumbnail} redirect={`/watch/${id}`} creator_details={searchCreator(data, creator_id)} />).slice(0,2)}
                    </VideoGroup>
                    <hr />

                </div>
                <div className="browse__videos">
                    <div className="browse__title">
                    <Typography fontSize="ml" fontWeight="semibold">
                                Recommended <Link to="/categories/electrical-engineering">Electrical Engineering</Link> videos for you
                        </Typography>   
                    </div>
                    <VideoGroup>
                        {data.videos.filter((item) => item.category_name === "electrical-engineering").map(({name, creator_id, thumbnail, id, category}) => <Video kind="small-video" category = {category} name={name} thumbnail={thumbnail} redirect={`/watch/${id}`} creator_details={searchCreator(data, creator_id)} />).slice(0,2)}
                    </VideoGroup>
                    <hr />
                </div>
            </div>
            </div>

                
            </div>
    )
}

export default Home
