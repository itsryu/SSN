import { CommandData } from '../../../structures';
import { ApplicationCommandType, ApplicationCommandOptionType } from 'discord.js';

class BannerCommandDataConstructor extends CommandData {
    constructor() {
        super({
            name: 'banner',
            description: 'Gets the banner image of the mentioned user or your own banner.',
            type: ApplicationCommandType.ChatInput,
            name_localizations: {
                'pt-BR': 'banner',
                'en-US': 'banner'
            },
            description_localizations: {
                'pt-BR': 'Exibe o banner do usuário mencionado ou de si próprio.',
                'en-US': 'Shows the banner of the mentioned user or your own banner.'
            },
            category:  '⚙️ Utilidades',
            aliases:  ['userbanner', 'ub'],
            usage:  ['<usuário>'],
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
            },
            options: [
                {
                    name: 'user',
                    description: 'Select an user:',
                    type: ApplicationCommandOptionType.User,
                    name_localizations: {
                        'pt-BR': 'usuário',
                        'en-US': 'user'
                    },
                    description_localizations: {
                        'pt-BR': 'Selecione um usuário:',
                        'en-US': 'Select an user'
                    },
                    required: false
                }
            ]
        });
    }
}

export const BannerCommandData = new BannerCommandDataConstructor();