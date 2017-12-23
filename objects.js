var playlist = {
  key: 'value'
}

function updatePlaylist(playlist,artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}
