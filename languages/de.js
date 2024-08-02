module.exports = {
    // Play command
    playDescription: 'Ein Lied abspielen',
    playErrorNotInVoiceChannel: 'Du musst in einem Sprachkanal sein, um diesen Befehl zu verwenden!',
    playSearchingForSong: 'Suche nach {song}...',
    playErrorTitle: 'Fehler',
    playSearchingTitle: 'Suche nach Lied',
  
    // Volume command
    volumeDescription: 'Lautstärke einstellen',
    volumeNoSongPlaying: 'Es wird momentan kein Lied abgespielt!',
    volumeInvalidLevel: 'Die Lautstärke muss zwischen 0 und 100 liegen.',
    volumeSetTitle: 'Lautstärke eingestellt',
    volumeSetDescription: 'Lautstärke auf {volume}% eingestellt.',
  
    // Time command
    timeDescription: 'Aktuelle Wiedergabezeit anzeigen',
    timeNoSongPlaying: 'Es wird momentan kein Lied abgespielt!',
    timeTitle: 'Aktuelle Wiedergabezeit',
    timeDescriptionText: 'Aktuelle Zeit: `{currentTime}` / `{duration}`',
  
    // Stop command
    stopDescription: 'Die Musik stoppen und die Warteschlange leeren',
    stopNoSongPlaying: 'Es wird momentan kein Lied abgespielt!',
    stopTitle: 'Musik gestoppt',
    stopDescriptionText: 'Die Musik wurde gestoppt und die Warteschlange wurde geleert.',
  
    // Skip command
    skipDescription: 'Das aktuelle Lied überspringen',
    skipNoSongPlaying: 'Es wird momentan kein Lied abgespielt!',
    skipNoMoreSongs: 'Keine weiteren Lieder zum Überspringen!',
    skipTitle: 'Lied übersprungen',
    skipDescriptionText: 'Das aktuelle Lied wurde übersprungen!',
  
    // Shuffle command
    shuffleDescription: 'Die Warteschlange mischen',
    shuffleNoSongPlaying: 'Es wird momentan kein Lied abgespielt!',
    shuffleTitle: 'Warteschlange gemischt',
    shuffleDescriptionText: 'Die Warteschlange wurde gemischt.',
  
    // Seek command
    seekDescription: 'Zu einer bestimmten Zeit im Lied springen',
    seekNoSongPlaying: 'Es wird momentan kein Lied abgespielt!',
    seekInvalidTime: 'Die Zeit muss innerhalb der Dauer des Liedes liegen.',
    seekTitle: 'Gesprungen',
    seekDescriptionText: 'Zu {time} im Lied gesprungen.',
  
    // Resume command
    resumeDescription: 'Das pausierte Lied fortsetzen',
    resumeNoSongPlaying: 'Es wird momentan kein Lied abgespielt!',
    resumeAlreadyPlaying: 'Das Lied wird bereits abgespielt!',
    resumeTitle: 'Lied fortgesetzt',
    resumeDescriptionText: 'Das Lied wurde fortgesetzt!',
  
    // Remove command
    removeDescription: 'Ein Lied aus der Warteschlange entfernen',
    removeNoSongPlaying: 'Es wird momentan kein Lied abgespielt!',
    removeInvalidIndex: 'Ungültiger Lied-Index.',
    removeTitle: 'Entfernt',
    removeDescriptionText: '{song} wurde aus der Warteschlange entfernt.',
  
    // Queue command
    queueDescription: 'Die aktuelle Warteschlange anzeigen',
    queueNoSongPlaying: 'Es wird momentan kein Lied abgespielt!',
    queueTitle: 'Aktuelle Warteschlange',
    queueFooterText: 'Gesamtdauer: {duration}',
  
    // Previous command
    previousDescription: 'Das vorherige Lied abspielen',
    previousNoSongPlaying: 'Es wird momentan kein Lied abgespielt!',
    previousTitle: 'Vorheriges Lied abspielen',
    previousDescriptionText: 'Das vorherige Lied in der Warteschlange wird abgespielt.',
  
    // Pause command
    pauseDescription: 'Das aktuelle Lied pausieren',
    pauseNoSongPlaying: 'Es wird momentan kein Lied abgespielt!',
    pauseAlreadyPaused: 'Das Lied ist bereits pausiert!',
    pauseTitle: 'Lied pausiert',
    pauseDescriptionText: 'Das Lied wurde pausiert!',
  
    // Now Playing command
    nowplayingDescription: 'Das aktuell abgespielte Lied anzeigen',
    nowplayingNoSong: 'Es wird momentan kein Lied abgespielt!',
    nowplayingTitle: 'Jetzt spielt',
  
    // Loop command
    loopDescription: 'Die Schleifenmodus einstellen',
    loopNoSong: 'Es wird momentan kein Lied abgespielt!',
    loopInvalidMode: 'Ungültiger Schleifenmodus. Gültige Modi sind 0 (aus), 1 (Lied), 2 (Warteschlange).',
    loopModeDisabled: 'Schleifenmodus deaktiviert',
    loopSongEnabled: 'Liedschleife aktiviert',
    loopQueueEnabled: 'Warteschleife aktiviert',
    loopTitle: 'Schleifenmodus eingestellt',
  
    // Jump command
    jumpDescription: 'Zu einem bestimmten Lied in der Warteschlange springen',
    jumpNoSong: 'Es wird momentan kein Lied abgespielt!',
    jumpInvalidIndex: 'Ungültiger Lied-Index.',
    jumpTitle: 'Gesprungen',
    jumpSuccess: 'Zu Lied Nummer {index} gesprungen.',
  
    // Find command
    findDescription: 'Nach einem Lied suchen',
    findNoVoiceChannel: 'Du musst in einem Sprachkanal sein, um diesen Befehl zu verwenden.',
    findNoResults: 'Keine Lieder für deine Anfrage gefunden.',
    findTitle: 'Suchergebnisse',
    findPrompt: 'Wähle ein Lied aus, um es zur Warteschlange hinzuzufügen:',
    findSongSelected: 'Ausgewähltes Lied **{title}** wird abgespielt!',
    
    // Filters
    filters: {
      description: 'Verfügbare Audiofilter anzeigen und einen durch Klicken auf eine Schaltfläche anwenden',
      errorTitle: 'Fehler',
      noSongPlaying: 'Es wird momentan kein Lied abgespielt!',
      availableFiltersTitle: 'Verfügbare Filter',
      clickButtonToApply: 'Klicke auf eine Schaltfläche, um einen Filter anzuwenden',
      clearFiltersLabel: 'Filter löschen',
      notYourButton: 'Du kannst diese Schaltfläche nicht verwenden!',
      filtersCleared: 'Alle Filter wurden gelöscht.',
      appliedFilter: 'Filter angewendet',
      timeout: 'Zeitüberschreitung bei der Auswahl des Filters.'
    },
  
    // Clear command
    clear: {
      description: 'Die Warteschlange leeren',
      errorTitle: 'Fehler',
      noSongPlaying: 'Es wird momentan kein Lied abgespielt!',
      queueClearedTitle: 'Warteschlange geleert',
      queueClearedDescription: 'Die Warteschlange wurde geleert.'
    },
  
    // Autoplay command
    autoplay: {
      description: 'Autoplay umschalten',
      errorTitle: 'Fehler',
      noSongPlaying: 'Es wird momentan kein Lied abgespielt!',
      autoplayToggledTitle: 'Autoplay umgeschaltet',
      autoplayStatus: 'Autoplay ist jetzt',
      enabled: 'aktiviert',
      disabled: 'deaktiviert'
    },

        addsong: {
          description: 'Füge ein Lied zu einer Wiedergabeliste hinzu',
          playlistDesc: 'Der Name der Wiedergabeliste',
          songDesc: 'Die Lied-URL oder der Name',
          errorAccess: 'Beim Zugriff auf die Wiedergabeliste ist ein Fehler aufgetreten.',
          errorNotFound: 'Wiedergabeliste nicht gefunden oder du bist nicht der Eigentümer.',
          errorAdd: 'Beim Hinzufügen des Liedes ist ein Fehler aufgetreten.',
          successTitle: 'Lied hinzugefügt',
          addedSong: 'Lied hinzugefügt',
          toPlaylist: 'zur Wiedergabeliste'
        },
        createplaylist: {
          description: 'Erstelle eine neue Wiedergabeliste',
          nameDesc: 'Der Name der Wiedergabeliste',
          visibilityDesc: 'Öffentlich oder Privat',
          error: 'Beim Erstellen der Wiedergabeliste ist ein Fehler aufgetreten.',
          successTitle: 'Wiedergabeliste erstellt',
          successMessage: 'Die Wiedergabeliste wurde erfolgreich erstellt.',
          visibilityLabel: 'Sichtbarkeit',
          public: 'Öffentlich',
          private: 'Privat'
        },
        deleteplaylist: {
          description: 'Lösche eine Wiedergabeliste',
          playlistDesc: 'Der Name der zu löschenden Wiedergabeliste',
          error: 'Beim Verarbeiten der Anfrage ist ein Fehler aufgetreten.',
          notFound: 'Wiedergabeliste nicht gefunden.',
          noPermission: 'Du hast keine Berechtigung, diese Wiedergabeliste zu löschen.',
          successTitle: 'Wiedergabeliste gelöscht',
          successMessage: 'Die Wiedergabeliste wurde gelöscht'
        },
        playplaylist: {
          description: 'Spiele eine Wiedergabeliste ab',
          playlistDesc: 'Der Name der Wiedergabeliste',
          notInVoiceChannel: 'Du musst in einem Sprachkanal sein, um diesen Befehl zu verwenden.',
          error: 'Beim Zugriff auf die Wiedergabeliste ist ein Fehler aufgetreten.',
          notFound: 'Wiedergabeliste nicht gefunden.',
          noPermission: 'Diese Wiedergabeliste ist privat und du bist nicht der Eigentümer.',
          emptyPlaylist: 'Die Wiedergabeliste ist leer.',
          successTitle: 'Wiedergabeliste gestartet',
          successMessage: 'Wiedergabeliste wird abgespielt',
          failedToPlay: 'Fehler beim Abspielen der Wiedergabeliste.',
        },
        removesong: {
          description: 'Entferne ein Lied aus einer Wiedergabeliste',
          playlistDesc: 'Der Name der Wiedergabeliste',
          songDesc: 'Die Lied-URL oder der Name',
          error: 'Beim Zugriff auf die Wiedergabeliste ist ein Fehler aufgetreten.',
          notFound: 'Wiedergabeliste nicht gefunden oder du bist nicht der Eigentümer.',
          removeError: 'Beim Entfernen des Liedes ist ein Fehler aufgetreten.',
          successTitle: 'Lied entfernt',
          successMessage: 'Entfernt',
          fromPlaylist: 'aus der Wiedergabeliste',
        },
        showallplaylists: {
          description: 'Zeige alle Wiedergabelisten an',
          error: 'Beim Abrufen der Wiedergabelisten ist ein Fehler aufgetreten.',
          noPlaylists: 'Keine Wiedergabelisten gefunden.',
          title: 'Alle Wiedergabelisten',
          page: 'Seite',
          songs: 'Lieder',
          by: 'Von',
          visibility: 'Sichtbarkeit',
          public: 'Öffentlich',
          private: 'Privat',
        },
        showplaylist: {
          description: 'Zeige deine Wiedergabelisten an',
          error: 'Beim Abrufen deiner Wiedergabelisten ist ein Fehler aufgetreten.',
          noPlaylists: 'Du hast keine Wiedergabelisten.',
          title: 'Deine Wiedergabelisten',
          page: 'Seite',
          songs: 'Lieder',
          visibility: 'Sichtbarkeit',
          public: 'Öffentlich',
          private: 'Privat',
        },
        playlist: {
          errorNotInVoiceChannel: 'Du musst in einem Sprachkanal sein, um diesen Befehl zu verwenden.',
          playlistAdded: 'Die Wiedergabeliste wurde zur Warteschlange hinzugefügt!',
          errorAddingPlaylist: 'Beim Hinzufügen der Wiedergabeliste zur Warteschlange ist ein Fehler aufgetreten.',
          titleError: 'Fehler',
          titlePlaylistAdded: 'Wiedergabeliste hinzugefügt',
          pdescription: 'Wiedergabeliste abspielen',

        },
        lyrics: {
          description: 'Hole die Liedtexte eines Liedes',
          songDescription: 'Das Lied, für das die Liedtexte angezeigt werden sollen',
          noLyricsFound: 'Keine Liedtexte für dieses Lied gefunden.',
        },
        showplaylistsongs: {
          description: 'Zeige alle Lieder in einer Wiedergabeliste an.',
          playlistDesc: 'Name der Wiedergabeliste.',
          errorAccess: 'Beim Zugriff auf die Wiedergabeliste ist ein Fehler aufgetreten.',
          errorNotFound: 'Wiedergabeliste nicht gefunden.',
          title: 'Lieder in der Wiedergabeliste',
          noSongs: 'Keine Lieder in der Wiedergabeliste.',
        },
        playSong: {
          authorName: 'Wird abgespielt..',
          url: 'https://discord.gg/xQF9f9yUEM',
          song: 'Lied',
          duration: 'Dauer',
          source: 'Quelle'
        },
        addSong: {
          authorName: 'Zur Warteschlange hinzugefügt',
          url: 'https://discord.gg/xQF9f9yUEM',
          addedToQueue: 'zur Warteschlange hinzugefügt'
        },
        error: {
          authorName: 'Warnung!',
          url: 'https://discord.gg/xQF9f9yUEM',
          errorMessage: 'Ein Fehler ist aufgetreten'
        },
        finish: {
          authorName: 'Warteschlange beendet',
          url: 'https://discord.gg/xQF9f9yUEM',
          description: 'Die Warteschlange ist beendet!'
        },
        disconnect: {
          authorName: 'Getrennt',
          url: 'https://discord.gg/xQF9f9yUEM',
          description: 'Vom Sprachkanal getrennt'
        },
        empty: {
          authorName: 'Kanal leer',
          url: 'https://discord.gg/xQF9f9yUEM',
          description: 'Der Sprachkanal ist leer, verlasse den Kanal.'
        }
      };
      
  