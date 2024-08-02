module.exports = {
    // Play command
    playDescription: 'Reproducir una canción',
    playErrorNotInVoiceChannel: '¡Necesitas estar en un canal de voz para usar este comando!',
    playSearchingForSong: 'Buscando {song}...',
    playErrorTitle: 'Error',
    playSearchingTitle: 'Buscando Canción',
    
    // Volume command
    volumeDescription: 'Establecer el volumen',
    volumeNoSongPlaying: '¡No hay ninguna canción reproduciéndose en este momento!',
    volumeInvalidLevel: 'El nivel de volumen debe estar entre 0 y 100.',
    volumeSetTitle: 'Volumen Establecido',
    volumeSetDescription: 'Volumen establecido en {volume}%.',
    
    // Time command
    timeDescription: 'Mostrar el tiempo de reproducción actual',
    timeNoSongPlaying: '¡No hay ninguna canción reproduciéndose en este momento!',
    timeTitle: 'Tiempo de Reproducción Actual',
    timeDescriptionText: 'Tiempo actual: `{currentTime}` / `{duration}`',
    
    // Stop command
    stopDescription: 'Detener la música y limpiar la cola',
    stopNoSongPlaying: '¡No hay ninguna canción reproduciéndose en este momento!',
    stopTitle: 'Música Detenida',
    stopDescriptionText: 'La música se ha detenido y la cola ha sido limpiada.',
    
    // Skip command
    skipDescription: 'Saltar la canción actual',
    skipNoSongPlaying: '¡No hay ninguna canción reproduciéndose en este momento!',
    skipNoMoreSongs: '¡No hay más canciones para saltar!',
    skipTitle: 'Canción Saltada',
    skipDescriptionText: '¡Saltada la canción actual!',
    
    // Shuffle command
    shuffleDescription: 'Mezclar la cola',
    shuffleNoSongPlaying: '¡No hay ninguna canción reproduciéndose en este momento!',
    shuffleTitle: 'Cola Mezclada',
    shuffleDescriptionText: 'La cola ha sido mezclada.',
    
    // Seek command
    seekDescription: 'Buscar en un tiempo específico de la canción',
    seekNoSongPlaying: '¡No hay ninguna canción reproduciéndose en este momento!',
    seekInvalidTime: 'El tiempo debe estar dentro de la duración de la canción.',
    seekTitle: 'Buscado',
    seekDescriptionText: 'Buscado en {time} en la canción.',
    
    // Resume command
    resumeDescription: 'Reanudar la canción pausada',
    resumeNoSongPlaying: '¡No hay ninguna canción reproduciéndose en este momento!',
    resumeAlreadyPlaying: '¡La canción ya se está reproduciendo!',
    resumeTitle: 'Canción Reanudada',
    resumeDescriptionText: '¡Se ha reanudado la canción!',
    
    // Remove command
    removeDescription: 'Eliminar una canción de la cola',
    removeNoSongPlaying: '¡No hay ninguna canción reproduciéndose en este momento!',
    removeInvalidIndex: 'Índice de canción inválido.',
    removeTitle: 'Eliminado',
    removeDescriptionText: 'Eliminada {song} de la cola.',
    
    // Queue command
    queueDescription: 'Mostrar la cola actual',
    queueNoSongPlaying: '¡No hay ninguna canción reproduciéndose en este momento!',
    queueTitle: 'Cola Actual',
    queueFooterText: 'Duración total: {duration}',
    
    // Previous command
    previousDescription: 'Reproducir la canción anterior',
    previousNoSongPlaying: '¡No hay ninguna canción reproduciéndose en este momento!',
    previousTitle: 'Reproduciendo Canción Anterior',
    previousDescriptionText: 'Reproduciendo la canción anterior en la cola.',
    
    // Pause command
    pauseDescription: 'Pausar la canción actual',
    pauseNoSongPlaying: '¡No hay ninguna canción reproduciéndose en este momento!',
    pauseAlreadyPaused: '¡La canción ya está pausada!',
    pauseTitle: 'Canción Pausada',
    pauseDescriptionText: '¡Se ha pausado la canción!',
    
    // Now Playing command
    nowplayingDescription: 'Mostrar la canción que se está reproduciendo actualmente',
    nowplayingNoSong: '¡No hay ninguna canción reproduciéndose en este momento!',
    nowplayingTitle: 'Ahora Reproduciendo',
    
    // Loop command
    loopDescription: 'Establecer el modo de repetición',
    loopNoSong: '¡No hay ninguna canción reproduciéndose en este momento!',
    loopInvalidMode: 'Modo de repetición inválido. Los modos válidos son 0 (desactivado), 1 (canción), 2 (cola).',
    loopModeDisabled: 'Modo de repetición desactivado',
    loopSongEnabled: 'Repetición de canción activada',
    loopQueueEnabled: 'Repetición de cola activada',
    loopTitle: 'Modo de Repetición Establecido',
    
    // Jump command
    jumpDescription: 'Saltar a una canción específica en la cola',
    jumpNoSong: '¡No hay ninguna canción reproduciéndose en este momento!',
    jumpInvalidIndex: 'Índice de canción inválido.',
    jumpTitle: 'Saltar',
    jumpSuccess: 'Saltado a la canción número {index}.',
    
    // Find command
    findDescription: 'Buscar una canción',
    findNoVoiceChannel: 'Necesitas estar en un canal de voz para usar este comando.',
    findNoResults: 'No se encontraron canciones para tu consulta.',
    findTitle: 'Resultados de la Búsqueda',
    findPrompt: 'Selecciona una canción para agregar a la cola:',
    findSongSelected: '¡Canción seleccionada **{title}** será reproducida!',
    
    // Filters command
    filters: {
      description: 'Mostrar filtros de audio disponibles y aplicar uno haciendo clic en un botón',
      errorTitle: 'Error',
      noSongPlaying: '¡No hay ninguna canción reproduciéndose en este momento!',
      availableFiltersTitle: 'Filtros Disponibles',
      clickButtonToApply: 'Haz clic en un botón para aplicar un filtro',
      clearFiltersLabel: 'Eliminar Filtros',
      notYourButton: '¡No puedes usar este botón!',
      filtersCleared: 'Todos los filtros han sido eliminados.',
      appliedFilter: 'Filtro aplicado',
      timeout: 'Selección de filtro expiró.'
    },
    
    // Clear command
    clear: {
      description: 'Limpiar la cola',
      errorTitle: 'Error',
      noSongPlaying: '¡No hay ninguna canción reproduciéndose en este momento!',
      queueClearedTitle: 'Cola Limpiada',
      queueClearedDescription: 'La cola ha sido limpiada.'
    },
    
    // Autoplay command
    autoplay: {
      description: 'Alternar reproducción automática',
      errorTitle: 'Error',
      noSongPlaying: '¡No hay ninguna canción reproduciéndose en este momento!',
      autoplayToggledTitle: 'Reproducción Automática Alternada',
      autoplayStatus: 'La reproducción automática está ahora',
      enabled: 'habilitada',
      disabled: 'desactivada'
    },
  
        // Add song command
        addsong: {
          description: 'Agregar una canción a una lista de reproducción',
          playlistDesc: 'El nombre de la lista de reproducción',
          songDesc: 'La URL o nombre de la canción',
          errorAccess: 'Se produjo un error al acceder a la lista de reproducción.',
          errorNotFound: 'Lista de reproducción no encontrada o no eres el propietario.',
          errorAdd: 'Se produjo un error al agregar la canción.',
          successTitle: 'Canción Agregada',
          addedSong: 'Canción agregada',
          toPlaylist: 'a la lista de reproducción'
        },
      
        // Create playlist command
        createplaylist: {
          description: 'Crear una nueva lista de reproducción',
          nameDesc: 'El nombre de la lista de reproducción',
          visibilityDesc: 'Pública o Privada',
          error: 'Se produjo un error al crear la lista de reproducción.',
          successTitle: 'Lista de Reproducción Creada',
          successMessage: 'La lista de reproducción se ha creado con éxito.',
          visibilityLabel: 'Visibilidad',
          public: 'Pública',
          private: 'Privada'
        },
      
        // Delete playlist command
        deleteplaylist: {
          description: 'Eliminar una lista de reproducción',
          playlistDesc: 'El nombre de la lista de reproducción a eliminar',
          error: 'Se produjo un error al procesar la solicitud.',
          notFound: 'Lista de reproducción no encontrada.',
          noPermission: 'No tienes permiso para eliminar esta lista de reproducción.',
          successTitle: 'Lista de Reproducción Eliminada',
          successMessage: 'La lista de reproducción ha sido eliminada'
        },
      
        // Play playlist command
        playplaylist: {
          description: 'Reproducir una lista de reproducción',
          playlistDesc: 'El nombre de la lista de reproducción',
          notInVoiceChannel: 'Necesitas estar en un canal de voz para usar este comando.',
          error: 'Se produjo un error al acceder a la lista de reproducción.',
          notFound: 'Lista de reproducción no encontrada.',
          noPermission: 'Esta lista de reproducción es privada y no eres el propietario.',
          emptyPlaylist: 'La lista de reproducción está vacía.',
          successTitle: 'Lista de Reproducción Iniciada',
          successMessage: 'Se ha comenzado a reproducir la lista de reproducción',
          failedToPlay: 'No se pudo reproducir la lista de reproducción.',
        },
      
        // Remove song command
        removesong: {
          description: 'Eliminar una canción de una lista de reproducción',
          playlistDesc: 'El nombre de la lista de reproducción',
          songDesc: 'La URL o nombre de la canción',
          error: 'Se produjo un error al acceder a la lista de reproducción.',
          notFound: 'Lista de reproducción no encontrada o no eres el propietario.',
          removeError: 'Se produjo un error al eliminar la canción.',
          successTitle: 'Canción Eliminada',
          successMessage: 'Eliminada',
          fromPlaylist: 'de la lista de reproducción',
        },
      
        // Show all playlists command
        showallplaylists: {
          description: 'Mostrar todas las listas de reproducción',
          error: 'Se produjo un error al obtener las listas de reproducción.',
          noPlaylists: 'No se encontraron listas de reproducción.',
          title: 'Todas las Listas de Reproducción',
          page: 'Página',
          songs: 'canciones',
          by: 'Por',
          visibility: 'Visibilidad',
          public: 'Pública',
          private: 'Privada',
        },
      
        // Show playlist command
        showplaylist: {
          description: 'Mostrar tus listas de reproducción',
          error: 'Se produjo un error al obtener tus listas de reproducción.',
          noPlaylists: 'No tienes listas de reproducción.',
          title: 'Tus Listas de Reproducción',
          page: 'Página',
          songs: 'canciones',
          visibility: 'Visibilidad',
          public: 'Pública',
          private: 'Privada',
        },
      
        // Playlist command
        playlist: {
          errorNotInVoiceChannel: 'Necesitas estar en un canal de voz para usar este comando.',
          playlistAdded: '¡La lista de reproducción ha sido agregada a la cola!',
          errorAddingPlaylist: 'Se produjo un error al agregar la lista de reproducción a la cola.',
          titleError: 'Error',
          titlePlaylistAdded: 'Lista de Reproducción Agregada',
          pdescription: 'reproducir una lista de reproducción',

        },
      
        // Lyrics command
        lyrics: {
          description: 'Obtener la letra de una canción',
          songDescription: 'La canción para obtener la letra',
          noLyricsFound: 'No se encontraron letras para esa canción.',
        },
      
        // Show playlist songs command
        showplaylistsongs: {
          description: 'Mostrar todas las canciones en una lista de reproducción.',
          playlistDesc: 'Nombre de la lista de reproducción.',
          errorAccess: 'Se produjo un error al acceder a la lista de reproducción.',
          errorNotFound: 'Lista de reproducción no encontrada.',
          title: 'Canciones en la Lista de Reproducción',
          noSongs: 'No hay canciones en la lista de reproducción.',
        },
      
        // Play song command
        playSong: {
          authorName: 'Reproduciendo..',
          url: 'https://discord.gg/xQF9f9yUEM',
          song: 'Canción',
          duration: 'Duración',
          source: 'Fuente'
        },
      
        // Add song command
        addSong: {
          authorName: 'Agregado a la Cola',
          url: 'https://discord.gg/xQF9f9yUEM',
          addedToQueue: 'agregado a la cola'
        },
      
        // Error command
        error: {
          authorName: '¡Alerta!',
          url: 'https://discord.gg/xQF9f9yUEM',
          errorMessage: 'Se encontró un error'
        },
      
        // Finish command
        finish: {
          authorName: 'Cola Terminada',
          url: 'https://discord.gg/xQF9f9yUEM',
          description: '¡La cola ha terminado!'
        },
      
        // Disconnect command
        disconnect: {
          authorName: 'Desconectado',
          url: 'https://discord.gg/xQF9f9yUEM',
          description: 'Desconectado del canal de voz'
        },
      
        // Empty command
        empty: {
          authorName: 'Canal Vacío',
          url: 'https://discord.gg/xQF9f9yUEM',
          description: 'El canal de voz está vacío, saliendo del canal.'
        }
      };
      
  