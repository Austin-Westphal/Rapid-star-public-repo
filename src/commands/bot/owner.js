const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `DevAustin`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `devaustin`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `RapidDevs`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `[https://www.rapiddevs.com](https://www.rapiddevs.com)`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 
