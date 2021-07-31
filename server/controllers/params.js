const { UserDetail } = require("./../models/userDetails.model");

exports.getUserById = async (req, res, next, userId) => {
  try {
    const user = await UserDetail.findById(userId);

    const users = await UserDetail.find({});
    
    if (!user) {
      return res.status(400).json({ success: false, message: "unable to find user from user ID" });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(400).json({ success: false, message: "unable to find user from user ID" })
  }
}
