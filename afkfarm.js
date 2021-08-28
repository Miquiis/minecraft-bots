const mineflayer = require('mineflayer')

function createXPBot() {
    const bot = mineflayer.createBot({
        host: 'br4.purplehost.com.br',
        port: 10220,
        username: "XP_Farm"
    })

    bot.once('spawn', function() {
        bot.chat("/se autokiller");
    })
    bot.on('chat', async (username, message) => {
        if (username === bot.username) return
        const args = message.toLowerCase().split(" ");

        if (args.length >= 2)
        {
            if (args[0] === bot.username.toLowerCase())
            {
                switch (args[1])
                {
                    case 'command':
                        const command = args.slice(2).join(" ");
                        bot.chat(command)
                        break
                    case 'level':
                        bot.chat(bot.experience.level)
                        break
                }
            }
        }
    })
    bot.on('error', (err) => console.log(err))
    bot.on('end', () => setTimeout(createBot, 5000))
}

function createAFKBot() {
    const bot = mineflayer.createBot({
        host: 'br4.purplehost.com.br',
        port: 10220,
        username: "AFK_Farm"
    })

    bot.on('chat', async (username, message) => {
        if (username === bot.username) return
        const args = message.toLowerCase().split(" ");

        if (args.length >= 2)
        {
            if (args[0] === bot.username.toLowerCase())
            {
                switch (args[1])
                {
                    case 'command':
                        const command = args.slice(2).join(" ");
                        bot.chat(command)
                        break
                    case 'level':
                        bot.chat(bot.experience.level)
                        break
                }
            }
        }
    })
    bot.on('error', (err) => console.log(err))
    bot.on('end', () => setTimeout(createBot, 5000))
}

createAFKBot()
createXPBot()