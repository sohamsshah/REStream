exports.getPlaylistsOfUser = async (req, res) => {
    const { user } = req;
    return res.json({ playlists: user.playlists, success: true })
  }

exports.createPlaylistOfUser = async (req, res) => {
    const { user } = req;
    const { name } = req.body;
    user.playlists.push({ name: name, videos: [] });
    const savedUser = await user.save();
    const savedPlaylist = savedUser.playlists.find((playlist) => playlist.name === name);
    return res.status(201).json({ savedPlaylist:savedPlaylist, success: true, message: "Success" });
}

exports.updatePlaylistOfUser = async (req, res) => {
    const { user } = req;
    const { playlistId } = req.params;
    const updatePlaylist = req.body;
    const playlist = user.playlists.find(item => item._id == playlistId);
    if (playlist) {
      const updatedPlaylist = extend(playlist, updatePlaylist)
      await user.save();
      return res.status(201).json({ playlists: updatedPlaylist, success: true, message: "Success" });
    }
}

exports.deletePlaylistOfUser = async (req, res) => {
    const { user } = req;
    const { playlistId } = req.params;
    const playlist = user.playlists.find(item => item._id == playlistId);
    if (playlist) {
      user.playlists.pull({ _id: playlist._id });
      await user.save();
      return res.status(200).json({ playlist: playlist, success: true, message: "Success" });
    } else {
      return res.status(404).json({ success: false, message: "The Playlist id you requested doesn't exist" });
    }
}

exports.addVideoToPlaylistOfUser = async (req, res) => {
    const { user } = req;
    const { playlistId, videoId } = req.params;
    const playlist = user.playlists.find(function(item){
      return item._id == playlistId;
    });

    if (playlist) {
      playlist.videos.push({videoId});
      
      const savedUser = await user.save();

      const updatedObj = await user.populate('playlists.videos.videoId').execPopulate();
      

      const addedVideo = updatedObj.playlists.find((item) => item._id == playlistId).videos.find(item => item.videoId._id == videoId)

      return res.status(201).json({ video: addedVideo, success: true, message: "Success" });
    } else {
      return res.status(404).json({ success: false, message: "The video id you requested doesn't exists" });
    }
}

exports.deleteVideoFromPlaylistOfUser = async (req, res) => {
    const { user } = req;
    const { playlistId, videoId } = req.params;
    const playlist = user.playlists.find(function(item){
      return item._id == playlistId});
    if(playlist){
      const updatedVideoPlaylist = playlist.videos.filter(item => item.videoId !== videoId);
      const updatedPlaylist = extend(playlist, { videos: updatedVideoPlaylist })
      await user.save();
      return res.status(201).json({ success: true, message: "Success" });
    } else {
      return res.status(404).json({ success: false, message: "The video id you requested doesn't exists" });
    }
    
}