import BotWhatsapp from '@bot-whatsapp/bot';
import { ChatCompletionMessageParam } from 'openai/resources';
import { run } from 'src/service/openai';

/**
 * Un flujo conversación que es por defecto cuando no se contiene palabras clave en otros flujos
 */
export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.WELCOME)
    .addAction(async (ctx, { flowDynamic, state }) => {
        try {
            const newHistory = (state.getAllState()?.history ?? []) as ChatCompletionMessageParam[];
            const name = ctx?.pushName ?? '';

            // console.log(`[HISTORY]: `, newHistory);

            newHistory.push({
                role: "user",
                content: ctx.body
            });

            const largeResponse = await run(name, newHistory);
            const chunks = largeResponse.split(/(?<!\d)\.\s+/g)
            for(const chunk of chunks){
                await flowDynamic(chunk)
            }

            await flowDynamic(largeResponse);

            newHistory.push({
                role: "assistant",
                content: largeResponse
            });

            await state.update({ history: newHistory });
        } catch (error) {
            console.log(`[ERROR]: `, error);
        }
    })
