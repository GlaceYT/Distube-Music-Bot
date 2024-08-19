// models/Playlist.js
const mongoose = require('mongoose');

const PlaylistSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  isPublic: { type: Boolean, default: false },
  songs: { type: [String], default: [] },
});

module.exports = mongoose.model('Playlist', PlaylistSchema);
