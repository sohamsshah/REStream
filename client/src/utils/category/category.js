export const searchCreator = (data, creator_id) => {
    return data.creators.filter((item) => item.creator_id === creator_id);
}