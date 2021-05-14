export const searchCreator = (data, creator_id) => {
    return data.creators.find((item) => item.creator_id === creator_id);
}