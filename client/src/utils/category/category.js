export const searchCreator = (data, creator_id) => {
    console.log(creator_id,data);
    console.log(data.creators.filter((item) => item.creator_id === creator_id));
    return data.creators.filter((item) => item.creator_id === creator_id);
}