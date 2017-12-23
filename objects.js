var playlist = {
  key: 'value'
}

function updatePlaylist(playlist,artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

removeFromPlaylist(playlist, artistName){
  delete artistName;
  return playlist;
}