const { ApplicationCommandOptionType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const db = require('../mongoDB');

module.exports = {
  name: "playlist",
  description: "Lets you manage Album commands.",
  options: [
    {
      name: "create",
      description: "Create an Album.",
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
          name: "name",
          description: "Give a name for your Album",
          type: ApplicationCommandOptionType.String,
          required: true
        },
        {
          name: "public",
          description: "Want to make it Public ? True 0r false",
          type: ApplicationCommandOptionType.Boolean,
          required: true
        }
      ]
    },
    {
      name: "delete",
      description: "Want to remove your Album ?",
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
          name: "name",
          description: "Write the name of your Album to delete.",
          type: ApplicationCommandOptionType.String,
          required: true
        }
      ]
    },
    {
      name: "add-music",
      description: "It allows you to add songs to the Album.",
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
          name: "playlist-name",
          description: "Write an Album name.",
          type: ApplicationCommandOptionType.String,
          required: true
        },
        {
          name: "name",
          description: "Write a song name or a song link.",
          type: ApplicationCommandOptionType.String,
          required: true
        }
      ]
    },
    {
      name: "delete-music",
      description: "It allows you to delete song from Album.",
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
          name: "playlist-name",
          description: "Write an Album name.",
          type: ApplicationCommandOptionType.String,
          required: true
        },
        {
          name: "name",
          description: "Write a song name.",
          type: ApplicationCommandOptionType.String,
          required: true
        }
      ]
    },
    {
      name: "list",
      description: "Browse songs in an Album.",
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
          name: "name",
          description: "Write an Album name.",
          type: ApplicationCommandOptionType.String,
          required: true
        }
      ]
    },
    {
      name: "lists",
      description: "Browse all your Albums.",
      type: ApplicationCommandOptionType.Subcommand,
      options: []
    },
    {
      name: "top",
      description: "Most popular Albums.",
      type: ApplicationCommandOptionType.Subcommand,
      options: []
    }
  ],
  permissions: "0x0000000000000800",
  run: async (client, interaction) => {
    try {
      let stp = interaction.options.getSubcommand()
      if (stp === "create") {
        let name = interaction.options.getString('name')
        let public = interaction.options.getBoolean('public')
        if (!name) return interaction.reply({ content: '⚠️ Enter Album name to create!', ephemeral: true }).catch(e => { })

        const userplaylist = await db.playlist.findOne({ userID: interaction.user.id })

        const playlist = await db.playlist.find().catch(e => { })
        if (playlist?.length > 0) {
          for (let i = 0; i < playlist.length; i++) {
            if (playlist[i]?.playlist?.filter(p => p.name === name)?.length > 0) {
              return interaction.reply({ content: '⚠️ Album already Exitst!', ephemeral: true }).catch(e => { })
            }
          }
        }

        if (userplaylist?.playlist?.length >= client.config.playlistSettings.maxPlaylist) return interaction.reply({ content: '🚫 Exceeded Album limit', ephemeral: true }).catch(e => { })

        const creatingAlbumEmbed = new EmbedBuilder()
          .setColor('#0099ff')
          .setTitle('Creating Album')
          .setDescription(`Hey <@${interaction.member.id}>, your album is being created. Rock on! 🎸`)
          .setTimestamp();

        // Replying with both content and embed
        await interaction.reply({
          content: '',
          embeds: [creatingAlbumEmbed]
        }).catch(e => {
          console.error('Error sending message:', e);
        });

        await db.playlist.updateOne({ userID: interaction.user.id }, {
          $push: {
            playlist: {
              name: name,
              author: interaction.user.id,
              authorTag: interaction.user.tag,
              public: public,
              plays: 0,
              createdTime: Date.now()
            }
          }
        }, { upsert: true }).catch(e => { })

        const albumCreatedEmbed = new EmbedBuilder()
  .setColor('#00ff00')
          .setAuthor({
            name: 'Album Created Sucessfully',
            iconURL: 'https://cdn.discordapp.com/attachments/1213421081226903552/1215554404527116288/7762-verified-blue.gif',
            url: 'https://discord.gg/FUEHs7RCqz'
          })
  .setDescription(`Hey <@${interaction.member.id}>, your album has been created successfully! 🎉`)
  .setTimestamp();

// Editing the reply with both content and embed
await interaction.editReply({
  content: '',
  embeds: [albumCreatedEmbed]
}).catch(e => {
  console.error('Error editing reply:', e);
});
      }

      if (stp === "delete") {
        let name = interaction.options.getString('name')
        if (!name) return interaction.reply({ content: '⚠️ Enter album name to create!', ephemeral: true }).catch(e => { })

        const playlist = await db.playlist.findOne({ userID: interaction.user.id }).catch(e => { })
        if (!playlist?.playlist?.filter(p => p.name === name).length > 0) return interaction.reply({ content: '❌ No album Found', ephemeral: true }).catch(e => { })

        const music_filter = playlist?.musics?.filter(m => m.playlist_name === name)
        if (music_filter?.length > 0){
          await db.playlist.updateOne({ userID: interaction.user.id }, {
            $pull: {
              musics: {
                playlist_name: name
              }
            }
          }).catch(e => { })
        }

       const deletingAlbumEmbed = new EmbedBuilder()
          .setColor('#0099ff')
          .setTitle('Deleting Album')
          .setDescription(`Hey <@${interaction.member.id}>, your album is being Deleted 🎸`)
          .setTimestamp();

        // Replying with both content and embed
        await interaction.reply({
          content: '',
          embeds: [deletingAlbumEmbed]
        }).catch(e => {
          console.error('Error sending message:', e);
        });

        await db.playlist.updateOne({ userID: interaction.user.id }, {
          $pull: {
            playlist: {
              name: name
            }
          }
        }, { upsert: true }).catch(e => { })

         const albumDeleteEmbed = new EmbedBuilder()
  .setColor('#00ff00')
          .setAuthor({
            name: 'Album Deleted Sucessfully',
            iconURL: 'https://cdn.discordapp.com/attachments/1213421081226903552/1215554404527116288/7762-verified-blue.gif',
            url: 'https://discord.gg/FUEHs7RCqz'
          })
  .setDescription(`Hey <@${interaction.member.id}>, your album has been Deleted successfully! ✨`)
  .setTimestamp();

// Editing the reply with both content and embed
await interaction.editReply({
  content: '',
  embeds: [albumDeleteEmbed]
}).catch(e => {
  console.error('Error editing reply:', e);
});
      }

      if (stp === "add-music") {
        let name = interaction.options.getString('name')
        if (!name) return interaction.reply({ content: '⚠️ Enter song name to search', ephemeral: true }).catch(e => { })
        let playlist_name = interaction.options.getString('playlist-name')
        if (!playlist_name) return interaction.reply({ content: '⚠️ Enter album name to add songs', ephemeral: true }).catch(e => { })

        const playlist = await db.playlist.findOne({ userID: interaction.user.id }).catch(e => { })
        if (!playlist?.playlist?.filter(p => p.name === playlist_name).length > 0) return interaction.reply({ content: 'Your Song Added!', ephemeral: true }).catch(e => { })

        let max_music = client.config.playlistSettings.maxMusic
        if (playlist?.musics?.filter(m => m.playlist_name === playlist_name).length > max_music) return interaction.reply({ content: "Reached Album songs limit".replace("{max_music}", max_music), ephemeral: true }).catch(e => { })
        let res 
        try{
          res = await client.player.search(name, {
            member: interaction.member,
            textChannel: interaction.channel,
            interaction
          })
        } catch (e) {
          return interaction.reply({ content: 'Cannot Find ❌', ephemeral: true }).catch(e => { })
        }
        if (!res || !res.length || !res.length > 1) return interaction.reply({ content: `Cannot Find ❌ `, ephemeral: true }).catch(e => { })
        const loadingembed = new EmbedBuilder()
        .setColor('#0099ff')
       .setAuthor({
          name: 'Song Added to Your Album',
          iconURL: 'https://cdn.discordapp.com/attachments/1213421081226903552/1213430944007061574/6943_Verified.gif',
          url: 'https://discord.gg/FUEHs7RCqz'
        })
        .setDescription(`Hey <@${interaction.member.id}>, your song has been Added successfully! ✨`)
        .setFooter({ text: 'YouTube - RTX GAMING' })
        await interaction.reply({
  content: '',
  embeds: [ loadingembed ] 
}).catch(e => {
  console.error('Error sending message:', e);
});

        const music_filter = playlist?.musics?.filter(m => m.playlist_name === playlist_name && m.music_name === res[0]?.name)
        if (music_filter?.length > 0) return interaction.editReply({ content: ' ❌ Song already in Album', ephemeral: true }).catch(e => { })

        await db.playlist.updateOne({ userID: interaction.user.id }, {
          $push: {
            musics: {
              playlist_name: playlist_name,
              music_name: res[0]?.name,
              music_url: res[0]?.url, 
              saveTime: Date.now()
            }
          }
        }, { upsert: true }).catch(e => { })

        await interaction.editReply({ content: `<@${interaction.member.id}>, \`${res[0]?.name}\` ` }).catch(e => { })

      }

      if (stp === "delete-music") {
        let name = interaction.options.getString('name')
        if (!name) return interaction.reply({ content: '⚠️ Enter Song Name to Search!', ephemeral: true }).catch(e => { })
        let playlist_name = interaction.options.getString('playlist-name')
        if (!playlist_name) return interaction.reply({ content: '⚠️ Enter name of the album to remove song!', ephemeral: true }).catch(e => { })

        const playlist = await db.playlist.findOne({ userID: interaction.user.id }).catch(e => { })
        if (!playlist?.playlist?.filter(p => p.name === playlist_name).length > 0) return interaction.reply({ content: '❌ No album Found!', ephemeral: true }).catch(e => { })

        const music_filter = playlist?.musics?.filter(m => m.playlist_name === playlist_name && m.music_name === name)
        if (!music_filter?.length > 0) return interaction.reply({ content: `❌ No Song found!`, ephemeral: true }).catch(e => { })

         const deletingSongEmbed = new EmbedBuilder()
          .setColor('#0099ff')
          .setTitle('Removing Song')
          .setDescription(`Hey <@${interaction.member.id}>, your Song is being Removed!`)
          .setTimestamp();

        // Replying with both content and embed
        await interaction.reply({
          content: '',
          embeds: [deletingSongEmbed]
        }).catch(e => {
          console.error('Error sending message:', e);
        });

        await db.playlist.updateOne({ userID: interaction.user.id }, {
          $pull: {
            musics: {
              playlist_name: playlist_name,
              music_name: name
            }
          }
        }, { upsert: true }).catch(e => { })

         const songDeleteEmbed = new EmbedBuilder()
  .setColor('#00ff00')
          .setAuthor({
            name: 'Song Removed Sucessfully',
            iconURL: 'https://cdn.discordapp.com/attachments/1213421081226903552/1215554404527116288/7762-verified-blue.gif',
            url: 'https://discord.gg/FUEHs7RCqz'
          })
  .setDescription(`Hey <@${interaction.member.id}>, your song has been Removed successfully! ✨`)
  .setTimestamp();

// Editing the reply with both content and embed
await interaction.editReply({
  content: '',
  embeds: [songDeleteEmbed]
}).catch(e => {
  console.error('Error editing reply:', e);
});
      }

      if (stp === "list") {
        let name = interaction.options.getString('name')
        if (!name) return interaction.reply({ content: '⚠️ Enter Album name to find it!', ephemeral: true }).catch(e => { })

        let trackl

        const playlist = await db.playlist.find().catch(e => { })
        if (!playlist?.length > 0) return interaction.reply({ content: `🚫 No Album name!`, ephemeral: true }).catch(e => { })

        let arr = 0
        for (let i = 0; i < playlist.length; i++) {
          if (playlist[i]?.playlist?.filter(p => p.name === name)?.length > 0) {

            let playlist_owner_filter = playlist[i].playlist.filter(p => p.name === name)[0].author
            let playlist_public_filter = playlist[i].playlist.filter(p => p.name === name)[0].public

            if (playlist_owner_filter !== interaction.member.id) {
              if (playlist_public_filter === false) {
                return interaction.reply({ content: '🚫 You cannot play this Album!', ephemeral: true }).catch(e => { })
              }
            }

            trackl = await playlist[i]?.musics?.filter(m => m.playlist_name === name)
            if (!trackl?.length > 0) return interaction.reply({ content: '❌ This album is Empty, add any songs to it!', ephemeral: true }).catch(e => { })

          } else {
            arr++
            if (arr === playlist.length) {
              return interaction.reply({ content: '❌ No album Found', ephemeral: true }).catch(e => { })
            }
          }
        }

        const backId = "emojiBack"
        const forwardId = "emojiForward"
        const backButton = new ButtonBuilder({
          style: ButtonStyle.Secondary,
          emoji: "◀️",
          customId: backId
        });

        const deleteButton = new ButtonBuilder({
          style: ButtonStyle.Secondary,
          emoji: "🚫",
          customId: "close"
        });

        const forwardButton = new ButtonBuilder({
          style: ButtonStyle.Secondary,
          emoji: "▶️",
          customId: forwardId
        });


        let kaçtane = 8
        let page = 1
        let a = trackl.length / kaçtane

        const generateEmbed = async (start) => {
          let sayı = page === 1 ? 1 : page * kaçtane - kaçtane + 1
          const current = trackl.slice(start, start + kaçtane)
          if (!current || !current?.length > 0) return interaction.reply({ content: '❌ Your album is Empty, add any songs to it!', ephemeral: true }).catch(e => { })
          return new EmbedBuilder()
           .setAuthor({
          name: 'Album Songs',
          iconURL: 'https://cdn.discordapp.com/attachments/1213421081226903552/1213422313035407360/8218-alert.gif',
          url: 'https://discord.gg/FUEHs7RCqz'
        })
            .setThumbnail(interaction.user.displayAvatarURL({ size: 2048, dynamic: true }))
            .setColor(client.config.embedColor) 
            .setDescription(`\n${current.map(data =>
              `\n\`${sayı++}\` | [${data.music_name}](${data.music_url}) - <t:${Math.floor(data.saveTime / 1000) }:R>`
            ) }`)
            .setFooter({ text: `Section ${page}/${Math.floor(a+1) }` })
        }

        const canFitOnOnePage = trackl.length <= kaçtane

        await interaction.reply({
          embeds: [await generateEmbed(0)],
          components: canFitOnOnePage
            ? []
            : [new ActionRowBuilder({ components: [deleteButton, forwardButton] })],
          fetchReply: true
        }).then(async Message => {
          const filter = i => i.user.id === interaction.user.id
          const collector = Message.createMessageComponentCollector({ filter, time: 65000 });


          let currentIndex = 0
          collector.on("collect", async (button) => {
            if (button.customId === "close") {
              collector.stop()
              return button.reply({ content: `Command Cancelled ❌`, ephemeral: true }).catch(e => { })
            } else {

              if (button.customId === backId) {
                page--
              }
              if (button.customId === forwardId) {
                page++
              }

              button.customId === backId
                ? (currentIndex -= kaçtane)
                : (currentIndex += kaçtane)

              await interaction.editReply({
                embeds: [await generateEmbed(currentIndex)],
                components: [
                  new ActionRowBuilder({
                    components: [
                      ...(currentIndex ? [backButton] : []),
                      deleteButton,
                      ...(currentIndex + kaçtane < trackl.length ? [forwardButton] : []),
                    ],
                  }),
                ],
              }).catch(e => { })
              await button.deferUpdate().catch(e => {})
            }
          })

          collector.on("end", async (button) => {
            button = new ActionRowBuilder().addComponents(
              new ButtonBuilder()
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("◀️")
                .setCustomId(backId)
                .setDisabled(true),
              new ButtonBuilder()
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("🚫")
                .setCustomId("close")
                .setDisabled(true),
              new ButtonBuilder()
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("▶️")
                .setCustomId(forwardId)
                .setDisabled(true))

            const embed = new EmbedBuilder()
              .setTitle(`${name}`)
              .setThumbnail(interaction.user.displayAvatarURL({ size: 2048, dynamic: true }))
              .setColor(client.config.embedColor)
              .setDescription('Timeout Use command again!'.replace("{name}", name))
              .setFooter({ text: 'YouTube - RTX GAMING' })
            return interaction.editReply({ embeds: [embed], components: [button] }).catch(e => { })

          })
        }).catch(e => { })

      }

      if (stp === "lists") {
        const playlist = await db?.playlist?.findOne({ userID: interaction.user.id }).catch(e => { })
        if (!playlist?.playlist?.length > 0) return interaction.reply({ content: `⚠️ You haven't created a Album`, ephemeral: true }).catch(e => { })

        let number = 1
        const embed = new EmbedBuilder()
          .setAuthor({
            name: 'Your Albums',
            iconURL: 'https://cdn.discordapp.com/attachments/1213421081226903552/1213422313035407360/8218-alert.gif',
            url: 'https://discord.gg/FUEHs7RCqz'
          })
          .setColor(client.config.embedColor)
          .setDescription(`\n${playlist?.playlist?.map(data =>
            `\n**${number++} |** \`${data.name}\` - **${playlist?.musics?.filter(m => m.playlist_name === data.name)?.length || 0}** plays (<t:${Math.floor(data.createdTime / 1000) }:R>)`
          ) }`)
          .setFooter({ text: 'YouTube - RTX GAMING' })
        return interaction.reply({ embeds: [embed] }).catch(e => { }) 

      }

      if (stp === "top") {
        let playlists = await db?.playlist?.find().catch(e => { })
        if (!playlists?.length > 0) return interaction.reply({ content: 'There are no playlists ❌', ephemeral: true }).catch(e => { })

        let trackl = []
        playlists.map(async data => {
          data.playlist.filter(d => d.public === true).map(async d => {
            let filter = data.musics.filter(m => m.playlist_name === d.name)
            if (filter.length > 0) {
              trackl.push(d)
            }
          })
        })

        trackl = trackl.filter(a => a.plays > 0) 

        if (!trackl?.length > 0) return interaction.reply({ content: 'There are no playlists ❌', ephemeral: true }).catch(e => { })

        trackl = trackl.sort((a, b) => b.plays - a.plays)

        const backId = "emojiBack"
        const forwardId = "emojiForward"
        const backButton = new ButtonBuilder({
          style: ButtonStyle.Secondary,
          emoji: "◀️",
          customId: backId
        });

        const deleteButton = new ButtonBuilder({
          style: ButtonStyle.Secondary,
          emoji: "🚫",
          customId: "close"
        });

        const forwardButton = new ButtonBuilder({
          style: ButtonStyle.Secondary,
          emoji: "▶️",
          customId: forwardId
        });


        let kaçtane = 8
        let page = 1
        let a = trackl.length / kaçtane

        const generateEmbed = async (start) => {
          let sayı = page === 1 ? 1 : page * kaçtane - kaçtane + 1
          const current = trackl.slice(start, start + kaçtane)
          if (!current || !current?.length > 0) return interaction.reply({ content: `There are no Albums ❌`, ephemeral: true }).catch(e => { })
          return new EmbedBuilder()
            .setAuthor({
              name: 'Top Albums',
              iconURL: 'https://cdn.discordapp.com/attachments/1213421081226903552/1213422313035407360/8218-alert.gif',
              url: 'https://discord.gg/FUEHs7RCqz'
            })
            .setThumbnail(interaction.user.displayAvatarURL({ size: 2048, dynamic: true }))
            .setColor(client.config.embedColor)
            .setDescription(`\n${current.map(data =>
              `\n**${sayı++} |** \`${data.name}\` By. \`${data.authorTag}\` - **${data.plays}** "plays" (<t:${Math.floor(data.createdTime / 1000) }:R>)`
            ) }`)
            .setFooter({ text: `Section ${page}/${Math.floor(a+1) }` })
        }

        const canFitOnOnePage = trackl.length <= kaçtane

        await interaction.reply({
          embeds: [await generateEmbed(0)],
          components: canFitOnOnePage
            ? []
            : [new ActionRowBuilder({ components: [deleteButton, forwardButton] })],
          fetchReply: true
        }).then(async Message => {
          const filter = i => i.user.id === interaction.user.id
          const collector = Message.createMessageComponentCollector({ filter, time: 120000 });


          let currentIndex = 0
          collector.on("collect", async (button) => {
            if (button.customId === "close") {
              collector.stop()
              return button.reply({ content: `Command stopped ✅`, ephemeral: true }).catch(e => { })
            } else {

              if (button.customId === backId) {
                page--
              }
              if (button.customId === forwardId) {
                page++
              }

              button.customId === backId
                ? (currentIndex -= kaçtane)
                : (currentIndex += kaçtane)

              await interaction.editReply({
                embeds: [await generateEmbed(currentIndex)],
                components: [
                  new ActionRowBuilder({
                    components: [
                      ...(currentIndex ? [backButton] : []),
                      deleteButton,
                      ...(currentIndex + kaçtane < trackl.length ? [forwardButton] : []),
                    ],
                  }),
                ],
              }).catch(e => { })
              await button.deferUpdate().catch(e => {})
            }
          })

          collector.on("end", async (button) => {
            button = new ActionRowBuilder().addComponents(
              new ButtonBuilder()
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("◀️")
                .setCustomId(backId)
                .setDisabled(true),
              new ButtonBuilder()
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("🚫")
                .setCustomId("close")
                .setDisabled(true),
              new ButtonBuilder()
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("▶️")
                .setCustomId(forwardId)
                .setDisabled(true))

            const embed = new EmbedBuilder()
              .setAuthor({
          name: 'Top Albums',
          iconURL: 'https://cdn.discordapp.com/attachments/1213421081226903552/1213422313035407360/8218-alert.gif',
          url: 'https://discord.gg/FUEHs7RCqz'
        })
              .setThumbnail(interaction.user.displayAvatarURL({ size: 2048, dynamic: true }))
              .setColor(client.config.embedColor)
              .setDescription('TimeOut!')
              .setFooter({ text: 'YouTube - RTX GAMING' })
            return interaction.editReply({ embeds: [embed], components: [button] }).catch(e => { })

          })
        }).catch(e => { })

      }
    } catch (e) {
      console.error(e);
      interaction.reply({ content: 'An error occurred while executing this command!', ephemeral: true }).catch(e => { })
    }
  }
}
