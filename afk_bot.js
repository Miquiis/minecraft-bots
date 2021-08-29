const mineflayer = require('mineflayer')

if (process.argv.length < 6) {
    console.log('Usage : node block_entity.js <host> <port> <name> [initial_commands]')
    process.exit(1)
}

function createBot() {
    const bot = mineflayer.createBot({
        host: process.argv[2],
        port: parseInt(process.argv[3]),
        username: process.argv[4] + "_Farm"
    })

    bot.once('spawn', function() {
        if (process.argv.length == 6)
        {
            const commands = process.argv.slice(5);
            commands.forEach(_command => {
                const command = _command.replace("|", " ");
                bot.chat(command);
            })
        }
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

createBot()