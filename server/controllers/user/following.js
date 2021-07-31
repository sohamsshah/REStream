exports.addCreatorToFollowingOfUser = async (req, res) => {
    const { user } = req;
    const { creatorId } = req.params;
    user.following.push({ creatorId: creatorId });
    const savedUser = await user.save();
    const updatedObj = await savedUser.populate('following.creatorId').execPopulate();
    const followedCreator = updatedObj.following.find(item => item.creatorId._id == creatorId);

    return res.status(201).json({ followedCreator, success: true, message: "Success" });    
}

exports.removeCreatorFromFollowingOfUser = async (req, res) => {
    const { user } = req;
    const { creatorId } = req.params;

    const creator = user.following.find(item => item.creatorId == creatorId)
    if (creator) {
      const updatedObj = await user.populate('following.creatorId').execPopulate();
      const unfollowedCreator = updatedObj.following.find(item => item.creatorId._id == creatorId);
      user.following.pull({ _id: creator._id });
      const savedUser = await user.save();
      return res.status(201).json({ unfollowedCreator, success: true, message: "Success" });
    } else {
      return res.status(404).json({ success: false, message: "The creator id you requested doesn't exists" });
    }   
}