module.exports = {
// Play command
playDescription: 'Bir şarkı çal',  
playErrorNotInVoiceChannel: 'Bu komutu kullanmak için bir ses kanalında olmalısınız!',  
playSearchingForSong: '{song} şarkısını arıyor...',  
playErrorTitle: 'Hata:',  
playSearchingTitle: 'Şarkı arıyor',  

// Volume command
volumeDescription: 'Ses seviyesini ayarlayın',  
volumeNoSongPlaying: 'Şu anda çalan bir şarkı yok!',  
volumeInvalidLevel: 'Ses seviyesi 1 ile 100 arasında olmalıdır!',  
volumeSetTitle: 'Ses seviyesi ayarlandı',  
volumeSetDescription: 'Ses seviyesi {volume}% olarak ayarlandı',  

// Time command
timeDescription: 'Mevcut oynatma süresini gösterin',  
timeNoSongPlaying: 'Şu anda çalan bir şarkı yok!',  
timeTitle: 'Mevcut oynatma süresi:',  
timeDescriptionText: 'Şu anki zaman: {currentTime} / {duration}',  

// Stop command
stopDescription: 'Müziği durdur ve kuyruğu temizle',  
stopNoSongPlaying: 'Şu anda çalan bir şarkı yok!',  
stopTitle: 'Müziği durdur ve kuyruğu temizle',  
stopDescriptionText: 'Müziği durdurdu ve kuyruğu temizledi',  

// Skip command
skipDescription: 'Mevcut şarkıyı atla',  
skipNoSongPlaying: 'Şu anda çalan bir şarkı yok!',  
skipNoMoreSongs: 'Daha fazla şarkı yok!',  
skipTitle: 'Şarkıyı atla',  
  
  // Shuffle command
shuffleDescription: 'Kuyruğu karıştır',  
shuffleNoSongPlaying: 'Şu anda çalan bir şarkı yok!',  
shuffleTitle: 'Kuyruk karıştırıldı',  
shuffleDescriptionText: 'Kuyruk karıştırıldı.',  

// Seek command
seekDescription: 'Şarkıda belirli bir zamana git',  
seekNoSongPlaying: 'Şu anda çalan bir şarkı yok!',  
seekInvalidTime: 'Zaman, şarkının süresi içinde olmalıdır.',  
seekTitle: 'Arama yapıldı',  
seekDescriptionText: 'Şarkıda {time} zamanına arama yapıldı.',  

// Resume command
resumeDescription: 'Durdurulan şarkıyı devam ettir',  
resumeNoSongPlaying: 'Şu anda çalan bir şarkı yok!',  
resumeAlreadyPlaying: 'Şarkı zaten çalıyor!',  
resumeTitle: 'Şarkı devam ettirildi',  
resumeDescriptionText: 'Şarkı devam ettirildi!',  

// Remove command
removeDescription: 'Kuyruktan bir şarkıyı kaldır',  
removeNoSongPlaying: 'Şu anda çalan bir şarkı yok!',  
removeInvalidIndex: 'Geçersiz şarkı indeksi.',  
removeTitle: 'Kaldırıldı',  
removeDescriptionText: '{song} kuyruktan kaldırıldı.',  

// Queue command
queueDescription: 'Mevcut kuyruğu göster',  
queueNoSongPlaying: 'Şu anda çalan bir şarkı yok!',  
queueTitle: 'Mevcut kuyruk',  
queueFooterText: 'Toplam süre: {duration}',  

// Previous command
previousDescription: 'Önceki şarkıyı çal',  
previousNoSongPlaying: 'Şu anda çalan bir şarkı yok!',  
previousTitle: 'Önceki şarkı çalınıyor',  
previousDescriptionText: 'Kuyruktaki önceki şarkı çalınıyor.',  

// Pause command
pauseDescription: 'Mevcut şarkıyı duraklat',  
pauseNoSongPlaying: 'Şu anda çalan bir şarkı yok!',  
pauseAlreadyPaused: 'Şarkı zaten duraklatıldı!',  
pauseTitle: 'Şarkı duraklatıldı',  
pauseDescriptionText: 'Şarkı duraklatıldı!',  

// Now Playing command
nowplayingDescription: 'Şu anda çalınan şarkıyı göster',  
nowplayingNoSong: 'Şu anda çalan bir şarkı yok!',  
nowplayingTitle: 'Şu anda çalınıyor',  

// Loop command
loopDescription: 'Döngü modunu ayarla',  
loopNoSong: 'Şu anda çalan bir şarkı yok!',  
loopInvalidMode: 'Geçersiz döngü modu. Geçerli modlar: 0 (Kapalı), 1 (Şarkı), 2 (Kuyruk).',  
loopModeDisabled: 'Döngü modu kapatıldı',  
loopSongEnabled: 'Şarkı döngüsü etkinleştirildi',  
loopQueueEnabled: 'Kuyruk döngüsü etkinleştirildi',  
loopTitle: 'Döngü modu ayarlandı',  

// Jump command
jumpDescription: 'Kuyrukta belirli bir şarkıya geç',  
jumpNoSong: 'Şu anda çalan bir şarkı yok!',  
jumpInvalidIndex: 'Geçersiz şarkı indeksi.',  
jumpTitle: 'Geçiş yapıldı',  
jumpSuccess: '{index} numaralı şarkıya geçildi.',  

// Find command
findDescription: 'Şarkı ara',  
findNoVoiceChannel: 'Bu komutu kullanmak için bir ses kanalında olmalısınız.',  
findNoResults: 'Aramanıza uygun şarkı bulunamadı.',  
findTitle: 'Arama sonuçları',  
findPrompt: 'Kuyruğa eklemek için bir şarkı seçin:',  
findSongSelected: '**{title}** şarkısı seçildi ve çalınacak!',  

// Filters
filters: {
  description: 'Mevcut ses filtrelerini göster ve birini uygulamak için butona tıkla',  
  errorTitle: 'Hata',  
  noSongPlaying: 'Şu anda çalan bir şarkı yok!',  
  availableFiltersTitle: 'Mevcut Filtreler',  
  clickButtonToApply: 'Filtre uygulamak için butona tıklayın',  
  clearFiltersLabel: 'Filtreleri temizle',  
  notYourButton: 'Bu butonu kullanamazsınız!',  
  filtersCleared: 'Tüm filtreler temizlendi.',  
  appliedFilter: 'Filtre uygulandı',  
  timeout: 'Filtre seçimi zaman aşımına uğradı.'  
},

// Clear command
clear: {
  description: 'Kuyruğu temizle',  
  errorTitle: 'Hata',  
  noSongPlaying: 'Şu anda çalan bir şarkı yok!',  
  queueClearedTitle: 'Kuyruk temizlendi',  
  queueClearedDescription: 'Kuyruk temizlendi.'  
},

// Autoplay command
autoplay: {
  description: 'Otomatik oynatmayı aç/kapat',  
  errorTitle: 'Hata',  
  noSongPlaying: 'Şu anda çalan bir şarkı yok!',  
  autoplayToggledTitle: 'Otomatik oynatma değiştirildi',  
  autoplayStatus: 'Otomatik oynatma şu anda',  
  enabled: 'aktif',  
  disabled: 'pasif'  
},

// Add song command
addsong: {
  description: 'Bir şarkıyı oynatma listesine ekle',  
  playlistDesc: 'Oynatma listesi adı',  
  songDesc: 'Şarkı bağlantısı veya adı',  
  errorAccess: 'Oynatma listesine erişim sırasında hata oluştu.',  
  errorNotFound: 'Oynatma listesi bulunamadı veya sahibi değilsiniz.',  
  errorAdd: 'Şarkı eklenirken hata oluştu.',  
  successTitle: 'Şarkı eklendi',  
  addedSong: 'Eklenen şarkı',  
  toPlaylist: 'oynatma listesine eklendi'  
},

// Create playlist command
createplaylist: {
  description: 'Yeni bir oynatma listesi oluştur',  
  nameDesc: 'Oynatma listesi adı',  
  visibilityDesc: 'Genel veya özel',  
  error: 'Oynatma listesi oluşturulurken hata oluştu.',  
  successTitle: 'Oynatma listesi oluşturuldu',  
  successMessage: 'Oynatma listesi başarıyla oluşturuldu.',  
  visibilityLabel: 'Gizlilik',  
  public: 'Genel',  
  private: 'Özel'  
},

// Delete playlist command
deleteplaylist: {
  description: 'Oynatma listesini sil',  
  playlistDesc: 'Silinecek oynatma listesi adı',  
  error: 'İstek işlenirken hata oluştu.',  
  notFound: 'Oynatma listesi bulunamadı.',  
  noPermission: 'Bu listeyi silme izniniz yok.',  
  successTitle: 'Oynatma listesi silindi',  
  successMessage: 'Oynatma listesi silindi'  
},

// Play playlist command
playplaylist: {
  description: 'Oynatma listesini çal',  
  playlistDesc: 'Oynatma listesi adı',  
  notInVoiceChannel: 'Bu komutu kullanmak için bir ses kanalında olmalısınız.',  
  error: 'Oynatma listesine erişim sırasında hata oluştu.',  
  notFound: 'Oynatma listesi bulunamadı.',  
  noPermission: 'Bu liste özel ve sahibi değilsiniz.',  
  emptyPlaylist: 'Oynatma listesi boş.',  
  successTitle: 'Oynatma listesi başladı',  
  successMessage: 'Oynatma listesi çalmaya başladı',  
  failedToPlay: 'Oynatma listesi çalınamadı.',  
},

// Remove song command
removesong: {
  description: 'Oynatma listesinden bir şarkıyı çıkar',  
  playlistDesc: 'Oynatma listesi adı',  
  songDesc: 'Şarkı bağlantısı veya adı',  
  error: 'Oynatma listesine erişim sırasında hata oluştu.',  
  notFound: 'Oynatma listesi bulunamadı veya sahibi değilsiniz.',  
  removeError: 'Şarkı kaldırılırken hata oluştu.',  
  successTitle: 'Şarkı çıkarıldı',  
  successMessage: 'Şarkı çıkarıldı',  
  fromPlaylist: 'oynatma listesinden çıkarıldı',  
},

// Show all playlists command
showallplaylists: {
  description: 'Tüm oynatma listelerini göster',  
  error: 'Oynatma listeleri alınırken hata oluştu.',  
  noPlaylists: 'Oynatma listesi bulunamadı.',  
  title: 'Tüm oynatma listeleri',  
  page: 'Sayfa',  
  songs: 'Şarkılar',  
  by: 'mr_berk.',  
  visibility: 'Gizlilik',  
  public: 'Genel',  
  private: 'Özel',  
},
  // Show playlist command
  showplaylist: {  
    description: 'Oynatma listelerinizi göster',  
    error: 'Oynatma listeleriniz getirilirken hata oluştu.',  
    noPlaylists: 'Herhangi bir oynatma listeniz yok.',  
    title: 'Oynatma listeleriniz',  
    page: 'Sayfa',  
    songs: 'Şarkılar',  
    visibility: 'Gizlilik',  
    public: 'Genel',  
    private: 'Özel',  
  },  
  
  // Playlist command
  playlist: {  
    errorNotInVoiceChannel: 'Bu komutu kullanmak için bir ses kanalında olmalısınız.',  
    playlistAdded: 'Oynatma listesi kuyruğa eklendi!',  
    errorAddingPlaylist: 'Oynatma listesi kuyruğa eklenirken hata oluştu.',  
    titleError: 'Hata',  
    titlePlaylistAdded: 'Oynatma listesi eklendi',  
    pdescription: 'Oynatma listesini çal',  
  },  
  
  // Lyrics command
  lyrics: {  
    description: 'Şarkı sözlerini al',  
    songDescription: 'Şarkının adı veya bağlantısı',  
    noLyricsFound: 'Bu şarkı için sözler bulunamadı.',  
  },  
  
  // Show playlist songs command
  showplaylistsongs: {  
    description: 'Oynatma listesindeki tüm şarkıları göster',  
    playlistDesc: 'Oynatma listesi adı',  
    errorAccess: 'Oynatma listesine erişim sırasında hata oluştu.',  
    errorNotFound: 'Oynatma listesi bulunamadı.',  
    title: 'Oynatma listesindeki şarkılar',  
    noSongs: 'Oynatma listesinde şarkı yok.',  
  },
   // Play song command
playSong: {
  authorName: 'Çalıyor..',
  url: 'https://cdn.discordapp.com/attachments/1175120971062054964/1216391019960991825/standard_6.gif?ex=66ae3d6a&is=66acebea&hm=40f6ecb957e50be06a416d0ffdfaaf8cc266c22a17d37f0e82f4c993b6add834&',
  song: 'Şarkı',
  duration: 'Süre',
  source: 'Kaynak'
},

// Add song command
addSong: {
  authorName: 'Kuyruğa eklendi',
  url: 'https://cdn.discordapp.com/attachments/1175120971062054964/1216391019960991825/standard_6.gif?ex=66ae3d6a&is=66acebea&hm=40f6ecb957e50be06a416d0ffdfaaf8cc266c22a17d37f0e82f4c993b6add834&',
  addedToQueue: 'Kuyruğa eklendi'
},

// Error command
error: {
  authorName: 'Uyarı!',
  url: 'https://cdn.discordapp.com/attachments/1175120971062054964/1216391019960991825/standard_6.gif?ex=66ae3d6a&is=66acebea&hm=40f6ecb957e50be06a416d0ffdfaaf8cc266c22a17d37f0e82f4c993b6add834&',
  errorMessage: 'Hata tespit edildi'
},

// Finish command
finish: {
  authorName: 'Kuyruk bitti',
  url: 'https://cdn.discordapp.com/attachments/1175120971062054964/1216391019960991825/standard_6.gif?ex=66ae3d6a&is=66acebea&hm=40f6ecb957e50be06a416d0ffdfaaf8cc266c22a17d37f0e82f4c993b6add834&',
  description: 'Kuyruk bitti!'
},

// Disconnect command
disconnect: {
  authorName: 'Bağlantı kesildi',
  url: 'https://cdn.discordapp.com/attachments/1175120971062054964/1216391019960991825/standard_6.gif?ex=66ae3d6a&is=66acebea&hm=40f6ecb957e50be06a416d0ffdfaaf8cc266c22a17d37f0e82f4c993b6add834&',
  description: 'Ses kanalından bağlantı kesildi'
},

// Empty command
empty: {
  authorName: 'Kanal boş',
  url: 'https://cdn.discordapp.com/attachments/1175120971062054964/1216391019960991825/standard_6.gif?ex=66ae3d6a&is=66acebea&hm=40f6ecb957e50be06a416d0ffdfaaf8cc266c22a17d37f0e82f4c993b6add834&',
  description: 'Ses kanalı boş, kanaldan çıkılacak.'
}
  };
