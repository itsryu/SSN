import { CommandData } from '../../../structures';
import { ApplicationCommandType } from 'discord.js';

class PingCommandDataConstructor extends CommandData {
    constructor() {
        super({
            name: 'ping',
            description: 'Displays the response ping between user and client and BOT host.',
            type: ApplicationCommandType.ChatInput,
            name_localizations: {
                'pt-BR': 'ping',
                'en-US': 'ping'
            },
            description_localizations: {
                'pt-BR': 'Exibe o ping de resposta entre usuário e cliente e do host do BOT.',
                'en-US': 'Displays the response ping between user and client and BOT host.'
            },
            category: '⚙️ Utilidades',
            aliases: ['pong'],
            usage: [],
            permissions: {
                client: ['EmbedLinks'],
                member: []
            },
            config: {
                cooldown: 10,
                devOnly: false,
                interactionOnly: false,
                registerSlash: true,
                args: false
            }
        });
    }
}

export const PingCommandData = new PingCommandDataConstructor();