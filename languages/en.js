
module.exports = {
    // Play command
    playDescription: 'Play a song',
    playErrorNotInVoiceChannel: 'You need to be in a voice channel to use this command!',
    playSearchingForSong: 'Searching for {song}...',
    playErrorTitle: 'Error',
    playSearchingTitle: 'Searching for Song',
  // Volume command
  volumeDescription: 'Set the volume',
  volumeNoSongPlaying: 'There is no song playing right now!',
  volumeInvalidLevel: 'Volume level must be between 0 and 100.',
  volumeSetTitle: 'Volume Set',
  volumeSetDescription: 'Volume set to {volume}%.',  
  // Time command
  timeDescription: 'Show the current playback time',
  timeNoSongPlaying: 'There is no song playing right now!',
  timeTitle: 'Current Playback Time',
  timeDescriptionText: 'Current time: `{currentTime}` / `{duration}`',
    // Stop command
    stopDescription: 'Stop the music and clear the queue',
    stopNoSongPlaying: 'There is no song playing right now!',
    stopTitle: 'Music Stopped',
    stopDescriptionText: 'The music has been stopped and the queue has been cleared.',

     // Skip command
  skipDescription: 'Skip the current song',
  skipNoSongPlaying: 'There is no song playing right now!',
  skipNoMoreSongs: 'No more songs to skip!',
  skipTitle: 'Song Skipped',
  skipDescriptionText: 'Skipped the current song!',
   // Shuffle command
   shuffleDescription: 'Shuffle the queue',
   shuffleNoSongPlaying: 'There is no song playing right now!',
   shuffleTitle: 'Queue Shuffled',
   shuffleDescriptionText: 'The queue has been shuffled.',
    // Seek command
  seekDescription: 'Seek to a specific time in the song',
  seekNoSongPlaying: 'There is no song playing right now!',
  seekInvalidTime: 'The time must be within the duration of the song.',
  seekTitle: 'Seeked',
  seekDescriptionText: 'Seeked to {time} in the song.',
    // Resume command
    resumeDescription: 'Resume the paused song',
    resumeNoSongPlaying: 'There is no song playing right now!',
    resumeAlreadyPlaying: 'The song is already playing!',
    resumeTitle: 'Song Resumed',
    resumeDescriptionText: 'Resumed the song!',
      // Remove command
  removeDescription: 'Remove a song from the queue',
  removeNoSongPlaying: 'There is no song playing right now!',
  removeInvalidIndex: 'Invalid song index.',
  removeTitle: 'Removed',
  removeDescriptionText: 'Removed {song} from the queue.',
   // Queue command
   queueDescription: 'Show the current queue',
   queueNoSongPlaying: 'There is no song playing right now!',
   queueTitle: 'Current Queue',
   queueFooterText: 'Total duration: {duration}',
     // Previous command
  previousDescription: 'Play the previous song',
  previousNoSongPlaying: 'There is no song playing right now!',
  previousTitle: 'Playing Previous Song',
  previousDescriptionText: 'Playing the previous song in the queue.',
    // Pause command
    pauseDescription: 'Pause the current song',
    pauseNoSongPlaying: 'There is no song playing right now!',
    pauseAlreadyPaused: 'The song is already paused!',
    pauseTitle: 'Song Paused',
    pauseDescriptionText: 'Paused the song!',
     // Now Playing command
  nowplayingDescription: 'Show the currently playing song',
  nowplayingNoSong: 'There is no song playing right now!',
  nowplayingTitle: 'Now Playing',
    // Loop command
    loopDescription: 'Set the loop mode',
    loopNoSong: 'There is no song playing right now!',
    loopInvalidMode: 'Invalid loop mode. Valid modes are 0 (off), 1 (song), 2 (queue).',
    loopModeDisabled: 'Loop mode disabled',
    loopSongEnabled: 'Song loop enabled',
    loopQueueEnabled: 'Queue loop enabled',
    loopTitle: 'Loop Mode Set',
      // Jump command
  jumpDescription: 'Jump to a specific song in the queue',
  jumpNoSong: 'There is no song playing right now!',
  jumpInvalidIndex: 'Invalid song index.',
  jumpTitle: 'Jumped',
  jumpSuccess: 'Jumped to song number {index}.',
  findDescription: 'Search for a song',
  findNoVoiceChannel: 'You need to be in a voice channel to use this command.',
  findNoResults: 'No songs found for your query.',
  findTitle: 'Search Results',
  findPrompt: 'Select a song to add to the queue:',
  findSongSelected: 'Selected song **{title}** will be played!',
  //filters.js
  filters: {
    description: 'Show available audio filters and apply one by clicking a button',
    errorTitle: 'Error',
    noSongPlaying: 'There is no song playing right now!',
    availableFiltersTitle: 'Available Filters',
    clickButtonToApply: 'Click a button to apply a filter',
    clearFiltersLabel: 'Clear Filters',
    notYourButton: 'You cannot use this button!',
    filtersCleared: 'All filters have been cleared.',
    appliedFilter: 'Applied filter',
    timeout: 'Filter selection timed out.'
  },
  clear: {
    description: 'Clear the queue',
    errorTitle: 'Error',
    noSongPlaying: 'There is no song playing right now!',
    queueClearedTitle: 'Queue Cleared',
    queueClearedDescription: 'The queue has been cleared.'
  },
  autoplay: {
    description: 'Toggle autoplay',
    errorTitle: 'Error',
    noSongPlaying: 'There is no song playing right now!',
    autoplayToggledTitle: 'Autoplay Toggled',
    autoplayStatus: 'Autoplay is now',
    enabled: 'enabled',
    disabled: 'disabled'
  },
  addsong: {
    description: 'Add a song to a playlist',
    playlistDesc: 'The playlist name',
    songDesc: 'The song URL or name',
    errorAccess: 'An error occurred while accessing the playlist.',
    errorNotFound: 'Playlist not found or you are not the owner.',
    errorAdd: 'An error occurred while adding the song.',
    successTitle: 'Song Added',
    addedSong: 'Added song',
    toPlaylist: 'to playlist'
  },
  createplaylist: {
    description: 'Create a new playlist',
    nameDesc: 'The name of the playlist',
    visibilityDesc: 'Public or Private',
    error: 'An error occurred while creating the playlist.',
    successTitle: 'Playlist Created',
    successMessage: 'Playlist has been created successfully.',
    visibilityLabel: 'Visibility',
    public: 'Public',
    private: 'Private'
  },
  deleteplaylist: {
    description: 'Delete a playlist',
    playlistDesc: 'The playlist name to delete',
    error: 'An error occurred while processing the request.',
    notFound: 'Playlist not found.',
    noPermission: 'You do not have permission to delete this playlist.',
    successTitle: 'Playlist Deleted',
    successMessage: 'Playlist has been deleted'
  },
  playplaylist: {
    description: 'Play a playlist',
    playlistDesc: 'The playlist name',
    notInVoiceChannel: 'You need to be in a voice channel to use this command.',
    error: 'An error occurred while accessing the playlist.',
    notFound: 'Playlist not found.',
    noPermission: 'This playlist is private and you are not the owner.',
    emptyPlaylist: 'The playlist is empty.',
    successTitle: 'Playlist Started',
    successMessage: 'Started playing playlist',
    failedToPlay: 'Failed to play the playlist.',
  },
  removesong: {
    description: 'Remove a song from a playlist',
    playlistDesc: 'The playlist name',
    songDesc: 'The song URL or name',
    error: 'An error occurred while accessing the playlist.',
    notFound: 'Playlist not found or you are not the owner.',
    removeError: 'An error occurred while removing the song.',
    successTitle: 'Song Removed',
    successMessage: 'Removed',
    fromPlaylist: 'from playlist',
  },
  showallplaylists: {
    description: 'Show all playlists',
    error: 'An error occurred while fetching playlists.',
    noPlaylists: 'No playlists found.',
    title: 'All Playlists',
    page: 'Page',
    songs: 'songs',
    by: 'By',
    visibility: 'Visibility',
    public: 'Public',
    private: 'Private',
  },
  showplaylist: {
    description: 'Show your playlists',
    error: 'An error occurred while fetching your playlists.',
    noPlaylists: 'You have no playlists.',
    title: 'Your Playlists',
    page: 'Page',
    songs: 'songs',
    visibility: 'Visibility',
    public: 'Public',
    private: 'Private',
  },
  playlist: {
    errorNotInVoiceChannel: 'You need to be in a voice channel to use this command.',
    playlistAdded: 'The playlist has been added to the queue!',
    errorAddingPlaylist: 'An error occurred while adding the playlist to the queue.',
    titleError: 'Error',
    titlePlaylistAdded: 'Playlist Added',
    pdescription: 'play a playlist',
  },
  lyrics: {
    description: 'Get lyrics of a song',
    songDescription: 'The song to get lyrics for',
    noLyricsFound: 'No lyrics found for that song.',
  },
  showplaylistsongs: {
    description: 'Show all songs in a playlist.',
    playlistDesc: 'Name of the playlist.',
    errorAccess: 'An error occurred while accessing the playlist.',
    errorNotFound: 'Playlist not found.',
    title: 'Songs in Playlist',
    noSongs: 'No songs in the playlist.',
  },
  playSong: {
    authorName: 'Playing..',
    url: 'https://discord.gg/xQF9f9yUEM',
    song: 'Song',
    duration: 'Duration',
    source: 'Source'
  },
  addSong: {
    authorName: 'Added to Queue',
    url: 'https://discord.gg/xQF9f9yUEM',
    addedToQueue: 'added to the queue'
  },
  error: {
    authorName: 'Alert!',
    url: 'https://discord.gg/xQF9f9yUEM',
    errorMessage: 'An error encountered'
  },
  finish: {
    authorName: 'Queue Ended',
    url: 'https://discord.gg/xQF9f9yUEM',
    description: 'The queue has finished!'
  },
  disconnect: {
    authorName: 'Disconnected',
    url: 'https://discord.gg/xQF9f9yUEM',
    description: 'Disconnected from the voice channel'
  },
  empty: {
    authorName: 'Channel Empty',
    url: 'https://discord.gg/xQF9f9yUEM',
    description: 'The voice channel is empty, leaving the channel.'
  }
  };
  