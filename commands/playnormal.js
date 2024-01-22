const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const db = require("../mongoDB");
module.exports = {
  name: "playsong",
  description: "Play a track.",
  permissions: "0x0000000000000800",
  options: [
    {
      name: "normal",
      description: "Open music from other platforms.",
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
          name: "name",
          description: "Write your music name.",
          type: ApplicationCommandOptionType.String,
          required: true
        }
      ]
    },
    {
      name: "playlist",
      description: "Write your playlist name.",
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
          name: "name",
          description: "Write the name of the playlist you want to create.",
          type: ApplicationCommandOptionType.String,
          required: true
        }
      ]
    },
  ],
  voiceChannel: true,
  run: async (client, interaction) => {


   

    try {
      let stp = interaction.options.getSubcommand()

      if (stp === "playlist") {
        let playlistw = interaction.options.getString('name')
        let playlist = await db?.playlist?.find().catch(e => { })
        if (!playlist?.length > 0) return interaction.reply({ content: `❌`, ephemeral: true }).catch(e => { })

        let arr = 0
        for (let i = 0; i < playlist.length; i++) {
          if (playlist[i]?.playlist?.filter(p => p.name === playlistw)?.length > 0) {

            let playlist_owner_filter = playlist[i].playlist.filter(p => p.name === playlistw)[0].author
            let playlist_public_filter = playlist[i].playlist.filter(p => p.name === playlistw)[0].public

            if (playlist_owner_filter !== interaction.member.id) {
              if (playlist_public_filter === false) {
                return interaction.reply({ content: `❌`, ephemeral: true }).catch(e => { })
              }
            }

            const music_filter = playlist[i]?.musics?.filter(m => m.playlist_name === playlistw)
            if (!music_filter?.length > 0) return interaction.reply({ content: `❌`, ephemeral: true }).catch(e => { })

            interaction.reply({ content: `❌` }).catch(e => { })

            let songs = []
            music_filter.map(m => songs.push(m.music_url))

            setTimeout(async () => {
              const playl = await client?.player?.createCustomPlaylist(songs, {
                member: interaction.member,
                properties: { name: playlistw, source: "custom" },
                parallel: true
              });

              await interaction.editReply({ content: `❌`.replace("{interaction.member.id}", interaction.member.id).replace("{music_filter.length}", music_filter.length) }).catch(e => { })

              try {
                await client.player.play(interaction.member.voice.channel, playl, {
                  member: interaction.member,
                  textChannel: interaction.channel,
                  interaction
                })
              } catch (e) {
                await interaction.editReply({ content: `❌ No results found!!`, ephemeral: true }).catch(e => { })
              }

              playlist[i]?.playlist?.filter(p => p.name === playlistw).map(async p => {
                await db.playlist.updateOne({ userID: p.author }, {
                  $pull: {
                    playlist: {
                      name: playlistw
                    }
                  }
                }, { upsert: true }).catch(e => { })

                await db.playlist.updateOne({ userID: p.author }, {
                  $push: {
                    playlist: {
                      name: p.name,
                      author: p.author,
                      authorTag: p.authorTag,
                      public: p.public,
                      plays: Number(p.plays) + 1,
                      createdTime: p.createdTime
                    }
                  }
                }, { upsert: true }).catch(e => { })
              })
            }, 3000)
          } else {
            arr++
            if (arr === playlist.length) {
              return interaction.reply({ content: `❌`, ephemeral: true }).catch(e => { })
            }
          }
        }
      }

      if (stp === "normal") {
  const name = interaction.options.getString('name');
  if (!name) {
    return interaction.reply({ content: '▶️ Give Text or link', ephemeral: true }).catch(e => {});
  }

  const embed = new EmbedBuilder()
    .setColor('#3498db')
    .setColor('#FF0000')
    .setDescription('**🎸 Get ready for a musical journey!**');

  await interaction.reply({ embeds: [embed] }).catch(e => {});

  try {
    await client.player.play(interaction.member.voice.channel, name, {
      member: interaction.member,
      textChannel: interaction.channel,
      interaction
    });
  } catch (e) {
    const errorEmbed = new EmbedBuilder()
      .setColor('#e74c3c')
      .setColor('#FF0000')
      .setDescription('❌ No results found!!');

    await interaction.editReply({ embeds: [errorEmbed], ephemeral: true }).catch(e => {});
  }
}

    } catch (e) {
      const errorNotifer = require("../functions.js")
      errorNotifer(client, interaction, e, pint)
    }
  },
};
