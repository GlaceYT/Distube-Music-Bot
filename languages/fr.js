module.exports = {
    // Play command
    playDescription: 'Jouer une chanson',
    playErrorNotInVoiceChannel: 'Vous devez être dans un salon vocal pour utiliser cette commande !',
    playSearchingForSong: 'Recherche de {song}...',
    playErrorTitle: 'Erreur',
    playSearchingTitle: 'Recherche de chanson',
    // Volume command
    volumeDescription: 'Régler le volume',
    volumeNoSongPlaying: 'Aucune chanson en cours de lecture pour l\'instant !',
    volumeInvalidLevel: 'Le niveau de volume doit être compris entre 0 et 100.',
    volumeSetTitle: 'Volume réglé',
    volumeSetDescription: 'Volume réglé à {volume}%.',
    // Time command
    timeDescription: 'Afficher le temps de lecture actuel',
    timeNoSongPlaying: 'Aucune chanson en cours de lecture pour l\'instant !',
    timeTitle: 'Temps de lecture actuel',
    timeDescriptionText: 'Temps actuel : `{currentTime}` / `{duration}`',
    // Stop command
    stopDescription: 'Arrêter la musique et vider la file d\'attente',
    stopNoSongPlaying: 'Aucune chanson en cours de lecture pour l\'instant !',
    stopTitle: 'Musique arrêtée',
    stopDescriptionText: 'La musique a été arrêtée et la file d\'attente a été vidée.',
    // Skip command
    skipDescription: 'Passer à la chanson suivante',
    skipNoSongPlaying: 'Aucune chanson en cours de lecture pour l\'instant !',
    skipNoMoreSongs: 'Plus de chansons à passer !',
    skipTitle: 'Chanson passée',
    skipDescriptionText: 'Chanson actuelle passée !',
    // Shuffle command
    shuffleDescription: 'Mélanger la file d\'attente',
    shuffleNoSongPlaying: 'Aucune chanson en cours de lecture pour l\'instant !',
    shuffleTitle: 'File d\'attente mélangée',
    shuffleDescriptionText: 'La file d\'attente a été mélangée.',
    // Seek command
    seekDescription: 'Aller à un moment précis dans la chanson',
    seekNoSongPlaying: 'Aucune chanson en cours de lecture pour l\'instant !',
    seekInvalidTime: 'Le temps doit être compris dans la durée de la chanson.',
    seekTitle: 'Recherche effectuée',
    seekDescriptionText: 'Recherche effectuée à {time} dans la chanson.',
    // Resume command
    resumeDescription: 'Reprendre la chanson en pause',
    resumeNoSongPlaying: 'Aucune chanson en cours de lecture pour l\'instant !',
    resumeAlreadyPlaying: 'La chanson est déjà en cours de lecture !',
    resumeTitle: 'Chanson reprise',
    resumeDescriptionText: 'Chanson reprise !',
    // Remove command
    removeDescription: 'Supprimer une chanson de la file d\'attente',
    removeNoSongPlaying: 'Aucune chanson en cours de lecture pour l\'instant !',
    removeInvalidIndex: 'Index de chanson invalide.',
    removeTitle: 'Supprimé',
    removeDescriptionText: 'Supprimé {song} de la file d\'attente.',
    // Queue command
    queueDescription: 'Afficher la file d\'attente actuelle',
    queueNoSongPlaying: 'Aucune chanson en cours de lecture pour l\'instant !',
    queueTitle: 'File d\'attente actuelle',
    queueFooterText: 'Durée totale : {duration}',
    // Previous command
    previousDescription: 'Jouer la chanson précédente',
    previousNoSongPlaying: 'Aucune chanson en cours de lecture pour l\'instant !',
    previousTitle: 'Lecture de la chanson précédente',
    previousDescriptionText: 'Lecture de la chanson précédente dans la file d\'attente.',
    // Pause command
    pauseDescription: 'Mettre en pause la chanson en cours',
    pauseNoSongPlaying: 'Aucune chanson en cours de lecture pour l\'instant !',
    pauseAlreadyPaused: 'La chanson est déjà en pause !',
    pauseTitle: 'Chanson en pause',
    pauseDescriptionText: 'Chanson mise en pause !',
    // Now Playing command
    nowplayingDescription: 'Afficher la chanson en cours de lecture',
    nowplayingNoSong: 'Aucune chanson en cours de lecture pour l\'instant !',
    nowplayingTitle: 'En cours de lecture',
    // Loop command
    loopDescription: 'Définir le mode de boucle',
    loopNoSong: 'Aucune chanson en cours de lecture pour l\'instant !',
    loopInvalidMode: 'Mode de boucle invalide. Les modes valides sont 0 (désactivé), 1 (chanson), 2 (file d\'attente).',
    loopModeDisabled: 'Mode boucle désactivé',
    loopSongEnabled: 'Boucle de chanson activée',
    loopQueueEnabled: 'Boucle de file d\'attente activée',
    loopTitle: 'Mode de boucle défini',
    // Jump command
    jumpDescription: 'Passer à une chanson spécifique dans la file d\'attente',
    jumpNoSong: 'Aucune chanson en cours de lecture pour l\'instant !',
    jumpInvalidIndex: 'Index de chanson invalide.',
    jumpTitle: 'Sauté',
    jumpSuccess: 'Passé à la chanson numéro {index}.',
    findDescription: 'Rechercher une chanson',
    findNoVoiceChannel: 'Vous devez être dans un salon vocal pour utiliser cette commande.',
    findNoResults: 'Aucune chanson trouvée pour votre recherche.',
    findTitle: 'Résultats de recherche',
    findPrompt: 'Sélectionnez une chanson à ajouter à la file d\'attente :',
    findSongSelected: 'La chanson sélectionnée **{title}** sera jouée !',
    // filters.js
    filters: {
      description: 'Afficher les filtres audio disponibles et en appliquer un en cliquant sur un bouton',
      errorTitle: 'Erreur',
      noSongPlaying: 'Aucune chanson en cours de lecture pour l\'instant !',
      availableFiltersTitle: 'Filtres disponibles',
      clickButtonToApply: 'Cliquez sur un bouton pour appliquer un filtre',
      clearFiltersLabel: 'Effacer les filtres',
      notYourButton: 'Vous ne pouvez pas utiliser ce bouton !',
      filtersCleared: 'Tous les filtres ont été effacés.',
      appliedFilter: 'Filtre appliqué',
      timeout: 'La sélection du filtre a expiré.'
    },
    clear: {
      description: 'Vider la file d\'attente',
      errorTitle: 'Erreur',
      noSongPlaying: 'Aucune chanson en cours de lecture pour l\'instant !',
      queueClearedTitle: 'File d\'attente vidée',
      queueClearedDescription: 'La file d\'attente a été vidée.'
    },
    autoplay: {
      description: 'Activer/désactiver la lecture automatique',
      errorTitle: 'Erreur',
      noSongPlaying: 'Aucune chanson en cours de lecture pour l\'instant !',
      autoplayToggledTitle: 'Lecture automatique activée/désactivée',
      autoplayStatus: 'La lecture automatique est maintenant',
      enabled: 'activée',
      disabled: 'désactivée'
    },
    addsong: {
        description: 'Ajouter une chanson à une playlist',
        playlistDesc: 'Le nom de la playlist',
        songDesc: 'L\'URL ou le nom de la chanson',
        errorAccess: 'Une erreur est survenue lors de l\'accès à la playlist.',
        errorNotFound: 'Playlist non trouvée ou vous n\'êtes pas le propriétaire.',
        errorAdd: 'Une erreur est survenue lors de l\'ajout de la chanson.',
        successTitle: 'Chanson ajoutée',
        addedSong: 'Chanson ajoutée',
        toPlaylist: 'à la playlist'
      },
      createplaylist: {
        description: 'Créer une nouvelle playlist',
        nameDesc: 'Le nom de la playlist',
        visibilityDesc: 'Public ou Privé',
        error: 'Une erreur est survenue lors de la création de la playlist.',
        successTitle: 'Playlist créée',
        successMessage: 'La playlist a été créée avec succès.',
        visibilityLabel: 'Visibilité',
        public: 'Public',
        private: 'Privé'
      },
      deleteplaylist: {
        description: 'Supprimer une playlist',
        playlistDesc: 'Le nom de la playlist à supprimer',
        error: 'Une erreur est survenue lors du traitement de la demande.',
        notFound: 'Playlist non trouvée.',
        noPermission: 'Vous n\'avez pas la permission de supprimer cette playlist.',
        successTitle: 'Playlist supprimée',
        successMessage: 'La playlist a été supprimée'
      },
      playplaylist: {
        description: 'Lire une playlist',
        playlistDesc: 'Le nom de la playlist',
        notInVoiceChannel: 'Vous devez être dans un salon vocal pour utiliser cette commande.',
        error: 'Une erreur est survenue lors de l\'accès à la playlist.',
        notFound: 'Playlist non trouvée.',
        noPermission: 'Cette playlist est privée et vous n\'êtes pas le propriétaire.',
        emptyPlaylist: 'La playlist est vide.',
        successTitle: 'Playlist démarrée',
        successMessage: 'Lecture de la playlist démarrée',
        failedToPlay: 'Impossible de lire la playlist.',
      },
      removesong: {
        description: 'Supprimer une chanson d\'une playlist',
        playlistDesc: 'Le nom de la playlist',
        songDesc: 'L\'URL ou le nom de la chanson',
        error: 'Une erreur est survenue lors de l\'accès à la playlist.',
        notFound: 'Playlist non trouvée ou vous n\'êtes pas le propriétaire.',
        removeError: 'Une erreur est survenue lors de la suppression de la chanson.',
        successTitle: 'Chanson supprimée',
        successMessage: 'Supprimé',
        fromPlaylist: 'de la playlist',
      },
      showallplaylists: {
        description: 'Afficher toutes les playlists',
        error: 'Une erreur est survenue lors de la récupération des playlists.',
        noPlaylists: 'Aucune playlist trouvée.',
        title: 'Toutes les playlists',
        page: 'Page',
        songs: 'chansons',
        by: 'Par',
        visibility: 'Visibilité',
        public: 'Public',
        private: 'Privé',
      },
      showplaylist: {
        description: 'Afficher vos playlists',
        error: 'Une erreur est survenue lors de la récupération de vos playlists.',
        noPlaylists: 'Vous n\'avez aucune playlist.',
        title: 'Vos playlists',
        page: 'Page',
        songs: 'chansons',
        visibility: 'Visibilité',
        public: 'Public',
        private: 'Privé',
      },
      lyrics: {
        description: 'Obtenir les paroles d\'une chanson',
        songDescription: 'La chanson pour laquelle obtenir les paroles',
        noLyricsFound: 'Aucune parole trouvée pour cette chanson.',
      },
      showplaylistsongs: {
        description: 'Afficher toutes les chansons d\'une playlist.',
        playlistDesc: 'Nom de la playlist.',
        errorAccess: 'Une erreur est survenue lors de l\'accès à la playlist.',
        errorNotFound: 'Playlist non trouvée.',
        title: 'Chansons dans la playlist',
        noSongs: 'Aucune chanson dans la playlist.',
      },
      playlist: {
        errorNotInVoiceChannel: 'Vous devez être dans un canal vocal pour utiliser cette commande.',
        playlistAdded: 'La playlist a été ajoutée à la file d\'attente !',
        errorAddingPlaylist: 'Une erreur est survenue lors de l\'ajout de la playlist à la file d\'attente.',
        titleError: 'Erreur',
        titlePlaylistAdded: 'Playlist ajoutée',
        pdescription: 'Veuillez entrer l\'URL de la playlist.'
      },
      playSong: {
        authorName: 'Lecture en cours..',
        url: 'https://discord.gg/xQF9f9yUEM',
        song: 'Chanson',
        duration: 'Durée',
        source: 'Source'
      },
      addSong: {
        authorName: 'Ajoutée à la file d\'attente',
        url: 'https://discord.gg/xQF9f9yUEM',
        addedToQueue: 'ajoutée à la file d\'attente'
      },
      error: {
        authorName: 'Alerte!',
        url: 'https://discord.gg/xQF9f9yUEM',
        errorMessage: 'Une erreur est survenue'
      },
      finish: {
        authorName: 'File d\'attente terminée',
        url: 'https://discord.gg/xQF9f9yUEM',
        description: 'La file d\'attente est terminée !'
      },
      disconnect: {
        authorName: 'Déconnecté',
        url: 'https://discord.gg/xQF9f9yUEM',
        description: 'Déconnecté du salon vocal'
      },
      empty: {
        authorName: 'Salon vide',
        url: 'https://discord.gg/xQF9f9yUEM',
        description: 'Le salon vocal est vide, quittant le salon.'
      }
    };
  
  