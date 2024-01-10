import "dotenv/config"
import BotWhatsapp from '@bot-whatsapp/bot';
import database from './database';
import provider from './provider';
import flow from './flow';
import { initServer } from "./service/http";


const main = async () => {
    const botInstance = await BotWhatsapp.createBot( {
        database: database,
        provider,
        flow
    })

    initServer(botInstance);
}

main();