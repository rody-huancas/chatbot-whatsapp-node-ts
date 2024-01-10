import BotWhatsapp from '@bot-whatsapp/bot';
import { generatePaymentLink } from 'src/service/paypal';

export default BotWhatsapp.addKeyword(["paypal"])
    .addAnswer("¿Cómo es tu email? lo necesito para generar el link de ", {capture: true}, async (ctx, {state, fallBack}) => {
        if(!ctx.body.includes('@')){
            return fallBack("Ey!, ese no es un email válido!")
        }

        await state.update({email: ctx.body.toLocaleLowerCase()})
    })
    .addAnswer("Generando link de pago")
    .addAction(async (cts, {flowDynamic, state}) => {
        const email = state.get("email");
        const paypalLink = await generatePaymentLink('20.00', email);
        await flowDynamic(paypalLink);
    })
