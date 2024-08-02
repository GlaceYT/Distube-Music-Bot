module.exports = {
    // Play command
    playDescription: '曲を再生する',
    playErrorNotInVoiceChannel: 'このコマンドを使用するにはボイスチャンネルに参加している必要があります！',
    playSearchingForSong: '{song} を検索中...',
    playErrorTitle: 'エラー',
    playSearchingTitle: '曲を検索中',
    // Volume command
    volumeDescription: '音量を設定する',
    volumeNoSongPlaying: '現在再生中の曲がありません！',
    volumeInvalidLevel: '音量レベルは0から100の間で設定する必要があります。',
    volumeSetTitle: '音量設定',
    volumeSetDescription: '音量を {volume}% に設定しました。',
    // Time command
    timeDescription: '現在の再生時間を表示する',
    timeNoSongPlaying: '現在再生中の曲がありません！',
    timeTitle: '現在の再生時間',
    timeDescriptionText: '現在の時間: `{currentTime}` / `{duration}`',
    // Stop command
    stopDescription: '音楽を停止し、キューをクリアする',
    stopNoSongPlaying: '現在再生中の曲がありません！',
    stopTitle: '音楽が停止しました',
    stopDescriptionText: '音楽が停止し、キューがクリアされました。',
    // Skip command
    skipDescription: '現在の曲をスキップする',
    skipNoSongPlaying: '現在再生中の曲がありません！',
    skipNoMoreSongs: 'スキップする曲がもうありません！',
    skipTitle: '曲をスキップしました',
    skipDescriptionText: '現在の曲をスキップしました！',
    // Shuffle command
    shuffleDescription: 'キューをシャッフルする',
    shuffleNoSongPlaying: '現在再生中の曲がありません！',
    shuffleTitle: 'キューをシャッフルしました',
    shuffleDescriptionText: 'キューをシャッフルしました。',
    // Seek command
    seekDescription: '曲の特定の時間に移動する',
    seekNoSongPlaying: '現在再生中の曲がありません！',
    seekInvalidTime: '時間は曲の再生時間内でなければなりません。',
    seekTitle: 'シークしました',
    seekDescriptionText: '曲の {time} にシークしました。',
    // Resume command
    resumeDescription: '一時停止した曲を再開する',
    resumeNoSongPlaying: '現在再生中の曲がありません！',
    resumeAlreadyPlaying: '曲はすでに再生中です！',
    resumeTitle: '曲を再開しました',
    resumeDescriptionText: '曲を再開しました！',
    // Remove command
    removeDescription: 'キューから曲を削除する',
    removeNoSongPlaying: '現在再生中の曲がありません！',
    removeInvalidIndex: '無効な曲インデックスです。',
    removeTitle: '削除されました',
    removeDescriptionText: '{song} をキューから削除しました。',
    // Queue command
    queueDescription: '現在のキューを表示する',
    queueNoSongPlaying: '現在再生中の曲がありません！',
    queueTitle: '現在のキュー',
    queueFooterText: '合計時間: {duration}',
    // Previous command
    previousDescription: '前の曲を再生する',
    previousNoSongPlaying: '現在再生中の曲がありません！',
    previousTitle: '前の曲を再生中',
    previousDescriptionText: 'キュー内の前の曲を再生中です。',
    // Pause command
    pauseDescription: '現在の曲を一時停止する',
    pauseNoSongPlaying: '現在再生中の曲がありません！',
    pauseAlreadyPaused: '曲はすでに一時停止されています！',
    pauseTitle: '曲を一時停止しました',
    pauseDescriptionText: '曲を一時停止しました！',
    // Now Playing command
    nowplayingDescription: '現在再生中の曲を表示する',
    nowplayingNoSong: '現在再生中の曲がありません！',
    nowplayingTitle: '再生中の曲',
    // Loop command
    loopDescription: 'ループモードを設定する',
    loopNoSong: '現在再生中の曲がありません！',
    loopInvalidMode: '無効なループモードです。有効なモードは 0 (オフ)、1 (曲)、2 (キュー) です。',
    loopModeDisabled: 'ループモードが無効になりました',
    loopSongEnabled: '曲のループが有効になりました',
    loopQueueEnabled: 'キューのループが有効になりました',
    loopTitle: 'ループモードが設定されました',
    // Jump command
    jumpDescription: 'キュー内の特定の曲にジャンプする',
    jumpNoSong: '現在再生中の曲がありません！',
    jumpInvalidIndex: '無効な曲インデックスです。',
    jumpTitle: 'ジャンプしました',
    jumpSuccess: '曲番号 {index} にジャンプしました。',
    findDescription: '曲を検索する',
    findNoVoiceChannel: 'このコマンドを使用するにはボイスチャンネルに参加している必要があります。',
    findNoResults: 'クエリに対して曲が見つかりませんでした。',
    findTitle: '検索結果',
    findPrompt: 'キューに追加する曲を選択してください:',
    findSongSelected: '選択された曲 **{title}** が再生されます！',
    // filters.js
    filters: {
      description: '利用可能なオーディオフィルターを表示し、ボタンをクリックして適用します',
      errorTitle: 'エラー',
      noSongPlaying: '現在再生中の曲がありません！',
      availableFiltersTitle: '利用可能なフィルター',
      clickButtonToApply: 'ボタンをクリックしてフィルターを適用します',
      clearFiltersLabel: 'フィルターをクリア',
      notYourButton: 'このボタンを使用することはできません！',
      filtersCleared: 'すべてのフィルターがクリアされました。',
      appliedFilter: '適用されたフィルター',
      timeout: 'フィルター選択がタイムアウトしました。'
    },
    clear: {
      description: 'キューをクリアする',
      errorTitle: 'エラー',
      noSongPlaying: '現在再生中の曲がありません！',
      queueClearedTitle: 'キューがクリアされました',
      queueClearedDescription: 'キューがクリアされました。'
    },
    autoplay: {
      description: 'オートプレイを切り替える',
      errorTitle: 'エラー',
      noSongPlaying: '現在再生中の曲がありません！',
      autoplayToggledTitle: 'オートプレイが切り替えられました',
      autoplayStatus: 'オートプレイは現在',
      enabled: '有効',
      disabled: '無効'
    },
  
    addsong: {
      description: 'プレイリストに曲を追加する',
      playlistDesc: 'プレイリスト名',
      songDesc: '曲のURLまたは名前',
      errorAccess: 'プレイリストにアクセス中にエラーが発生しました。',
      errorNotFound: 'プレイリストが見つからないか、所有者ではありません。',
      errorAdd: '曲の追加中にエラーが発生しました。',
      successTitle: '曲が追加されました',
      addedSong: '追加された曲',
      toPlaylist: 'プレイリストへ'
    },
    createplaylist: {
      description: '新しいプレイリストを作成する',
      nameDesc: 'プレイリストの名前',
      visibilityDesc: '公開または非公開',
      error: 'プレイリストの作成中にエラーが発生しました。',
      successTitle: 'プレイリストが作成されました',
      successMessage: 'プレイリストが正常に作成されました。',
      visibilityLabel: '可視性',
      public: '公開',
      private: '非公開'
    },
    deleteplaylist: {
      description: 'プレイリストを削除する',
      playlistDesc: '削除するプレイリスト名',
      error: 'リクエストの処理中にエラーが発生しました。',
      notFound: 'プレイリストが見つかりません。',
      noPermission: 'このプレイリストを削除する権限がありません。',
      successTitle: 'プレイリストが削除されました',
      successMessage: 'プレイリストが削除されました'
    },
    playplaylist: {
      description: 'プレイリストを再生する',
      playlistDesc: 'プレイリスト名',
      notInVoiceChannel: 'このコマンドを使用するにはボイスチャンネルに参加している必要があります。',
      error: 'プレイリストにアクセス中にエラーが発生しました。',
      notFound: 'プレイリストが見つかりません。',
      noPermission: 'このプレイリストは非公開で、あなたは所有者ではありません。',
      emptyPlaylist: 'プレイリストが空です。',
      successTitle: 'プレイリストが開始されました',
      successMessage: 'プレイリストの再生を開始しました',
      failedToPlay: 'プレイリストの再生に失敗しました。',
    },
    removesong: {
      description: 'プレイリストから曲を削除する',
      playlistDesc: 'プレイリスト名',
      songDesc: '曲のURLまたは名前',
      error: 'プレイリストにアクセス中にエラーが発生しました。',
      notFound: 'プレイリストが見つからないか、所有者ではありません。',
      removeError: '曲の削除中にエラーが発生しました。',
      successTitle: '曲が削除されました',
      successMessage: '削除されました',
      fromPlaylist: 'プレイリストから',
    },
    showallplaylists: {
      description: 'すべてのプレイリストを表示する',
      error: 'プレイリストの取得中にエラーが発生しました。',
      noPlaylists: 'プレイリストが見つかりません。',
      title: 'すべてのプレイリスト',
      page: 'ページ',
      songs: '曲',
      by: '作成者',
      visibility: '可視性',
      public: '公開',
      private: '非公開',
    },
    showplaylist: {
      description: '自分のプレイリストを表示する',
      error: 'プレイリストの取得中にエラーが発生しました。',
      noPlaylists: 'プレイリストがありません。',
      title: '自分のプレイリスト',
      page: 'ページ',
      songs: '曲',
      visibility: '可視性',
      public: '公開',
      private: '非公開',
    },
    lyrics: {
      description: '曲の歌詞を取得する',
      songDescription: '歌詞を取得したい曲',
      noLyricsFound: 'その曲の歌詞が見つかりませんでした。',
    },
    showplaylistsongs: {
      description: 'プレイリストの全曲を表示する。',
      playlistDesc: 'プレイリスト名。',
      errorAccess: 'プレイリストにアクセス中にエラーが発生しました。',
      errorNotFound: 'プレイリストが見つかりません。',
      title: 'プレイリスト内の曲',
      noSongs: 'プレイリストに曲がありません。',
    },
    playlist: {
        errorNotInVoiceChannel: 'このコマンドを使用するにはボイスチャンネルに参加する必要があります。',
        playlistAdded: 'プレイリストがキューに追加されました！',
        errorAddingPlaylist: 'プレイリストをキューに追加中にエラーが発生しました。',
        titleError: 'エラー',
        titlePlaylistAdded: 'プレイリスト追加',
        pdescription: 'プレイリストのURLを入力してください。'
      },
    playSong: {
      authorName: '再生中..',
      url: 'https://discord.gg/xQF9f9yUEM',
      song: '曲',
      duration: '時間',
      source: 'ソース'
    },
    addSong: {
      authorName: 'キューに追加されました',
      url: 'https://discord.gg/xQF9f9yUEM',
      addedToQueue: 'キューに追加されました'
    },
    error: {
      authorName: '警告!',
      url: 'https://discord.gg/xQF9f9yUEM',
      errorMessage: 'エラーが発生しました'
    },
    finish: {
      authorName: 'キューが終了しました',
      url: 'https://discord.gg/xQF9f9yUEM',
      description: 'キューが終了しました！'
    },
    disconnect: {
      authorName: '切断されました',
      url: 'https://discord.gg/xQF9f9yUEM',
      description: 'ボイスチャンネルから切断されました'
    },
    empty: {
      authorName: 'チャンネルが空です',
      url: 'https://discord.gg/xQF9f9yUEM',
      description: 'ボイスチャンネルが空です。チャンネルを退出します。'
    }
  };
  