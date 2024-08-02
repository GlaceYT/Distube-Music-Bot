module.exports = {
    // Play command
    playDescription: '노래 재생',
    playErrorNotInVoiceChannel: '이 명령어를 사용하려면 음성 채널에 있어야 합니다!',
    playSearchingForSong: '{song}을(를) 찾고 있습니다...',
    playErrorTitle: '오류',
    playSearchingTitle: '노래 찾기',
  
    // Volume command
    volumeDescription: '볼륨 설정',
    volumeNoSongPlaying: '현재 재생 중인 노래가 없습니다!',
    volumeInvalidLevel: '볼륨 레벨은 0에서 100 사이여야 합니다.',
    volumeSetTitle: '볼륨 설정됨',
    volumeSetDescription: '볼륨이 {volume}%로 설정되었습니다.',
  
    // Time command
    timeDescription: '현재 재생 시간 표시',
    timeNoSongPlaying: '현재 재생 중인 노래가 없습니다!',
    timeTitle: '현재 재생 시간',
    timeDescriptionText: '현재 시간: `{currentTime}` / `{duration}`',
  
    // Stop command
    stopDescription: '음악을 중지하고 대기열을 삭제',
    stopNoSongPlaying: '현재 재생 중인 노래가 없습니다!',
    stopTitle: '음악 중지됨',
    stopDescriptionText: '음악이 중지되었고 대기열이 삭제되었습니다.',
  
    // Skip command
    skipDescription: '현재 노래 건너뛰기',
    skipNoSongPlaying: '현재 재생 중인 노래가 없습니다!',
    skipNoMoreSongs: '건너뛸 노래가 더 이상 없습니다!',
    skipTitle: '노래 건너뛰기',
    skipDescriptionText: '현재 노래를 건너뛰었습니다!',
  
    // Shuffle command
    shuffleDescription: '대기열 섞기',
    shuffleNoSongPlaying: '현재 재생 중인 노래가 없습니다!',
    shuffleTitle: '대기열 섞기 완료',
    shuffleDescriptionText: '대기열이 섞였습니다.',
  
    // Seek command
    seekDescription: '노래에서 특정 시간으로 이동',
    seekNoSongPlaying: '현재 재생 중인 노래가 없습니다!',
    seekInvalidTime: '시간은 노래의 재생 시간 내에 있어야 합니다.',
    seekTitle: '위치 이동됨',
    seekDescriptionText: '노래에서 {time}(으)로 이동했습니다.',
  
    // Resume command
    resumeDescription: '일시 중지된 노래 재개',
    resumeNoSongPlaying: '현재 재생 중인 노래가 없습니다!',
    resumeAlreadyPlaying: '노래가 이미 재생 중입니다!',
    resumeTitle: '노래 재개됨',
    resumeDescriptionText: '노래가 재개되었습니다!',
  
    // Remove command
    removeDescription: '대기열에서 노래 제거',
    removeNoSongPlaying: '현재 재생 중인 노래가 없습니다!',
    removeInvalidIndex: '잘못된 노래 인덱스입니다.',
    removeTitle: '제거됨',
    removeDescriptionText: '대기열에서 {song}(을)를 제거했습니다.',
  
    // Queue command
    queueDescription: '현재 대기열 표시',
    queueNoSongPlaying: '현재 재생 중인 노래가 없습니다!',
    queueTitle: '현재 대기열',
    queueFooterText: '총 재생 시간: {duration}',
  
    // Previous command
    previousDescription: '이전 노래 재생',
    previousNoSongPlaying: '현재 재생 중인 노래가 없습니다!',
    previousTitle: '이전 노래 재생 중',
    previousDescriptionText: '대기열에서 이전 노래를 재생 중입니다.',
  
    // Pause command
    pauseDescription: '현재 노래 일시 중지',
    pauseNoSongPlaying: '현재 재생 중인 노래가 없습니다!',
    pauseAlreadyPaused: '노래가 이미 일시 중지되었습니다!',
    pauseTitle: '노래 일시 중지됨',
    pauseDescriptionText: '노래가 일시 중지되었습니다!',
  
    // Now Playing command
    nowplayingDescription: '현재 재생 중인 노래 표시',
    nowplayingNoSong: '현재 재생 중인 노래가 없습니다!',
    nowplayingTitle: '현재 재생 중',
  
    // Loop command
    loopDescription: '반복 모드 설정',
    loopNoSong: '현재 재생 중인 노래가 없습니다!',
    loopInvalidMode: '잘못된 반복 모드입니다. 유효한 모드는 0 (끔), 1 (노래), 2 (대기열)입니다.',
    loopModeDisabled: '반복 모드 꺼짐',
    loopSongEnabled: '노래 반복 켜짐',
    loopQueueEnabled: '대기열 반복 켜짐',
    loopTitle: '반복 모드 설정됨',
  
    // Jump command
    jumpDescription: '대기열의 특정 노래로 이동',
    jumpNoSong: '현재 재생 중인 노래가 없습니다!',
    jumpInvalidIndex: '잘못된 노래 인덱스입니다.',
    jumpTitle: '이동됨',
    jumpSuccess: '대기열에서 {index}번째 노래로 이동했습니다.',
  
    // Find command
    findDescription: '노래 검색',
    findNoVoiceChannel: '이 명령어를 사용하려면 음성 채널에 있어야 합니다.',
    findNoResults: '검색 결과가 없습니다.',
    findTitle: '검색 결과',
    findPrompt: '대기열에 추가할 노래를 선택하세요:',
    findSongSelected: '선택한 노래 **{title}**(이)가 재생됩니다!',
  
    // Filters
    filters: {
        description: '사용 가능한 오디오 필터를 표시하고 버튼을 클릭하여 적용',
        errorTitle: '오류',
        noSongPlaying: '현재 재생 중인 노래가 없습니다!',
        availableFiltersTitle: '사용 가능한 필터',
        clickButtonToApply: '필터를 적용하려면 버튼을 클릭하세요',
        clearFiltersLabel: '필터 삭제',
        notYourButton: '이 버튼을 사용할 수 없습니다!',
        filtersCleared: '모든 필터가 삭제되었습니다.',
        appliedFilter: '적용된 필터',
        timeout: '필터 선택 시간이 초과되었습니다.'
    },
  
    // Clear command
    clear: {
        description: '대기열 삭제',
        errorTitle: '오류',
        noSongPlaying: '현재 재생 중인 노래가 없습니다!',
        queueClearedTitle: '대기열 삭제됨',
        queueClearedDescription: '대기열이 삭제되었습니다.'
    },
  
    // Autoplay command
    autoplay: {
        description: '자동 재생 토글',
        errorTitle: '오류',
        noSongPlaying: '현재 재생 중인 노래가 없습니다!',
        autoplayToggledTitle: '자동 재생 토글됨',
        autoplayStatus: '자동 재생이 이제',
        enabled: '활성화되었습니다',
        disabled: '비활성화되었습니다'
    },
 
        addsong: {
          description: '재생 목록에 노래 추가',
          playlistDesc: '재생 목록 이름',
          songDesc: '노래 URL 또는 이름',
          errorAccess: '재생 목록에 접근하는 동안 오류가 발생했습니다.',
          errorNotFound: '재생 목록을 찾을 수 없거나 소유자가 아닙니다.',
          errorAdd: '노래를 추가하는 동안 오류가 발생했습니다.',
          successTitle: '노래 추가됨',
          addedSong: '추가된 노래',
          toPlaylist: '재생 목록에'
        },
        createplaylist: {
          description: '새 재생 목록 만들기',
          nameDesc: '재생 목록 이름',
          visibilityDesc: '공개 또는 비공개',
          error: '재생 목록을 만드는 동안 오류가 발생했습니다.',
          successTitle: '재생 목록 생성됨',
          successMessage: '재생 목록이 성공적으로 생성되었습니다.',
          visibilityLabel: '가시성',
          public: '공개',
          private: '비공개'
        },
        deleteplaylist: {
          description: '재생 목록 삭제',
          playlistDesc: '삭제할 재생 목록 이름',
          error: '요청 처리 중 오류가 발생했습니다.',
          notFound: '재생 목록을 찾을 수 없습니다.',
          noPermission: '이 재생 목록을 삭제할 권한이 없습니다.',
          successTitle: '재생 목록 삭제됨',
          successMessage: '재생 목록이 삭제되었습니다.'
        },
        playplaylist: {
          description: '재생 목록 재생',
          playlistDesc: '재생 목록 이름',
          notInVoiceChannel: '이 명령어를 사용하려면 음성 채널에 있어야 합니다.',
          error: '재생 목록에 접근하는 동안 오류가 발생했습니다.',
          notFound: '재생 목록을 찾을 수 없습니다.',
          noPermission: '이 재생 목록은 비공개이며, 소유자가 아닙니다.',
          emptyPlaylist: '재생 목록이 비어 있습니다.',
          successTitle: '재생 목록 시작됨',
          successMessage: '재생 목록 재생을 시작했습니다.',
          failedToPlay: '재생 목록을 재생하는 데 실패했습니다.',
        },
        removesong: {
          description: '재생 목록에서 노래 제거',
          playlistDesc: '재생 목록 이름',
          songDesc: '노래 URL 또는 이름',
          error: '재생 목록에 접근하는 동안 오류가 발생했습니다.',
          notFound: '재생 목록을 찾을 수 없거나 소유자가 아닙니다.',
          removeError: '노래를 제거하는 동안 오류가 발생했습니다.',
          successTitle: '노래 제거됨',
          successMessage: '제거됨',
          fromPlaylist: '재생 목록에서',
        },
        showallplaylists: {
          description: '모든 재생 목록 표시',
          error: '재생 목록을 가져오는 동안 오류가 발생했습니다.',
          noPlaylists: '재생 목록이 없습니다.',
          title: '모든 재생 목록',
          page: '페이지',
          songs: '곡',
          by: '작성자',
          visibility: '가시성',
          public: '공개',
          private: '비공개',
        },
        showplaylist: {
          description: '내 재생 목록 표시',
          error: '내 재생 목록을 가져오는 동안 오류가 발생했습니다.',
          noPlaylists: '재생 목록이 없습니다.',
          title: '내 재생 목록',
          page: '페이지',
          songs: '곡',
          visibility: '가시성',
          public: '공개',
          private: '비공개',
        },
        playlist: {
          errorNotInVoiceChannel: '이 명령어를 사용하려면 음성 채널에 있어야 합니다.',
          playlistAdded: '재생 목록이 대기열에 추가되었습니다!',
          errorAddingPlaylist: '재생 목록을 대기열에 추가하는 동안 오류가 발생했습니다.',
          titleError: '오류',
          titlePlaylistAdded: '재생 목록 추가됨',
          pdescription: '재생 목록을 재생하다',

        },
        lyrics: {
          description: '노래 가사 가져오기',
          songDescription: '가사를 가져올 노래',
          noLyricsFound: '이 노래의 가사를 찾을 수 없습니다.',
        },
        showplaylistsongs: {
          description: '재생 목록의 모든 노래 표시',
          playlistDesc: '재생 목록 이름.',
          errorAccess: '재생 목록에 접근하는 동안 오류가 발생했습니다.',
          errorNotFound: '재생 목록을 찾을 수 없습니다.',
          title: '재생 목록의 곡',
          noSongs: '재생 목록에 곡이 없습니다.',
        },
        playSong: {
          authorName: '재생 중..',
          url: 'https://discord.gg/xQF9f9yUEM',
          song: '노래',
          duration: '재생 시간',
          source: '출처'
        },
        addSong: {
          authorName: '대기열에 추가됨',
          url: 'https://discord.gg/xQF9f9yUEM',
          addedToQueue: '대기열에 추가됨'
        },
        error: {
          authorName: '경고!',
          url: 'https://discord.gg/xQF9f9yUEM',
          errorMessage: '오류 발생'
        },
        finish: {
          authorName: '대기열 종료됨',
          url: 'https://discord.gg/xQF9f9yUEM',
          description: '대기열이 완료되었습니다!'
        },
        disconnect: {
          authorName: '연결 끊김',
          url: 'https://discord.gg/xQF9f9yUEM',
          description: '음성 채널에서 연결이 끊겼습니다.'
        },
        empty: {
          authorName: '채널 비어 있음',
          url: 'https://discord.gg/xQF9f9yUEM',
          description: '음성 채널이 비어 있어 채널을 떠납니다.'
        }
      };
      

