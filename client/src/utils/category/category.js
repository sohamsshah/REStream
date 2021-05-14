export const searchCreator = (data, creator_id) => {
    let res = (data.creators.filter((creator) => creator.creator_id === creator_id)) 
    if(res.length === 0){
        return (data.channels.filter((channel) => channel.creator_id === creator_id))
        
    }
    return res
}