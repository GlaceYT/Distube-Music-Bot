module.exports = {
    // Play command
    playDescription: 'تشغيل أغنية',
    playErrorNotInVoiceChannel: 'يجب أن تكون في قناة صوتية لاستخدام هذا الأمر!',
    playSearchingForSong: 'جاري البحث عن {song}...',
    playErrorTitle: 'خطأ',
    playSearchingTitle: 'جاري البحث عن الأغنية',
  
    // Volume command
    volumeDescription: 'تعيين مستوى الصوت',
    volumeNoSongPlaying: 'لا توجد أغنية قيد التشغيل حالياً!',
    volumeInvalidLevel: 'يجب أن يكون مستوى الصوت بين 0 و 100.',
    volumeSetTitle: 'تم تعيين مستوى الصوت',
    volumeSetDescription: 'تم تعيين مستوى الصوت إلى {volume}%.',
  
    // Time command
    timeDescription: 'عرض وقت التشغيل الحالي',
    timeNoSongPlaying: 'لا توجد أغنية قيد التشغيل حالياً!',
    timeTitle: 'وقت التشغيل الحالي',
    timeDescriptionText: 'الوقت الحالي: `{currentTime}` / `{duration}`',
  
    // Stop command
    stopDescription: 'إيقاف الموسيقى ومسح الطابور',
    stopNoSongPlaying: 'لا توجد أغنية قيد التشغيل حالياً!',
    stopTitle: 'تم إيقاف الموسيقى',
    stopDescriptionText: 'تم إيقاف الموسيقى وتم مسح الطابور.',
  
    // Skip command
    skipDescription: 'تخطي الأغنية الحالية',
    skipNoSongPlaying: 'لا توجد أغنية قيد التشغيل حالياً!',
    skipNoMoreSongs: 'لا توجد أغاني أخرى لتخطيها!',
    skipTitle: 'تم تخطي الأغنية',
    skipDescriptionText: 'تم تخطي الأغنية الحالية!',
  
    // Shuffle command
    shuffleDescription: 'خلط الطابور',
    shuffleNoSongPlaying: 'لا توجد أغنية قيد التشغيل حالياً!',
    shuffleTitle: 'تم خلط الطابور',
    shuffleDescriptionText: 'تم خلط الطابور.',
  
    // Seek command
    seekDescription: 'البحث إلى وقت محدد في الأغنية',
    seekNoSongPlaying: 'لا توجد أغنية قيد التشغيل حالياً!',
    seekInvalidTime: 'يجب أن يكون الوقت ضمن مدة الأغنية.',
    seekTitle: 'تم البحث',
    seekDescriptionText: 'تم البحث إلى {time} في الأغنية.',
  
    // Resume command
    resumeDescription: 'استئناف الأغنية الموقوفة',
    resumeNoSongPlaying: 'لا توجد أغنية قيد التشغيل حالياً!',
    resumeAlreadyPlaying: 'الأغنية قيد التشغيل بالفعل!',
    resumeTitle: 'تم استئناف الأغنية',
    resumeDescriptionText: 'تم استئناف الأغنية!',
  
    // Remove command
    removeDescription: 'إزالة أغنية من الطابور',
    removeNoSongPlaying: 'لا توجد أغنية قيد التشغيل حالياً!',
    removeInvalidIndex: 'فهرس الأغنية غير صالح.',
    removeTitle: 'تم الإزالة',
    removeDescriptionText: 'تمت إزالة {song} من الطابور.',
  
    // Queue command
    queueDescription: 'عرض الطابور الحالي',
    queueNoSongPlaying: 'لا توجد أغنية قيد التشغيل حالياً!',
    queueTitle: 'الطابور الحالي',
    queueFooterText: 'إجمالي المدة: {duration}',
  
    // Previous command
    previousDescription: 'تشغيل الأغنية السابقة',
    previousNoSongPlaying: 'لا توجد أغنية قيد التشغيل حالياً!',
    previousTitle: 'تشغيل الأغنية السابقة',
    previousDescriptionText: 'تشغيل الأغنية السابقة في الطابور.',
  
    // Pause command
    pauseDescription: 'إيقاف الأغنية الحالية مؤقتاً',
    pauseNoSongPlaying: 'لا توجد أغنية قيد التشغيل حالياً!',
    pauseAlreadyPaused: 'الأغنية موقوفة بالفعل!',
    pauseTitle: 'تم إيقاف الأغنية مؤقتاً',
    pauseDescriptionText: 'تم إيقاف الأغنية مؤقتاً!',
  
    // Now Playing command
    nowplayingDescription: 'عرض الأغنية التي يتم تشغيلها حالياً',
    nowplayingNoSong: 'لا توجد أغنية قيد التشغيل حالياً!',
    nowplayingTitle: 'الآن قيد التشغيل',
  
    // Loop command
    loopDescription: 'تعيين وضع التكرار',
    loopNoSong: 'لا توجد أغنية قيد التشغيل حالياً!',
    loopInvalidMode: 'وضع التكرار غير صالح. الأوضاع الصالحة هي 0 (إيقاف)، 1 (أغنية)، 2 (طابور).',
    loopModeDisabled: 'تم إيقاف وضع التكرار',
    loopSongEnabled: 'تكرار الأغنية مفعل',
    loopQueueEnabled: 'تكرار الطابور مفعل',
    loopTitle: 'تم تعيين وضع التكرار',
  
    // Jump command
    jumpDescription: 'القفز إلى أغنية محددة في الطابور',
    jumpNoSong: 'لا توجد أغنية قيد التشغيل حالياً!',
    jumpInvalidIndex: 'فهرس الأغنية غير صالح.',
    jumpTitle: 'تم القفز',
    jumpSuccess: 'تم القفز إلى الأغنية رقم {index}.',
  
    // Find command
    findDescription: 'البحث عن أغنية',
    findNoVoiceChannel: 'يجب أن تكون في قناة صوتية لاستخدام هذا الأمر.',
    findNoResults: 'لم يتم العثور على أغاني لبحثك.',
    findTitle: 'نتائج البحث',
    findPrompt: 'اختر أغنية لإضافتها إلى الطابور:',
    findSongSelected: 'تم اختيار الأغنية **{title}** وسيتم تشغيلها!',
    
    // Filters
    filters: {
      description: 'عرض الفلاتر الصوتية المتاحة وتطبيق واحدة بالنقر على زر',
      errorTitle: 'خطأ',
      noSongPlaying: 'لا توجد أغنية قيد التشغيل حالياً!',
      availableFiltersTitle: 'الفلاتر المتاحة',
      clickButtonToApply: 'انقر على زر لتطبيق فلتر',
      clearFiltersLabel: 'مسح الفلاتر',
      notYourButton: 'لا يمكنك استخدام هذا الزر!',
      filtersCleared: 'تم مسح جميع الفلاتر.',
      appliedFilter: 'تم تطبيق الفلتر',
      timeout: 'انتهت مهلة اختيار الفلتر.'
    },
  
    // Clear command
    clear: {
      description: 'مسح الطابور',
      errorTitle: 'خطأ',
      noSongPlaying: 'لا توجد أغنية قيد التشغيل حالياً!',
      queueClearedTitle: 'تم مسح الطابور',
      queueClearedDescription: 'تم مسح الطابور.'
    },
  
    // Autoplay command
    autoplay: {
      description: 'تبديل التشغيل التلقائي',
      errorTitle: 'خطأ',
      noSongPlaying: 'لا توجد أغنية قيد التشغيل حالياً!',
      autoplayToggledTitle: 'تم تبديل التشغيل التلقائي',
      autoplayStatus: 'التشغيل التلقائي الآن',
      enabled: 'مفعل',
      disabled: 'معطل'
    },
 
    addsong: {
      description: 'إضافة أغنية إلى قائمة التشغيل',
      playlistDesc: 'اسم قائمة التشغيل',
      songDesc: 'رابط أو اسم الأغنية',
      errorAccess: 'حدث خطأ أثناء الوصول إلى قائمة التشغيل.',
      errorNotFound: 'لم يتم العثور على قائمة التشغيل أو أنك لست المالك.',
      errorAdd: 'حدث خطأ أثناء إضافة الأغنية.',
      successTitle: 'تمت إضافة الأغنية',
      addedSong: 'الأغنية المضافة',
      toPlaylist: 'إلى قائمة التشغيل'
    },
  
    // Create playlist command
    createplaylist: {
      description: 'إنشاء قائمة تشغيل جديدة',
      nameDesc: 'اسم قائمة التشغيل',
      visibilityDesc: 'عام أو خاص',
      error: 'حدث خطأ أثناء إنشاء قائمة التشغيل.',
      successTitle: 'تم إنشاء قائمة التشغيل',
      successMessage: 'تم إنشاء قائمة التشغيل بنجاح.',
      visibilityLabel: 'الخصوصية',
      public: 'عام',
      private: 'خاص'
    },
  
    // Delete playlist command
    deleteplaylist: {
      description: 'حذف قائمة تشغيل',
      playlistDesc: 'اسم قائمة التشغيل للحذف',
      error: 'حدث خطأ أثناء معالجة الطلب.',
      notFound: 'لم يتم العثور على قائمة التشغيل.',
      noPermission: 'ليس لديك إذن لحذف هذه القائمة.',
      successTitle: 'تم حذف قائمة التشغيل',
      successMessage: 'تم حذف قائمة التشغيل'
    },
  
    // Play playlist command
    playplaylist: {
      description: 'تشغيل قائمة تشغيل',
      playlistDesc: 'اسم قائمة التشغيل',
      notInVoiceChannel: 'يجب أن تكون في قناة صوتية لاستخدام هذا الأمر.',
      error: 'حدث خطأ أثناء الوصول إلى قائمة التشغيل.',
      notFound: 'لم يتم العثور على قائمة التشغيل.',
      noPermission: 'هذه القائمة خاصة وأنت لست المالك.',
      emptyPlaylist: 'قائمة التشغيل فارغة.',
      successTitle: 'تم بدء قائمة التشغيل',
      successMessage: 'بدأت تشغيل قائمة التشغيل',
      failedToPlay: 'فشل في تشغيل قائمة التشغيل.',
    },
  
    // Remove song command
    removesong: {
      description: 'إزالة أغنية من قائمة التشغيل',
      playlistDesc: 'اسم قائمة التشغيل',
      songDesc: 'رابط أو اسم الأغنية',
      error: 'حدث خطأ أثناء الوصول إلى قائمة التشغيل.',
      notFound: 'لم يتم العثور على قائمة التشغيل أو أنك لست المالك.',
      removeError: 'حدث خطأ أثناء إزالة الأغنية.',
      successTitle: 'تمت إزالة الأغنية',
      successMessage: 'تمت إزالة',
      fromPlaylist: 'من قائمة التشغيل',
    },
  
    // Show all playlists command
    showallplaylists: {
      description: 'عرض جميع قوائم التشغيل',
      error: 'حدث خطأ أثناء جلب قوائم التشغيل.',
      noPlaylists: 'لم يتم العثور على قوائم تشغيل.',
      title: 'جميع قوائم التشغيل',
      page: 'صفحة',
      songs: 'أغاني',
      by: 'بواسطة',
      visibility: 'الخصوصية',
      public: 'عام',
      private: 'خاص',
    },
  
    // Show playlist command
    showplaylist: {
      description: 'عرض قوائم التشغيل الخاصة بك',
      error: 'حدث خطأ أثناء جلب قوائم التشغيل الخاصة بك.',
      noPlaylists: 'لا توجد لديك قوائم تشغيل.',
      title: 'قوائم التشغيل الخاصة بك',
      page: 'صفحة',
      songs: 'أغاني',
      visibility: 'الخصوصية',
      public: 'عام',
      private: 'خاص',
    },
  
    // Playlist command
    playlist: {
      errorNotInVoiceChannel: 'يجب أن تكون في قناة صوتية لاستخدام هذا الأمر.',
      playlistAdded: 'تمت إضافة قائمة التشغيل إلى الطابور!',
      errorAddingPlaylist: 'حدث خطأ أثناء إضافة قائمة التشغيل إلى الطابور.',
      titleError: 'خطأ',
      titlePlaylistAdded: 'تمت إضافة قائمة التشغيل',
      pdescription: 'تشغيل قائمة التشغيل',

    },
  
    // Lyrics command
    lyrics: {
      description: 'الحصول على كلمات الأغنية',
      songDescription: 'الأغنية للحصول على كلماتها',
      noLyricsFound: 'لم يتم العثور على كلمات لتلك الأغنية.',
    },
  
    // Show playlist songs command
    showplaylistsongs: {
      description: 'عرض جميع الأغاني في قائمة التشغيل.',
      playlistDesc: 'اسم قائمة التشغيل.',
      errorAccess: 'حدث خطأ أثناء الوصول إلى قائمة التشغيل.',
      errorNotFound: 'لم يتم العثور على قائمة التشغيل.',
      title: 'أغاني في قائمة التشغيل',
      noSongs: 'لا توجد أغاني في قائمة التشغيل.',
    },
  
    // Play song command
    playSong: {
      authorName: 'تشغيل..',
      url: 'https://discord.gg/xQF9f9yUEM',
      song: 'أغنية',
      duration: 'مدة',
      source: 'مصدر'
    },
  
    // Add song command
    addSong: {
      authorName: 'تمت الإضافة إلى الطابور',
      url: 'https://discord.gg/xQF9f9yUEM',
      addedToQueue: 'أضيفت إلى الطابور'
    },
  
    // Error command
    error: {
      authorName: 'تنبيه!',
      url: 'https://discord.gg/xQF9f9yUEM',
      errorMessage: 'تم العثور على خطأ'
    },
  
    // Finish command
    finish: {
      authorName: 'انتهت الطابور',
      url: 'https://discord.gg/xQF9f9yUEM',
      description: 'انتهت الطابور!'
    },
  
    // Disconnect command
    disconnect: {
      authorName: 'تم فصل الاتصال',
      url: 'https://discord.gg/xQF9f9yUEM',
      description: 'تم فصل الاتصال من قناة الصوت'
    },
  
    // Empty command
    empty: {
      authorName: 'القناة فارغة',
      url: 'https://discord.gg/xQF9f9yUEM',
      description: 'القناة الصوتية فارغة، سيتم الخروج من القناة.'
    }
  };
  