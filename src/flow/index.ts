import BotWhatsapp from '@bot-whatsapp/bot';
import helloFlow from './hello.flow';
import welcomeFlow from './welcome.flow';
import paypalFlow from './paypal.flow';

export default BotWhatsapp.createFlow([
    helloFlow,
    welcomeFlow, 
    paypalFlow
])